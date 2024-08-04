<script setup>
import { ref, watch } from 'vue';

// İlk olarak, localStorage'dan seçili dili alıyoruz veya varsayılan olarak tarayıcı dilini kullanıyoruz
var userLang = localStorage.getItem('selectedLanguage') || navigator.language || navigator.userLanguage;
const currentLanguage = ref(userLang);
const showLanguageSelector = ref(!localStorage.getItem('selectedLanguage'));
const isDropdownOpen = ref(false);

function closeLanguageSelector() {
  showLanguageSelector.value = false;
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectLanguage(language) {
  currentLanguage.value = language;
  localStorage.setItem('selectedLanguage', language);
  showLanguageSelector.value = false;

  // Sayfayı yeniden yükleyin
  window.location.reload();
}

// Dil değişikliğini izlemek ve gerekli işlemleri yapmak için bir watch kullanabilirsiniz
watch(currentLanguage, (newLang) => {
  // i18n.global.locale = newLang; // Eğer bir i18n kütüphanesi kullanıyorsanız, burada yeni dili ayarlayabilirsiniz
  
  localStorage.setItem('selectedLanguage', newLang); // Yeni dili localStorage'e kaydedin
  console.log(`Language changed to: ${newLang}`);
});

</script>
<template>
    <div class="relative">
        <div class="w-full flex justify-end sm:justify-end">
            <button @click="toggleDropdown" type="button" class="lanbtn2" id="menu-button" aria-expanded="true"
                aria-haspopup="true">
                <span class="btn-text">{{ $t('language') }}</span>
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div v-if="isDropdownOpen"
            class="origin-bottom-right absolute bottom-full -bottom-10 w-36 rounded-2xl shadow-lg backdrop-blur-sm bg-black/30 z-30"
            style="transform: translateY(-100%);" ref="dropdown">
            <div class="py-2 px-2 rounded-full" role="none">
                <div @click="selectLanguage('en')"
                    :class="['flex items-center justify-between text-white px-4 py-2 mb-1 text-sm rounded-full cursor-pointer', currentLanguage === 'en' ? 'bg-red-600' : 'hover:bg-red-600']"
                    role="menuitem" tabindex="-1" id="menu-item-0">
                    English
                    <div class="flex gap-2" v-if="currentLanguage === 'en'">
                        <input type="checkbox" id="some_id"
                            class="relative peer shrink-0 appearance-none w-4 h-4 rounded-full bg-white mt-1" checked />
                        <svg class="absolute w-4 h-4 mt-1 hidden peer-checked:block rounded-full"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#e61111"
                            stroke-width="4" border-radius="9999px" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div @click="selectLanguage('tr')"
                    :class="['flex items-center justify-between text-white px-4 py-2 text-sm rounded-full cursor-pointer', currentLanguage === 'tr' ? 'bg-red-600' : 'hover:bg-red-600']"
                    role="menuitem" tabindex="-1" id="menu-item-1">
                    Türkçe
                    <div class="flex gap-2" v-if="currentLanguage === 'tr'">
                        <input type="checkbox" id="some_id"
                            class="relative peer shrink-0 appearance-none w-4 h-4 rounded-full bg-white mt-1" checked />
                        <svg class="absolute w-4 h-4 mt-1 hidden peer-checked:block rounded-full"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#e61111"
                            stroke-width="4" border-radius="9999px" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
/* CSS */
.custom-checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.custom-checkbox {
  display: none;
  /* Gizle */
}

.checkmark {
  width: 20px;
  height: 20px;
  position: relative;

  background-color: black;
  /* İç renk */
}

.custom-checkbox:checked+.checkmark {
  background-color: #ffff;
  /* Seçili iç renk */
  border-radius: 9999px;
}

.custom-checkbox:checked+.checkmark:after {
  content: "";
  position: absolute;
  left: 6px;
  top: 0px;
  width: 8px;
  height: 14px;
  transform: rotate(45deg);
  border: solid #e61111;
  border-width: 0 2px 2px 0;
}

.lanbtn2 {
  position: relative;
  border: 2px gray solid;
  text-transform: uppercase;
  outline: 0;
  overflow: hidden;
  background: none;
  z-index: 0;
  cursor: pointer;
  transition: width 0.3s ease-in-out;
  text-align: center;
  
  /* Buton genişliği için geçiş süresi ayarlandı */
  @apply text-black font-medium rounded-full text-xs px-5 pr-14 py-2.5 me-2 mb-2 uppercase border-2 border-dashed;
}

.lanbtn2:hover {
  text-align: center;
}
.lanbtn2:hover .btn-text {
  position: relative;
  display: inline-block;
  transform: translateX(12px);
  transition: all 0.3s ease-in-out;
}

.lanbtn2:before {
  content: "";
  position: absolute;
  background-color: #dee0e1;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(100% - 35px);
  z-index: -1;
  transition: width 0.3s ease-in-out;
  border-radius: 9999px;
  
}
.lanbtn2:hover:before {
  width: 100%;
}
.lanbtn2 svg {
  position: absolute;
  right: 7px;
  top: 10px;
  fill: black;
  opacity: 1;
  /* SVG başlangıçta görünür olacak */
  transition: transform 0.3s ease-in-out;
  /* Geçiş süresi ve efekti ayarlandı */
}
</style>