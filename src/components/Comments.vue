<template>
  <swiper :pagination="true" :modules="modules" :autoplay="{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter:true }"
    @slideChange="onSlideChange" @touchStart="onTouchStart" @touchEnd="onTouchEnd" class="mySwiper">
    <swiper-slide class="mb-32">
      <div class="flex justify-between items-center w-full px-5 md:px-0 md:mt-20">
        <svg class="ml-4 md:ml-28" xmlns="http://www.w3.org/2000/svg" height="64" width="56" viewBox="0 0 448 512">
          <path fill="#e61111"
            d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
        </svg>
        <div class="relative mt-24 mr-6 md:mr-28 ">
          <p class="text-3xl md:text-5xl text-right md:text-left font-semibold mr-4">İyi ki Sento Var!</p>
          <div class="absolute w-2 h-1/2 rounded-full top-0 right-0 border border-red-600"></div>
        </div>
      </div>
      <div class="col mt-16">
        <p class="mb-4 md:mb-0 mx-14 md:mx-36 text-lg md:text-xl font-normal text-left text-black font-qubi">Etiya olarak fiziksel sağlığımız
          kadar psikolojik sağlığımızın da öneminin farkındayız. Bu kapsamda Sento ile yürüttüğümüz "İşyeri
          Psikoloğu" uygulaması sayesinde tüm çalışma arkadaşlarımız istedikleri herhangi bir konu hakkında
          psikolojik danışmanlık alabiliyor. Sento, organizasyonlara sunduğu güven ortamı ve insan odaklı
          yaklaşımıyla kurumsal psikolojik danışmanlık alanında gerçekten fark yaratan bir şirket. Çalışma
          sürecimiz boyunca bizlere sundukları ilgi ve destek için tüm Sento çalışanlarına çok teşekkürler!
        </p>
        <p class="ml-36 font-medium">NİHAN ŞAHAN ÖZTÜRK</p>
        <div class="flex mr-6 md:mr-0 ml-36 justify-start items-start space-x-4">
          <p class="font-normal">İnsan Kaynakları Yöneticisi</p>
          <p class="font-medium">NETA Technologies</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="mb-32">
      <div class="flex justify-between items-center w-full px-5 md:px-0 md:mt-20">
        <svg class="ml-4 md:ml-28" xmlns="http://www.w3.org/2000/svg" height="64" width="56" viewBox="0 0 448 512">
          <path fill="#e61111"
            d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
        </svg>
        <div class="relative mt-24 mr-6 md:mr-28 ">
          <p class="text-3xl md:text-5xl text-right md:text-left font-semibold mr-4">İyi ki Sento Var!</p>
          <div class="absolute w-2 h-1/2 rounded-full top-0 right-0 border border-red-600"></div>
        </div>
      </div>
      <div class="col mt-16">
        <p class="mb-4 md:mb-0 mx-14 md:mx-36 text-lg md:text-xl font-normal text-left text-black font-qubi">Etiya olarak fiziksel sağlığımız
          kadar psikolojik sağlığımızın da öneminin farkındayız. Bu kapsamda Sento ile yürüttüğümüz "İşyeri
          Psikoloğu" uygulaması sayesinde tüm çalışma arkadaşlarımız istedikleri herhangi bir konu hakkında
          psikolojik danışmanlık alabiliyor. Sento, organizasyonlara sunduğu güven ortamı ve insan odaklı
          yaklaşımıyla kurumsal psikolojik danışmanlık alanında gerçekten fark yaratan bir şirket. Çalışma
          sürecimiz boyunca bizlere sundukları ilgi ve destek için tüm Sento çalışanlarına çok teşekkürler!
        </p>
        <p class="ml-36 font-medium">NİHAN ŞAHAN ÖZTÜRK</p>
        <div class="flex mr-6 md:mr-0 ml-36 justify-start items-start space-x-4">
          <p class="font-normal">İnsan Kaynakları Yöneticisi</p>
          <p class="font-medium">NETA Technologies</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="mb-32">
      <div class="flex justify-between items-center w-full px-5 md:px-0 md:mt-20">
        <svg class="ml-4 md:ml-28" xmlns="http://www.w3.org/2000/svg" height="64" width="56" viewBox="0 0 448 512">
          <path fill="#e61111"
            d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
        </svg>
        <div class="relative mt-24 mr-4 md:mr-28 ">
          <p class="text-3xl md:text-5xl text-right md:text-left font-semibold mr-4">İyi ki Sento Var!</p>
          <div class="absolute w-2 h-1/2 rounded-full top-0 right-0 border border-red-600"></div>
        </div>
      </div>
      <div class="col mt-16">
        <p class="mb-4 md:mb-0 mx-14 md:mx-36 text-lg md:text-xl font-normal text-left text-black font-qubi">Etiya olarak fiziksel sağlığımız
          kadar psikolojik sağlığımızın da öneminin farkındayız. Bu kapsamda Sento ile yürüttüğümüz "İşyeri
          Psikoloğu" uygulaması sayesinde tüm çalışma arkadaşlarımız istedikleri herhangi bir konu hakkında
          psikolojik danışmanlık alabiliyor. Sento, organizasyonlara sunduğu güven ortamı ve insan odaklı
          yaklaşımıyla kurumsal psikolojik danışmanlık alanında gerçekten fark yaratan bir şirket. Çalışma
          sürecimiz boyunca bizlere sundukları ilgi ve destek için tüm Sento çalışanlarına çok teşekkürler!
        </p>
        <p class="ml-36 font-medium">NİHAN ŞAHAN ÖZTÜRK</p>
        <div class="flex mr-6 md:mr-0 ml-36 justify-start items-start space-x-4">
          <p class="font-normal">İnsan Kaynakları Yöneticisi</p>
          <p class="font-medium">NETA Technologies</p>
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
      activeSlide: 1
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
    onTouchStart(swiper) {
      // Dokunma başladığında otomatik kaydırmayı durdur
      swiper.autoplay.stop();
    },
    onTouchEnd(swiper) {
      // Dokunma sona erdiğinde otomatik kaydırmayı başlat
      swiper.autoplay.start();
    },
  },
  mounted() {
    this.triggerAnimation(this.activeSlide);
  },
};
</script>
<style>
.mySwiper .swiper-pagination-bullet {
  background: #ccc;
  /* Default color for pagination bullets */
}

.mySwiper .swiper-pagination-bullet-active {
  background: #e61111;
  /* Active bullet color */
}
</style>