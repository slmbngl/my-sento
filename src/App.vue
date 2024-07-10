<template>
  <header class="sticky top-0 w-full z-30">
    <NavBar @toggleBlur="handleToggleBlur" />
  </header>
  <main>
    <section class="relative bg-white z-10">
      <Progress />
      <div class="flex pl-20 mt-20 pb-5">
        <div class="w-3/4 mr-20">
          <p class="text-9xl font-extrabold text-left text-black font-qubi">Faydaları.</p>
          <p class="text-xl font-normal text-left text-black font-qubi">Çalışanın, zihnini meşgul eden kişisel sorunları
            çözüldüğünde işine daha iyi konsantre olur..</p>
          <p class="text-sm font-normal text-left text-black font-qubi">Çalışan Destek Programları, iş-yaşam dengesini
            kurma konusunda geliştirilmiş en etkin çözümlerden biri olarak, işyerinde performansı dolayısı ile
            verimliliği ve kârlılığı artırmak için kurumlara ve yöneticilere yardımcı oluyor..</p>
        </div>
        <div class="w-1/4 mt-10">
          <Slider />
        </div>
      </div>
      <div class="relative mt-28 ml-28 mb-5 ">
        <div class="absolute w-2 h-1/2 rounded-full top-0 left-0  border border-red-600"></div>
        <p class="ml-4 text-5xl font-semibold ">Hizmetlerimiz</p>
      </div>
      <CardContainer />
      <div class="col border-b-2 my-4 ">
        <div class="relative mt-28 ml-28 mb-5 ">
          <div class="absolute w-2 h-1/2 rounded-full top-0 left-0 border border-red-600"></div>
          <p class="ml-4 text-5xl font-semibold ">Onlar Bizi Seçti</p>
        </div>
      </div>

      <div class="border-b-2 py-10 shadow-2xl" style="border-radius: 2.5rem;">
        <div class="mx-28 ">
          <IconSlider />
        </div>
        <div class="border-b-2"></div>
      </div>

      <div class="bg-sento-sgray mb-28">
        <Comments />
      </div>
      <div class="flex ">
        <div class="relative w-3/5 ml-28 mb-5 ">
          <div class="absolute w-2 h-1/6 rounded-full top-0 left-0 border border-red-600"></div>
          <p class="ml-4 text-5xl font-semibold mt-4">Birkaç cümlede bizden bahsetmek gerekirse;</p>
          <p class="mt-8 text-xl font-normal text-left text-black font-qubi">İş arkadaşlarımızın performans artışında bu
            kadar fark yaratacağını bilmiyordum. Sento ekibi ile çalışmamızın bizlere çok fazla avantajı oldu.
            Kendilerine sonsuz bir teşekkürü içtenlikle borç bilirim.</p>
          <button class="mixed-button mt-10 ml-2" style="width: 200px;text-align: center;">BİZİ TANI <svg
              xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg></button>
        </div>
        <img class="w-1/5 h-full right-0 mr-0" src="./components/images/ravi-patel.jpg" alt="">
      </div>
      <div class="relative h-screen bg-footer-texture ">
        <div class="flex h-full justify-center items-center">
          <div
            class="relative h-4/5 mx-32 rounded-3xl w-full flex justify-center items-center backdrop-opacity-10 backdrop-invert bg-black/70">
            <div class="flex w-1/2 justify-center items-center">
              <img src="./components/images/Slogo.png" alt="">
            </div>
            <div class="absolute my-16 inset-y-0 w-2 rounded-full border border-gray-400"></div>
            <Mottos />
          </div>
        </div>
      </div>
      <div class="fixed right-0 bottom-0 z-30">
        <LanguageSelector />
      </div>

    </section>

  </main>
  <footer>
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-3/5">
        <Footer class="ml-52" />
        <div class="bg-sento-gray h-auto rounded-3xl m-10">
          <div class="flex flex-col md:flex-row md:justify-between items-center">
            <img class="h-8 mt-4 md:ml-20" src="./components/images/reallog.png" alt="">
            <button class="mixed-button mt-6 md:mr-16 md:ml-auto" style="width: 200px;text-align: center;">TOPLANTI PLANLA<svg
                xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                <path fill="#c3c6d1"
                  d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
              </svg></button>
          </div>
          <div class="flex gap-8 columns-3 mt-10 mx-16">
            <div>
              <ul>
                <li class="mb-4"><a class="text-sento text-sm" href="#">Kurumsal</a></li>
                <div v-for="(item, index) in corporateItems" :key="index" class="customHover flex pr-5">
                  <li class="mb-2"><a class="text-black text-base" :href="item.href">{{ item.text }}</a></li>
                </div>
              </ul>
            </div>

            <div class="w-2 h-1/8 rounded-full right-0 border border-gray-400"></div>

            <div>
              <ul>
                <li class="mb-4"><a class="text-sento text-sm" href="#">Hizmetlerimiz</a></li>
                <div v-for="(item, index) in servicesItems" :key="index" class="customHover flex pr-5">
                  <li class="mb-2"><a class="text-black text-base" :href="item.href">{{ item.text }}</a></li>
                </div>
              </ul>
            </div>

            <div class="w-2 h-1/8 rounded-full right-0 border border-gray-400"></div>

            <div>
              <ul>
                <li class="mb-4"><a class="text-sento text-sm" href="#">Menü</a></li>
                <div v-for="(item, index) in menuItems" :key="index" class="customHover flex pr-5">
                  <li class="mb-2"><a class="text-black text-base" :href="item.href">{{ item.text }}</a></li>
                </div>
              </ul>
            </div>
          </div>
          <div class="flex ml-10 mt-10">
            <p class="mt-4 text-lg">Tüm hakları saklıdır. © 2024</p>
          </div>
        </div>
      </div>
      <div class="w-full pt-0 p-10 lg:w-2/5 lg:p-0">
        <div class="column-4 bg-black rounded-3xl lg:mt-40 h-auto">
          <div class="bg-white h-96 z-10 w-4/5 ml-16 mt-16"></div>
          <div class="mx-16">
            <a class="text-gray-200 text-base">Adresimiz</a> <br>
            <a class="text-gray-200 text-3xl font-bold">Barbaros Mah. Lale Sk. Ağaoğlu My Office NO:2 İç Kapı: 13
              Ataşehir/İSTANBUL</a>
          </div>
          <div class="w-9/12 mx-16 h-1 rounded-full border border-gray-400"></div>
          <div class="mx-16">
            <a class="text-gray-200 text-base">Bizi ara</a> <br>
            <a class="text-gray-200 text-3xl font-bold">0850 480 87 80</a>

          </div>
          <div class="w-9/12 mx-16 h-1 rounded-full border border-gray-400"></div>

          <div class="mx-16">
            <a class="text-gray-200 text-base">Bize e-posta gönder</a> <br>
            <a class="text-gray-200 text-3xl font-bold">info@sento.com.tr</a>

          </div>
          <div class="flex space-x-4 mx-44 my-10">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
              <path fill="#ffffff"
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
              <path fill="#ffffff"
                d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 576 512">
              <path fill="#f5f7f9"
                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 448 512">
              <path fill="#f3f4f7"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 448 512">
              <path fill="#fcfcfd"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </div>
        </div>
        <div class="flex">
          <p class="mx-10 text-lg">KVKK</p>
          <p class="text-lg">Çerez Politikası</p>
        </div>
      </div>
    </div>
  </footer>
  <div v-if="isBlurred" class="absolute inset-0 z-20 backdrop-brightness-50 pointer-events-none"></div>

  <ScrollToTopButton class="z-20" />
