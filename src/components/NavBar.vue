<template>
  <nav class="relative bg-white backdrop-blur-md bg-opacity-80 px-0 mb-0 pb-0 lg:px-0 pt-5 md:pt-2.5">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a href="#" class="taker flex items-center ml-10 md:ml-0 mr-10 ">
        <img src="./images/reallog.png" class="img h-6 sm:h-8" alt="Logo" />
      </a>
      <div class="flex items-center lg:order-2 mr-10 md:mr-0">
        <button @click="toggleSidebar" data-collapse-toggle="mobile-menu-2" type="button"
          class="inline-flex justify-end justify-self-end items-right p-2 ml-1 text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div @mouseover="toggleBlur(true)" @mouseleave="toggleBlur(false)"
        class="relative z-10 w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul
          class="hidden border-2 border-gray-200 lg:flex lg:flex-row lg:space-x-8 lg:mt-0 lg:hover:bg-white mt-4 font-medium  rounded-full py-2 px-2 ml-20">
          <PopoverGroup class="lg:gap-x-12">
            <Popover class="relative">
              <PopoverButton
                class="flex items-center gap-x-1 leading-6 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 "
                @mouseover="groupPanelOpen = true" @mouseleave="groupPanelOpen = false">
                {{ $t('navBtnName') }}
                <ChevronDownIcon class="h-5 w-5 flex-none text-sento" aria-hidden="true" />
              </PopoverButton>
              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">
                <div v-show="groupPanelOpen" @mouseover="groupPanelOpen = true" @mouseleave="groupPanelOpen = false"
                  class="absolute -left-8 top-full z-10 mt-6 w-72 h-40 max-w-md rounded-3xl bg-sento shadow-lg ring-1 ring-gray-900/5 overflow-visible">
                  <svg class="absolute -top-3 left-10 -rotate-90" xmlns="http://www.w3.org/2000/svg" height="18"
                    width="15" viewBox="0 0 384 512">
                    <path fill="#e61111"
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                  <div class="p-4 pt-7 pb-0">
                    <div v-for="(item, index) in products" :key="item.name"
                      class="group relative flex items-center rounded-lg p-4 pl-5 pr-0">
                      <div class="customHover flex-auto pr-5">
                        <a :href="item.href" class="block font-semibold text-white">
                          {{ item.name }}
                        </a>                       
                      </div>
                      <div
                        v-if="index === 0" 
                        class="absolute bottom-0 left-0 w-11/12 h-1.5 rounded-full border border-slate-50 mx-4 opacity-30">
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </Popover>
          </PopoverGroup>
          <PopoverGroup class="lg:gap-x-12" @mouseover="groupPanelOpen2 = true" @mouseleave="groupPanelOpen2 = false">
            <Popover class="relative">
              <PopoverButton
                class="flex items-center gap-x-1 leading-6 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 ">
                {{ $t('navBtnName2') }}
                <ChevronDownIcon class="h-5 w-5 flex-none text-sento" aria-hidden="true" />
              </PopoverButton>
              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">

                <div v-show="groupPanelOpen2"
                  class="absolute -left-8 top-full z-10 mt-6 w-screen h-80 max-w-md rounded-3xl bg-sento shadow-lg ring-1 ring-gray-900/5 overflow-visible"
                  @mouseover="groupPanelOpen2 = true" @mouseleave="groupPanelOpen2 = false">
                  <svg class="absolute -top-3 left-10 -rotate-90" xmlns="http://www.w3.org/2000/svg" height="18"
                    width="15" viewBox="0 0 384 512">
                    <path fill="#e61111"
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                  <div class="p-4 pt-7 pb-0">
                    <div class="group relative flex items-center rounded-lg p-4 leading-6">
                      <div class="customHover flex justify-start pl-1">
                        <a href="#" class="block flex font-semibold text-white">
                          Çalışan Destek Programı
                        </a>
                      </div>
                      <div
                        class="absolute bottom-0 left-0 w-10/12 h-1.5 rounded-full border border-slate-50 mx-4 opacity-30">
                      </div>
                    </div>
                    <div class="group relative flex items-center rounded-lg p-4 leading-6">
                      <div class="customHover flex justify-start pl-1">
                        <a href="#" class="block flex font-semibold text-white">
                          İş Yeri Psikoloğu
                        </a>       
                      </div>
                      <div
                        class="absolute bottom-0 left-0 w-10/12 h-1.5 rounded-full border border-slate-50 mx-4 opacity-30">
                      </div>
                    </div>
                    <div class="group relative flex items-center rounded-lg p-4 leading-6">
                      <div class="customHover flex justify-start pl-1">
                        <a href="#" class="block flex font-semibold text-white">
                          Travma Sonrası Destek Programı
                        </a>
                      </div>
                      <div
                        class="absolute bottom-0 left-0 w-10/12 h-1.5 rounded-full border border-slate-50 mx-4 opacity-30">
                      </div>
                    </div>
                    <div class="group relative flex items-center rounded-lg p-4 leading-6">
                      <div class="customHover flex justify-start pl-1">
                        <a href="#" class="block flex font-semibold text-white" @mouseover="opup3 = true"
                          @mouseleave="opup3 = false">
                          {{ t('navbtn3') }}
                        </a>
                        <div class="flex flex-grow justify-end items-center mr-6">
                          <svg xmlns="http://www.w3.org/2000/svg" height="12" width="9" viewBox="0 0 384 512">
                            <path fill="#ffffff"
                              d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
                          </svg>
                        </div>
                      </div>
                      <div
                        class="absolute bottom-0 left-0 w-10/12 h-1.5 rounded-full border border-slate-50 mx-4 opacity-30">
                      </div>
                    </div>
                    <div class="group relative flex items-center rounded-lg p-4 leading-6">
                      <div class="customHover flex justify-start pl-1">
                        <a href="#" class="block flex font-semibold text-white" @mouseover="opup = true"
                          @mouseleave="opup = false">
                          {{ t('navbtn4') }}
                        </a>
                        <div class="flex flex-grow justify-end items-center mr-6">
                          <svg xmlns="http://www.w3.org/2000/svg" height="12" width="9" viewBox="0 0 384 512">
                            <path fill="#ffffff"
                              d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition enter-active-class="transition ease-out duration-500"
                enter-from-class="opacity-0 -translate-x-72" enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-1">
                <div v-show="opup"
                  class="absolute sm:left-72 sm:mt-4 lg:mt-0 left-full top-12 ml-24 z-10 h-80 w-80 max-w-md overflow-hidden rounded-r-3xl shadow-lg ring-1 ring-gray-900/5" style="background-color: #A80000;"
                  @mouseover="opup = true" @mouseleave="opup = false">
                  <div class="p-4 pl-5 pt-7 pb-0">
                    <div class="group relative flex items-center rounded-lg p-4 leading-6">
                      <div class="customHover flex-auto pl-1">
                        <a href="#" class="block font-semibold text-white">
                          {{ $t('navbtn5') }}
                        </a>
                      </div>
                      <div
                        class="absolute bottom-0 left-0 w-11/12 h-1.5 rounded-full border border-slate-50 mx-4 opacity-30">
                      </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6">
                      <div class="customHover flex-auto pl-1">
                        <a href="#" class="block font-semibold text-white">
                          {{ $t('navbtn6') }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition enter-active-class="transition ease-out duration-500"
                enter-from-class="opacity-0 -translate-x-72" enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-1">
                <div v-show="opup3"
                  class="absolute sm:left-72 sm:mt-4 lg:mt-0 left-full top-12 ml-24 z-10 h-80 w-80 max-w-md overflow-hidden rounded-r-3xl shadow-lg ring-1 ring-gray-900/5" style="background-color: #A80000;"
                  @mouseover="opup3 = true" @mouseleave="opup3 = false">
                  <div class="p-4 pl-6 pt-7 pb-0">
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6">
                      <div class="customHover flex-auto pl-1">
                        <a href="#" class="block font-semibold text-white">
                          Psikoloji Söyleşileri
                        </a>
                      </div>
                      <div
                        class="absolute bottom-0 left-0 w-11/12 h-1.5 rounded-full border border-slate-50 mx-4 opacity-30">
                      </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6">
                      <div class="customHover flex-auto pl-1">
                        <a href="#" class="block font-semibold text-white">
                          Ruh Sağlığı Politikası
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-x-1" enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-1">
                <div v-show="opup2"
                  class="absolute sm:left-28 sm:mt-4 lg:mt-0 left-full top-9 ml-20 z-10 h-36 w-screen max-w-md overflow-hidden rounded-3xl bg-red-600 shadow-lg ring-1 ring-gray-900/5"
                  @mouseover="opup2 = true" @mouseleave="opup2 = false">
                  <div class="p-4">
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 pb-8 leading-6">
                      <div class="customHover flex-auto pr-5">
                        <a href="#" class="block font-semibold text-white">
                          {{ $t('navbtn7') }}
                          <span class="absolute inset-0" />
                        </a>
                        <hr>
                      </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6">
                      <div class="customHover flex-auto pr-5">
                        <a href="#" class="block font-semibold text-white">
                          {{ $t('navbtn8') }}
                          <span class="absolute inset-0" />
                        </a>
                        <hr>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </Popover>
          </PopoverGroup>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 "
              aria-current="page">{{ $t('navBtnName3') }}</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 ">{{
                $t('navBtnName4') }}</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 ">{{
                $t('navBtnName5') }}</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sento lg:p-0 ">{{
                $t('navBtnName6') }}</a>
          </li>
        </ul>
      </div>
      <div v-if="menuOpen" class="hidden xl:flex xl:w-auto xl:justify-left flex-wrap justify-center lg:order-1">
        <div class="w-full xl:w-auto xl:mt-2 xl:w-3/7 p-2 text-center">
          <a href="#" class="text-black uppercase bg-sento-gray focus:ring-4 rounded-full p-2 mr-2 "
            style="background-color: #EFF1F2;">
            {{ $t('psy') }}
          </a>
        </div>
        <div class="xl:w-4/7 p-2 text-center">
          <button class="mixed-button">
            <span class="btn-text">{{ $t('fast') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m509-540 30 30 211-211-30-30-211 211ZM189-189h29l232-232-30-30-231 232v30Zm384-198L387-574l163-163-30-30-218 218-78-77 208-208q37-37 89-37t89 37l19 18 47-47q19-19 44.5-19t44.5 19l97 97q19 19 19 45t-19 45L573-387ZM265-79H78v-186l309-309 186 187L265-79Z"/></svg>
          </button>
        </div>
      </div>
      <div v-if="isBlurred" class="absolute inset-0 z-0 backdrop-brightness-50"></div>
    </div>
    <NavBarsSide v-model="isSidebarOpen" />
  </nav>
</template>
<script setup>
import { ref, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';
import NavBarsSide from './NavBarsSideBar.vue';

import {
  Popover,
  PopoverButton,
  PopoverGroup,
} from '@headlessui/vue';
import { ChevronRightIcon } from "@vue-hero-icons/outline"
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
const { t } = useI18n();
const products = [
  { name: t('navbtn'), href: '#' },
  { name: t('navbtn2'), href: '#' },
];
const products2 = [
  { name: t('navbtn3'), href: '#' },
  { name: t('navbtn4'), href: '#' },
];
const products3 = [
  { name: t('navbtn5'), href: '#' },
  { name: t('navbtn6'), href: '#' },
];

const mobileMenuOpen = ref(false);
const menuOpen = ref(true);
const isOpen = ref(true);
const groupPanelOpen = ref(false);
const groupPanelOpen2 = ref(false);
const opup = ref(false);
const opup2 = ref(false);
const opup3 = ref(false);
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

const emits = defineEmits(['toggleBlur']);
const isBlurred = ref(false);

function toggleBlur(value) {
  isBlurred.value = value;
  emits('toggleBlur', value);
}
</script>

<style>
.taker img {
  position: absolute;
  opacity: 1;
  /* Resim başlangıçta görünür olacak */
  transition: transform 0.3s ease-in-out;
  /* Geçiş süresi ve efekti ayarlandı */
}

.taker:hover img {
  animation: hoverAnimation 0.6s infinite alternate;
  /* Sürekli animasyon */
}

@keyframes hoverAnimation {
  0% {
    transform: translateX(0) translateY(0);
    /* Başlangıç konumu */
  }

  100% {
    transform: translateX(0) translateY(-50%);
    /* Bitiş konumu */
  }
}

.customHover {
  opacity: 1;
  transition: transform 0.5s ease-in-out;
  @apply flex-auto pr-5;
}

.customHover:hover {
  transform: translateX(10px) translateY(0);
}

.mixed-button {
  position: relative;
  border: 2px #E61111 solid;
  text-transform: uppercase;
  outline: 0;
  overflow: hidden;
  background: none;
  z-index: 0;
  cursor: pointer;
  transition: width 0.3s ease-in-out;
  @apply text-white w-full font-medium rounded-full text-xs px-5 pr-16 py-2.5 text-left me-2 mb-2 uppercase border-2 border-dashed;
}

.mixed-button:hover {
  width: 105%;
  text-align: center;
}

.mixed-button:hover .btn-text {
  position: relative;
  display: inline-block;
  transform: translateX(12px);
  transition: all 0.3s ease-in-out;
}

.mixed-button:before {
  content: "";
  position: absolute;
  @apply bg-sento;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(100% - 50px);
  z-index: -1;
  transition: width 0.3s ease-in-out;
  border-radius: 9999px;
}

.mixed-button:hover:before {
  width: 100%;
}

.mixed-button svg {
  position: absolute;
  right: 5px;
  top: 6px;
  fill: #383736;
  opacity: 1;
  transition: transform 0.3s ease-in-out;
}

.mixed-button:hover svg {
  top: -18px;
  transform: translateX(-10px) translateY(100%);
  fill: white;
}
</style>