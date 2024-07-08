import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import tr from './locales/tr.json'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import 'swiper/swiper-bundle.css'
/* add icons to the library */
library.add(faUserSecret)

// localStorage'dan dil bilgisini kontrol et
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

const app = createApp(App);
app.use(i18n);
app.mount('#app');
app.config.globalProperties.$currentLanguage = currentLanguage; 
app.component('font-awesome-icon', FontAwesomeIcon);
