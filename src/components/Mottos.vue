<template>
    <swiper :modules="modules" :autoplay="{ delay: 2500, disableOnInteraction: false }" @slideChange="onSlideChange"
        class="mySwiper">
        <swiper-slide>
            <div class="relative mr-10 ml-10 h-screen flex items-center justify-center">
                <div class="text-right text-white">
                    <h1 class="text-5xl font-semibold">Güven</h1>
                    <p class="mt-4 text-lg">20 yılı aşkın uluslararası hizmet tecrübesi, gelişmiş altyapı, uzman kadro
                        ve geniş hizmet ağı.</p>
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
    },
    mounted() {
        this.triggerAnimation(this.activeSlide);
    },
};
</script>