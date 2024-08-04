<template>
  <swiper :slidesPerView="slidesPerView" :spaceBetween="30" :centeredSlides="true" :loop="true"
    :autoplay="{ delay: 1500, disableOnInteraction: false }" :modules="modules" @slideChange="onSlideChange"
    :breakpoints="{
      0: {
        slidesPerView: 1,
      },
      768: { // md boyutu (min-width: 768px)
        slidesPerView: 5,
      },
    }" class="mySwiper">
    <swiper-slide>
      <img src="./images/abdi.png" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="./images/cyber.png" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="./images/defacto.png" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="./images/petrol.png" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="./images/securitas.png" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="./images/tab.png" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="./images/unilever.png" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="./images/eitya.webp" alt="">
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
      activeSlide: 1,
      slidesPerView: 5,
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
  