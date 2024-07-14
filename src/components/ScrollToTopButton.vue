<template>
    <button v-if="isVisible" @click="scrollToTop"
        class="btn fixed bottom-4 right-10 text-black p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
        Yukarı Çık
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 384 512">
            <path fill="#c3c6d1"
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
.btn {
    text-align: left;
    text-transform: uppercase;
    width: 8%;
    outline: 0;
    overflow: hidden;
    background: none;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
    /* Buton genişliği için geçiş süresi ayarlandı */
}

.btn:hover {
    width: 10%;
    /* Hover durumunda buton genişliğini artırdık */
    text-align: center;
}

.btn:before {
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

.btn:hover:before {
    width: 100%;
}

.btn svg {
    position: absolute;
    right: 0px;
    top: 8px;
    fill: #383736;
    opacity: 1;
    /* SVG başlangıçta görünür olacak */
    transition: transform 0.3s ease-in-out;
    /* Geçiş süresi ve efekti ayarlandı */
}

.btn:hover svg {
    top: -14px;
    transform: translateX(-10px) translateY(100%);
    /* Sağa doğru 30px hareket */

}

.btn:hover svg:hover {
    transform: translateY(0) translateX(0);
    /* İkonun ilk konumuna geri dönmesi */
}
</style>