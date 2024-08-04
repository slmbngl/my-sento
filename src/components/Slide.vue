<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :modules="modules"
    :loop="true"
    @slideChange="onSlideChange"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="relative size-40">
        <svg
          class="size-full"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current text-gray-200"
            stroke-width="2"
          ></circle>
          <g class="origin-center -rotate-90 transform">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              class="stroke-current text-sento transition-all duration-1000"
              stroke-width="2"
              :style="{ strokeDashoffset: circleOffsets[0] }"
              stroke-dasharray="100"
            ></circle>
          </g>
        </svg>
        <div
          class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
          <div class="text-center text-xs text-black pb-2">Odaklanma</div>
          <span class="text-center text-2xl font-bold text-sento">{{ currentPercent }}%</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative size-40">
        <svg
          class="size-full"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current text-gray-200"
            stroke-width="2"
          ></circle>
          <g class="origin-center -rotate-90 transform">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              class="stroke-current text-sento transition-all duration-1000"
              stroke-width="2"
              :style="{ strokeDashoffset: circleOffsets[1] }"
              stroke-dasharray="100"
            ></circle>
          </g>
        </svg>
        <div
          class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
          <div class="text-center text-xs text-black">Üretkenlik Artışı</div>
          <span class="text-center text-2xl font-bold text-sento ml-4">{{ currentPercent }}%</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative size-40">
        <svg
          class="size-full"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current text-gray-200"
            stroke-width="2"
          ></circle>
          <g class="origin-center -rotate-90 transform">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              class="stroke-current text-sento transition-all duration-1000"
              stroke-width="2"
              :style="{ strokeDashoffset: circleOffsets[2] }"
              stroke-dasharray="100"
            ></circle>
          </g>
        </svg>
        <div
          class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
        <div class="text-center text-xs text-black pb-2">Verimlilik</div>
        <span class="text-center text-2xl font-bold text-sento">{{ currentPercent }}%</span>
          
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      activeSlide: 0,
      circleOffsets: [100, 100, 100], // Default offset values
      desiredOffsets: [28, 60, 50], // Corresponding to 72%, 40%, 50%
      currentPercent: 0, // Animated percentage value
      intervalId: null, // Store the interval ID to clear it
    };
  },
  methods: {
    onSlideChange(swiper) {
      this.activeSlide = swiper.realIndex;
      this.triggerAnimation(this.activeSlide);
    },
    triggerAnimation(index) {
      this.animateCircle(index, this.desiredOffsets[index]);
      this.animatePercentage(index);
    },
    animateCircle(index, targetOffset) {
      this.circleOffsets = this.circleOffsets.map((offset, i) =>
        i === index ? targetOffset : 100
      );
    },
    animatePercentage(index) {
      const targetPercent = [72, 40, 50][index];
      this.currentPercent = 0;

      // Clear any previous interval to prevent overlapping animations
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }

      // Start the animation
      let currentValue = 0;
      this.intervalId = setInterval(() => {
        if (currentValue >= targetPercent) {
          clearInterval(this.intervalId);
          this.currentPercent = targetPercent; // Ensure the exact target value
        } else {
          currentValue += 1;
          this.currentPercent = currentValue;
        }
      }, 25);
    },
  },
  mounted() {
    this.triggerAnimation(this.activeSlide);
  },
  beforeUnmount() {
    // Clear interval when component unmounts to prevent memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
};
</script>
