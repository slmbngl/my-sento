<template>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :modules="modules"
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
              class="stroke-current text-sento"
              stroke-width="2"
            ></circle>
            <g class="origin-center -rotate-90 transform">
              <circle
                id="circle1"
                cx="18"
                cy="18"
                r="16"
                fill="none"
                class="stroke-current text-gray-200"
                stroke-width="2"
                stroke-dasharray="100"
                stroke-dashoffset="75"
              >
                <animate
                  id="animate1"
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="72"
                  dur="2s"
                  fill="freeze"
                  begin="indefinite"
                />
              </circle>
            </g>
          </svg>
          <div
            class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <span class="text-center text-2xl font-bold text-gray-800"
              >72%</span
            >
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
              class="stroke-current text-sento"
              stroke-width="2"
            ></circle>
            <g class="origin-center -rotate-90 transform">
              <circle
                id="circle2"
                cx="18"
                cy="18"
                r="16"
                fill="none"
                class="stroke-current text-gray-200"
                stroke-width="2"
                stroke-dasharray="100"
                stroke-dashoffset="75"
              >
                <animate
                  id="animate2"
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="40"
                  dur="2s"
                  fill="freeze"
                  begin="indefinite"
                />
              </circle>
            </g>
          </svg>
          <div
            class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <span class="text-center text-2xl font-bold text-gray-800"
              >40%</span
            >
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
              class="stroke-current text-sento"
              stroke-width="2"
            ></circle>
            <g class="origin-center -rotate-90 transform">
              <circle
                id="circle3"
                cx="18"
                cy="18"
                r="16"
                fill="none"
                class="stroke-current text-gray-200"
                stroke-width="2"
                stroke-dasharray="100"
                stroke-dashoffset="75"
              >
                <animate
                  id="animate3"
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="50"
                  dur="2s"
                  fill="freeze"
                  begin="indefinite"
                />
              </circle>
            </g>
          </svg>
          <div
            class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <span class="text-center text-2xl font-bold text-gray-800"
              >50%</span
            >
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
      };
    },
    methods: {
      onSlideChange(swiper) {
        this.activeSlide = swiper.realIndex;
        this.triggerAnimation(this.activeSlide);
      },
      triggerAnimation(index) {
        const animations = ['animate1', 'animate2', 'animate3'];
        const animationElement = document.getElementById(animations[index]);
        if (animationElement) {
          animationElement.beginElement();
        }
      },
    },
    mounted() {
      this.triggerAnimation(this.activeSlide);
    },
  };
  </script>
  