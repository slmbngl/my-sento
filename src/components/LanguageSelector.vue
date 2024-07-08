<template>
  <div v-if="showLanguageSelector" class="relative p-4 m-8 shadow-2xl rounded-lg backdrop-blur-sm bg-gray/30 z-50">
    <!-- Kapatma düğmesi -->
    <div class="flex justify-end mb-4">
      <button @click="closeLanguageSelector" type="button" class="text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="relative">
      <div class="relative bg-white mt-2 mb-2 font-semibold rounded-full p-4 z-40">
        <!-- Çerezler -->
        <div class="flex justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            class="w-12 h-12 mr-2 p-2 border border-sento rounded-full">
            <path fill="#db0a0a"
              d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6v0c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9v0c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
        </div>
        <div class="flex flex-wrap">
          <span class="text-xs text-ellipsis overflow-hidden">{{ $t('cookie') }}</span>
        </div>
        <!-- Butons -->
        <div class="grid grid-cols-3">
          <div class="col-span-2 mr-4 ml-4">
            <button type="button"
              class="text-black w-full bg-sento-gray focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">{{
              $t('read') }}</button>
          </div>
          <div class="col-span-1 mr-4">
            <button class="mixed-button ">
              {{ $t('accept') }}
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                <path fill="#56585e"
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="relative z-40 bg-white mt-2 mb-2 font-semibold rounded-full p-4">
        <div class="flex flex-wrap">
          <!-- Geçerli Dil -->
          <div class="w-full md:w-1/2 flex items-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-4 h-4 mr-2">
              <path fill="#d40c0c"
                d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" />
            </svg>
            <span class="text-xs whitespace-nowrap">{{ $t('sellang') }}</span>
          </div>
          <!-- Dropdown açma düğmesi -->
          <div class="w-full md:w-1/2 flex justify-center sm:justify-end">
            <button @click="toggleDropdown" type="button"
              class="inline-flex justify-center items-center w-auto rounded-md shadow-sm px-2 py-1 bg-sento-gray text-black text-sm font-normal"
              id="menu-button" aria-expanded="true" aria-haspopup="true">
              {{ $t('language') }}
              <svg class="-mr-1 ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <!-- Dropdown menüsü -->
        <div v-if="isDropdownOpen"
          class="origin-bottom-right absolute right-0 bottom-full w-full md:w-56 rounded-lg shadow-lg bg-gray-500 bg-opacity-75 ring-1 ring-black ring-opacity-5 focus:outline-none z-30"
          style="transform: translate-y(-100%);">
          <div class="py-2 px-2 rounded-full" role="none">
            <div @click="selectLanguage('en')"
              class="flex items-center justify-between text-white px-4 py-2 text-sm hover:bg-red-600 rounded-full cursor-pointer"
              role="menuitem" tabindex="-1" id="menu-item-0">
              English
              <input v-if="currentLanguage === 'en'" checked id="disabled-checked-checkbox" type="checkbox"
                class="custom-checkbox ml-2">
            </div>
            <div @click="selectLanguage('tr')"
              class="flex items-center justify-between text-white px-4 py-2 mb-1 text-sm hover:bg-red-600 rounded-full cursor-pointer"
              role="menuitem" tabindex="-1" id="menu-item-1">
              Türkçe
              <input v-if="currentLanguage === 'tr'" checked id="disabled-checked-checkbox" type="checkbox"
                class="custom-checkbox ml-2">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
var userLang = navigator.language || navigator.userLanguage; 
const showLanguageSelector = ref(!localStorage.getItem('selectedLanguage')); // localStorage'de dil varsa gösterme
const isDropdownOpen = ref(false);
const currentLanguage = ref(userLang); // LocalStorage'dan dil bilgisini al

function closeLanguageSelector() {
  showLanguageSelector.value = false;
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectLanguage(language) {
  currentLanguage.value = language;
  localStorage.setItem('selectedLanguage', language); // Save selected language to localStorage
  showLanguageSelector.value = false; // Close language selector

  // Reload the page to apply the selected language
  window.location.reload();
}

// Dil değişikliğini izlemek ve gerekli işlemleri yapmak için bir watch kullanabilirsiniz
watch(currentLanguage, (newLang) => {
  // Burada dil değişikliğini uygulayın, örneğin:
  // i18n.global.locale = newLang;
  localStorage.setItem('selectedLanguage', newLang); // Yeni dil bilgisini localStorage'e kaydet
  console.log(`Language changed to: ${newLang}`);
});
</script>


<style scoped>
/* İhtiyacınıza göre CSS stilleri */
</style>
