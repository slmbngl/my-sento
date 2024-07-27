<template>
	<!-- Sidebar -->
	<div v-if="modelValue" class="absolute flex w-full lg:w-2/5 top-0 h-screen right-0 backdrop-blur-md bg-white/30 flex-row ">
		<!-- Sidebar Content -->
		<div ref="content"
			class="w-full transition-all duration-700 overflow-hidden flex items-start justify-start relative ml-10">
			<slot></slot>
			<!-- Close Button -->
			<button @click.prevent="toggle()"
				class="absolute top-4 right-4 w-8 h-8 rounded-full text-black font-bold text-center">
				X
			</button>
			<div class="app-container w-full mr-8">
				<img src="./images/reallog.png" class="mb-14 mt-16">
				<ul class="space-y-8 font-medium text-lg text-black text-left">
					<li><a href="#">
							<Dropdown buttonText="Kurumsal" item1="Hakkımızda" item2="Misyon & Vizyon & Değerler"
								buttonText2="Kurumsal Söyleşiler
" item3="Psikoloji Söyleşileri" item4="Sağlıklı Beslenme Söyleşileri" buttonText3="Psikolojik Güvenlik Politikaları
" item5="Ruh Sağlığı Politikası" item6="Çeşitlilik ve Kapsayıcılık Politikası">
							</Dropdown>
						</a>
					</li>
					<li><a href="#">
							<Dropdown buttonText="Hizmetlerimiz
" item1="Çalışan Destek Programı" item2="İş Yeri Psikoloğu" buttonText2="" item3="" item4="">
							</Dropdown>
						</a>
					</li>
					<li><a class="hover:text-sento py-2 px-2" href="#">Blog</a>
					</li>
					<li><a class="hover:text-sento py-2 px-2" href="#">Referanslarımız</a>
					</li>
					<li><a class="hover:text-sento py-2 px-2" href="#">Kariyer</a>
					</li>
					<li><a class="hover:text-sento py-2 px-2" href="#">İletişim</a>
					</li>
				</ul>
				<div
        class="flex flex-col justify-center items-center md:justify-start md:items-start text-center mt-4">
        <div class="p-2 text-center">
          <a href="#" class="text-black uppercase bg-sento-gray focus:ring-4 rounded-full p-2 mr-2 "
            style="background-color: #EFF1F2;">
            {{ $t('psy') }}
          </a>
        </div>
        <div class="lg:mt-4">
          <button class="mixed-button">
            {{ $t('fast') }}
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
              <path fill="#56585e"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </button>
        </div>
      </div>
			</div>
		</div>

	</div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import Dropdown from './Dropdown.vue';

const props = defineProps({
	modelValue: Boolean
});

const emit = defineEmits(['update:modelValue']);

const open = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
	open.value = newValue;
});

const toggle = () => {
	open.value = !open.value;
	emit('update:modelValue', open.value);
};
</script>
