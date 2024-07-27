<template>
  <nav class="relative bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md mb-2">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a href="#" class="taker flex items-center">
        <img src="" class="img mr-4 h-6 sm:h-9" alt="Logo" />
      </a>
      <div class="flex items-center lg:order-2">
        <button @click="toggleSidebar" data-collapse-toggle="mobile-menu-2" type="button"
          class="inline-flex justify-end justify-self-end items-right p-2 ml-1 text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div @mouseover="toggleBlur(true)" @mouseleave="toggleBlur(false)"
        class="relative z-10 w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul
          class="hidden lg:flex lg:flex-row lg:space-x-8 lg:mt-0 lg:hover:bg-white mt-4 font-medium  rounded-full py-2 px-2 ml-20">
          <PopoverGroup class="lg:gap-x-12">
            <Popover class="relative">
              <PopoverButton
                class="flex items-center gap-x-1 leading-6 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 "
                @mouseover="groupPanelOpen = true" @mouseleave="groupPanelOpen = false">
                {{ $t('navBtnName') }}
                <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </PopoverButton>
              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">
                <div v-show="groupPanelOpen" @mouseover="groupPanelOpen = true" @mouseleave="groupPanelOpen = false"
                  class="absolute -left-8 top-full z-10 h-36 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-sento shadow-lg ring-1 ring-gray-900/5">
                  <div class="p-4">
                    <div v-for="item in products" :key="item.name"
                      class="group relative flex items-center gap-x-6 rounded-lg p-4 pb-8 leading-6">
                      <div class="customHover flex-auto pr-5">
                        <a :href="item.href" class="block font-semibold text-white">
                          {{ item.name }}
                          <span class="absolute inset-0" />
                        </a>
                        <hr>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </Popover>
          </PopoverGroup>
          <PopoverGroup class="lg:gap-x-12" @mouseover="groupPanelOpen2 = true" @mouseleave="groupPanelOpen2 = false">
            <Popover class="relative">
              <PopoverButton
                class="flex items-center gap-x-1 leading-6 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 ">
                {{ $t('navBtnName2') }}
                <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </PopoverButton>
              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">
                <div v-show="groupPanelOpen2"
                  class="absolute -left-8 top-full z-10 mt-3 w-screen h-36 max-w-md overflow-hidden rounded-3xl bg-sento shadow-lg ring-1 ring-gray-900/5"
                  @mouseover="groupPanelOpen2 = true" @mouseleave="groupPanelOpen2 = false">
                  <div class="p-4 ">
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 pb-8 leading-6">
                      <div class="customHover flex-auto pr-5">
                        <a href="#" class="block font-semibold text-white" @mouseover="opup = true"
                          @mouseleave="opup = false">
                          {{ t('navbtn3') }}
                          <span class="absolute inset-0" />
                        </a>
                        <hr>
                      </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6">
                      <div class="customHover flex-auto pr-5">
                        <a href="#" class="block font-semibold text-white" @mouseover="opup2 = true"
                          @mouseleave="opup2 = false">
                          {{ t('navbtn4') }}
                          <span class="absolute inset-0" />
                        </a>
                        <hr>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-x-1" enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-1">
                <div v-show="opup"
                  class="absolute sm:left-28 sm:mt-4 lg:mt-0 left-full top-9 ml-20 z-10 h-36 w-screen max-w-md overflow-hidden rounded-3xl bg-red-600 shadow-lg ring-1 ring-gray-900/5"
                  @mouseover="opup = true" @mouseleave="opup = false">
                  <div class="p-4">
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 pb-8 leading-6">
                      <div class="customHover flex-auto pr-5">
                        <a href="#" class="block font-semibold text-white">
                          {{ $t('navbtn5') }}
                          <span class="absolute inset-0" />

                        </a>
                        <hr>
                      </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6">
                      <div class="customHover flex-auto pr-5">
                        <a href="#" class="block font-semibold text-white">
                          {{ $t('navbtn6') }}
                          <span class="absolute inset-0" />
                        </a>
                        <hr>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-x-1" enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-1">
                <div v-show="opup2"
                  class="absolute sm:left-28 sm:mt-4 lg:mt-0 left-full top-9 ml-20 z-10 h-36 w-screen max-w-md overflow-hidden rounded-3xl bg-red-600 shadow-lg ring-1 ring-gray-900/5"
                  @mouseover="opup2 = true" @mouseleave="opup2 = false">
                  <div class="p-4">
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 pb-8 leading-6">
                      <div class="customHover flex-auto pr-5">
                        <a href="#" class="block font-semibold text-white">
                          {{ $t('navbtn7') }}
                          <span class="absolute inset-0" />
                        </a>
                        <hr>
                      </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6">
                      <div class="customHover flex-auto pr-5">
                        <a href="#" class="block font-semibold text-white">
                          {{ $t('navbtn8') }}
                          <span class="absolute inset-0" />
                        </a>
                        <hr>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </Popover>
          </PopoverGroup>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 "
              aria-current="page">{{ $t('navBtnName3') }}</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 ">{{
                $t('navBtnName4') }}</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 ">{{
                $t('navBtnName5') }}</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 ">{{
                $t('navBtnName6') }}</a>
          </li>
        </ul>
      </div>
      <div v-if="menuOpen"
        class="hidden xl:flex xl:w-auto xl:justify-left flex-wrap justify-center lg:order-1">
        <div class="w-full xl:w-auto xl:mt-2 xl:w-3/7 p-2 text-center">
          <a href="#" class="text-black uppercase bg-sento-gray focus:ring-4 rounded-full p-2 mr-2 "
            style="background-color: #EFF1F2;">
            {{ $t('psy') }}
          </a>
        </div>
        <div class="xl:w-4/7 p-2 text-center">
          <button class="mixed-button">
            {{ $t('fast') }}
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
              <path fill="#56585e"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div v-if="isBlurred" class="absolute inset-0 z-0 backdrop-brightness-50"></div>
    </div>
    <NavBarsSide v-model="isSidebarOpen"/>
  </nav>
