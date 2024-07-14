import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import tr from './locales/tr.json'

let userLang = localStorage.getItem('selectedLanguage');

if (!userLang) {
  // Eğer localStorage'da dil bilgisi yoksa, browser dilini kontrol et
  userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.startsWith('tr') ? 'tr' : 'en'; // Varsayılan olarak İngilizceye ayarla, Türkçe ise 'tr' yap
}

const i18n = createI18n({
  legacy: false, 
  locale: userLang, 
  messages: {
    en,
    tr,
  },
});



const app = createApp(App)

app.use(router)

app.use(i18n)

app.mount('#app')
