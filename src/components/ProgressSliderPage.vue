<template>
    <Progress :items="carouselItems" />
</template>
  
  <script setup lang="ts">
    import Progress from './ProgressSlider.vue';  
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();

  const carouselItems = [
    {
      img: 'src/components/images/main1.webp',
      desc: 'Item 1 Description',
      buttonIcon: 'path/to/buttonIcon1.png',
      letter:t('letter1'),
      letter2:t('letter2')
    },
    {
      img: 'src/components/images/main1.webp',
      desc: 'Item 2 Description',
      buttonIcon: 'path/to/buttonIcon2.png',
      letter:t('letter1'),
      letter2:t('letter2')
    },
    {
      img: 'src/components/images/main1.webp',
      desc: 'Item 3 Description',
      buttonIcon: 'path/to/buttonIcon3.png',
      letter:t('letter1'),
      letter2:t('letter2')
    },
    {
      img: 'src/components/images/main1.webp',
      desc: 'Item 4 Description',
      buttonIcon: 'path/to/buttonIcon4.png',
      letter:t('letter1'),
      letter2:t('letter2')
    }
  ]
  </script>
  