</template>
<script setup>
import { ref, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';
import NavBarsSide from './NavBarsSideBar.vue';

import {
  Popover,
  PopoverButton,
  PopoverGroup,
} from '@headlessui/vue';

import { ChevronDownIcon } from '@heroicons/vue/20/solid';
const { t } = useI18n();
const products = [
  { name: t('navbtn'), href: '#' },
  { name: t('navbtn2'), href: '#' },
];
const products2 = [
  { name: t('navbtn3'), href: '#' },
  { name: t('navbtn4'), href: '#' },
];
const products3 = [
  { name: t('navbtn5'), href: '#' },
  { name: t('navbtn6'), href: '#' },
];

const mobileMenuOpen = ref(false);
const menuOpen = ref(true);
const isOpen = ref(true);
const groupPanelOpen = ref(false);
const groupPanelOpen2 = ref(false);
const opup = ref(false);
const opup2 = ref(false);

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

const emits = defineEmits(['toggleBlur']);
const isBlurred = ref(false);

function toggleBlur(value) {
  isBlurred.value = value;
  emits('toggleBlur', value);
}
</script>

<style>
.taker img {
  position: absolute;
  opacity: 1;
  /* Resim başlangıçta görünür olacak */
  transition: transform 0.3s ease-in-out;
  /* Geçiş süresi ve efekti ayarlandı */
}

.taker:hover img {
  animation: hoverAnimation 0.6s infinite alternate;
  /* Sürekli animasyon */
}

@keyframes hoverAnimation {
  0% {
    transform: translateX(0) translateY(0);
    /* Başlangıç konumu */
  }

  100% {
    transform: translateX(0) translateY(-50%);
    /* Bitiş konumu */
  }
}

.customHover {
  opacity: 1;
  transition: transform 0.5s ease-in-out;
  @apply flex-auto pr-5;
}

.customHover:hover {
  transform: translateX(10px) translateY(0);
}

.mixed-button {
  position: relative;
  border: 2px #E61111 solid;
  text-transform: uppercase;
  outline: 0;
  overflow: hidden;
  background: none;
  z-index: 0;
  cursor: pointer;
  transition: width 0.3s ease-in-out;
  /* Buton genişliği için geçiş süresi ayarlandı */
  @apply text-white w-full font-medium rounded-full text-xs px-5 pr-16 py-2.5 text-left me-2 mb-2 uppercase border-2 border-dashed;
}

.mixed-button:hover {
  width: 105%;
  /* Hover durumunda buton genişliğini artırdık */
  text-align: center;
}

.mixed-button:before {
  content: "";
  position: absolute;
  @apply bg-sento;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(100% - 50px);
  z-index: -1;
  transition: width 0.3s ease-in-out;
  /* Arkaplan genişliği için geçiş süresi ayarlandı */
  border-radius: 9999px;
  /* Yuvarlatılmış köşe ekledik */
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
  /* SVG başlangıçta görünür olacak */
  transition: transform 0.3s ease-in-out;
  /* Geçiş süresi ve efekti ayarlandı */
}

.mixed-button:hover svg {
  top: -18px;
  transform: translateX(-10px) translateY(100%);
  /* Sağa doğru 30px hareket */

}

.mixed-button:hover svg:hover {
  transform: translateY(0) translateX(0);
  /* İkonun ilk konumuna geri dönmesi */
}
</style>