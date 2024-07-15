<template>
  <div class="relative overflow-hidden h-auto mb-10 md:mb-0 xl:h-screen" >
    <template v-for="(item, index) in items" :key="index">
      <TransitionRoot :show="active === index" enter="transition ease-out duration-10000 transform"
        enterFrom="translate-x-full" enterTo="translate-x-0" leave="transition ease-in duration-10000 transform absolute"
        leaveFrom="translate-x-0" leaveTo="-translate-x-full" @before-enter="heightFix()" class="inset-0">
        <div class="relative bg-sento rounded-3xl mx-4 px-0 sm:mx-8 sm:px-14">
          <div class="flex justify-center md:justify-start text-left text-white z-0">
            <div class="w-3/5 xl:mt-40 xl:mb-20">
              <p class="text-3xl md:text-6xl xl:text-7xl font-normal sm:font-semibold py-3">{{ item.letter }}</p>
              <p class="text-lg md:text-xl font-light sm:font-normal py-3">{{ item.letter2 }}</p>
              <div class="text-center md:text-left md:justify-start">
              <button class="mixed-button">
                {{ $t('fast') }}
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                  <path fill="#56585e"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </button>
            </div>
            </div>
            <div class="hidden md:block w-2/5 bottom-0 right-0 mr-0 pr-0 pl-0 ml-0 mt-20 absolute z-0">
              <img class="rounded-xl ml-auto mr-0 pointer-events-none" :src="item.img" width="430" height="470"
                :alt="item.desc" />
            </div>
          </div>

          <div class="mx-auto flex justify-center space-x-4 z-10 bg-sento rounded-3xl mt-0">
            <template v-for="(item, index) in items" :key="index">
              <button v-if="getPositionClass(index) !== 'inactive'"
                class="group relative rounded p-2 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                @click="active = index">
                <span class="flex flex-col items-center text-center transition-opacity"
                  :class="getPositionClass(index)">
                  <div class="relative flex items-center justify-center">
                    <svg class="progress-circle" viewBox="0 0 36 36">
                      <path class="circle-bg" d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path class="circle" :style="{ strokeDasharray: `${active === index ? progress : 0}, 100` }" d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span class="absolute text-sm text-center font-medium text-slate-900">{{ index + 1 }}</span>
                  </div>
                </span>
              </button>
            </template>
          </div>
        </div>
      </TransitionRoot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const duration: number = 5000
const itemsRef = ref<HTMLDivElement | null>(null)
const frame = ref<number>(0)
const firstFrameTime = ref(performance.now())
const active = ref<number>(0)
const progress = ref<number>(0)

interface Item {
  img: string
  desc: string
  buttonIcon: string
  letter: string
  letter2: string
}

const props = defineProps<{
  items: Item[]
}>()

const items = props.items

const startAnimation = () => {
  firstFrameTime.value = performance.now()
  frame.value = requestAnimationFrame(animate)
}

const animate = (now: number) => {
  let timeDifference = now - firstFrameTime.value
  let timeFraction = Math.max(0, timeDifference) / duration
  if (timeFraction <= 1) {
    progress.value = timeFraction * 100
    frame.value = requestAnimationFrame(animate)
  } else {
    timeFraction = 1
    progress.value = 0
    active.value = (active.value + 1) % items.length
    startAnimation()
  }
}

const heightFix = async () => {
  await nextTick()
  if (itemsRef.value && itemsRef.value.parentElement) itemsRef.value.parentElement.style.height = `${itemsRef.value.clientHeight}px`
}

onMounted(() => startAnimation())

onUnmounted(() => cancelAnimationFrame(frame.value))

watch(active, () => {
  cancelAnimationFrame(frame.value)
  startAnimation()
})

const getPositionClass = (index: number) => {
  const activeIndex = active.value;
  const lastIndex = items.length - 1;

  if (index === activeIndex) {
    return 'active';
  } else if (index === (activeIndex + 1) % items.length && activeIndex !== lastIndex) {
    return 'next';
  } else if (index === (activeIndex - 1 + items.length) % items.length && activeIndex !== 0) {
    return 'prev';
  } else if (index === lastIndex) {
    return 'inactive';
  }

  return 'inactive';
};
</script>

<style scoped>
/* img elementi için margin sıfırlama */
.transition-all img {
  margin: 0;
}

/* Yuvarlak ilerleme çubuğu için stiller */
.progress-circle {
  width: 40px;
  height: 40px;
  transform: rotate(-90deg);
}

.circle-bg {
  fill: none;
  stroke: bg-sento;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke: white;
  /* İlerleme çubuğu rengi */
  stroke-width: 2.8;
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s;
}

button .absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Geçiş animasyonu için stiller */
.transition-opacity {
  transition: opacity 0.5s ease-in-out;
}

.active {
  opacity: 1;
  order: 2;
  transform: scale(1.1);
}

.prev,
.next {
  opacity: 0.5;
  order: 1;
  transform: scale(0.9);
}

.prev {
  order: 1;
}

.next {
  order: 3;
}

.inactive {
  display: none;
}

.mixed-button {
  position: relative;
  border: 2px white solid;
  text-transform: uppercase;
  outline: 0;
  overflow: hidden;
  background: #EE5959;
  z-index: 0;
  cursor: pointer;
  transition: width 0.3s ease-in-out;
  @apply text-sento w-48 lg:w-1/4 font-medium rounded-full text-xs px-5 my-3 text-left me-2 mb-2 uppercase border-2 border-dashed;
}

.mixed-button:hover {
  text-align: center;
}

.mixed-button:before {
  content: "";
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(100% - 50px);
  z-index: -1;
  transition: width 0.3s ease-in-out;
  border-radius: 9999px;
}

.mixed-button:hover:before {
  width: 100%;
}

.mixed-button svg {
  position: absolute;
  right: 5px;
  top: 8px;
  fill: #383736;
  opacity: 1;
  transition: transform 0.3s ease-in-out;
}

.mixed-button:hover svg {
  top: -18px;
  transform: translateX(-10px) translateY(100%);

}

.mixed-button:hover svg:hover {
  transform: translateY(0) translateX(0);
}
</style>
