<template>
  <div class="relative flex flex-col items-end w-full h-full">
    <div class="order-last md:order-firt flex mt-4 md:mt-0 md:absolute top-0 right-0 z-10">
      <button @click="prevCard" class="p-2 mr-2 bg-gray-300 hover:bg-sento rounded-full">
        <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button @click="nextCard" class="p-2 mr-8 bg-gray-300 hover:bg-sento rounded-full">
        <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    <div class="flex order-firt md:order-last overflow-hidden w-full h-full mt-14">
      <div v-for="(card, index) in loopedCards" :key="index"
        :class="['flex-none transition-transform duration-300', { ' mx-0 w-96 md:ml-96': index === 0, ' mx-0 w-96 ml-7 md:ml-0 mr-0 md:mr-24': index === activeIndex && index !== 0, ' mx-0 w-96 ': index !== activeIndex }]"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
        <CardComponent :title="card.title" :description="card.description" :isActive="index === activeIndex" />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      cards: [
        { title: 'Çalışan Destek Programı', description: 'Çalışan Destek Programı; çalışanlarınızın ev, iş ve sosyal hayatta yaşadıkları, kimi zaman iş performansını kimi zaman sosyal hayatı etkileyen psikolojik durumları “gizlilik” çerçevesinde çözmelerine yardımcı olur.' },
        { title: 'Travma Sonrası Destek Programı', description: 'Çalışan Destek Programı; çalışanlarınızın ev, iş ve sosyal hayatta yaşadıkları, kimi zaman iş performansını kimi zaman sosyal hayatı etkileyen psikolojik durumları “gizlilik” çerçevesinde çözmelerine yardımcı olur.' },
        { title: 'Ruh Sağlığı Politikaları', description: 'Travmatik olaylar genellikle önceden haber verilmez...' },
        { title: 'Çeşitlilik ve Kapsayıcılık Politikaları', description: 'Travmatik olaylar genellikle önceden haber verilmez...' },
        { title: 'İş Yeri Psikolojisi', description: 'Travmatik olaylar genellikle önceden haber verilmez...' },
        { title: 'Yeni Politikalar', description: 'Travmatik olaylar genellikle önceden haber verilmez...' },
      ],
      activeIndex: 1, // Start with the first card
      autoplayDelay: 6000, // Autoplay delay in milliseconds (5 seconds)
    };
  },
  computed: {
    loopedCards() {
      return [...this.cards, ...this.cards, ...this.cards, ...this.cards, ...this.cards];
    },
  },
  mounted() {
    // Start autoplay when component is mounted
    this.startAutoplay();
  },
  methods: {
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextCard();
      }, this.autoplayDelay);
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
    prevCard() {
      this.stopAutoplay();
      if (this.activeIndex > 0) {
        this.activeIndex--;
      } else {
        this.activeIndex = this.cards.length - 1;
      }
      this.startAutoplay();
    },
    nextCard() {
      this.stopAutoplay();
      if (this.activeIndex < this.loopedCards.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = this.cards.length; // Orta kart kümesine döner
      }
      this.startAutoplay();
    },
  },
  beforeDestroy() {
    // Bileşen yok edildiğinde interval'i temizle
    clearInterval(this.autoplayInterval);
  },
};
</script>
<style scoped>
/* İsteğe bağlı stil düzenlemeleri */
</style>