</template>

<script setup>
import LanguageSelector from './components/LanguageSelector.vue';
import NavBar from './components/NavBar.vue';
import Progress from './components/ProgressSliderPage.vue';
import Slider from './components/Slide.vue';
import CardContainer from './components/CardContainer.vue';
import IconSlider from './components/IconSlider.vue'
import Comments from './components/Comments.vue';
import ScrollToTopButton from './components/ScrollToTopButton.vue';
import Mottos from './components/Mottos.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';

const isBlurred = ref(false);

function handleToggleBlur(value) {
  isBlurred.value = value;
}
const corporateItems = [
  { text: 'Hakkımızda', href: '#' },
  { text: 'Misyon & Vizyon & Değerler', href: '#' },
];

const servicesItems = [
  { text: 'Çalışan Destek Programı', href: '#' },
  { text: 'İşyeri Psikoloğu', href: '#' },
  { text: 'Travma Sonrası Destek Programı', href: '#' },
  { text: 'Psikoloji Söyleşileri', href: '#' },
  { text: 'Sağlıklı Beslenme Söyleşileri', href: '#' },
  { text: 'Ruh Sağlığı Politikaları', href: '#' },
  { text: 'Çeşitlilik ve Kapsayıcılık Politikaları', href: '#' },
];

const menuItems = [
  { text: 'Blog', href: '#' },
  { text: 'Referanslarımız', href: '#' },
  { text: 'Kariyer', href: '#' },
  { text: 'S.S.S', href: '#' },
];
</script>
