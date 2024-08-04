<template>
    <button v-if="isVisible" @click="scrollToTop"
        class="btn-1 w-32 fixed bottom-4 right-10 text-black p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
        <span class="btn-text"> Yukarı Çık</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="18" viewBox="0 0 384 512">
            <path
                d="M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 416c0 17.7-14.3 32-32 32l-96 0z" />
        </svg>
    </button>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        toggleVisibility() {
            this.isVisible = window.scrollY > 300;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.toggleVisibility);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.toggleVisibility);
    },
};
</script>

<style scoped>
.btn-1 {
    position: fixed;
    text-align: left;
    text-transform: uppercase;
    outline: 0;
    overflow: hidden;
    background: none;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
    /* Buton genişliği için geçiş süresi ayarlandı */
}

.btn-1:hover .btn-text {
  position: relative;
  display: inline-block;
  transform: translateX(10px);
  transition: all 0.3s ease-in-out;
}

.btn-1:before {
    content: "";
    position: absolute;
    @apply bg-sento-gray;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc(100% - 20px);
    z-index: -1;
    transition: width 0.3s ease-in-out;
    /* Arkaplan genişliği için geçiş süresi ayarlandı */
    border-radius: 9999px;
    /* Yuvarlatılmış köşe ekledik */
}

.btn-1:hover:before {
    width: 100%;
}

.btn-1 svg {
    position: absolute;
    right: 0px;
    top: 12px;
    fill: #c3c6d1;
    opacity: 1;
    /* SVG başlangıçta görünür olacak */
    transition: transform 0.3s ease-in-out;
    /* Geçiş süresi ve efekti ayarlandı */
}

.btn-1:hover svg {
    top: -8px;
    right: -8px;
    fill: black;
    transform: translateX(-10px) translateY(100%);
    /* Sağa doğru 30px hareket */

}
</style>