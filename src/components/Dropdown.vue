<template>
    <Menu as="div" class="relative w-full">
        <div ref="menuButtonWrapper">
            <MenuButton @click="toggleDropdown" :class="[
                'flex w-full justify-start rounded-t-3xl px-2 py-2 font-medium text-lg',
                isOpen ? 'bg-white text-sento' : 'text-black hover:text-sento',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'
            ]">
                {{ buttonText }}
                <ChevronDownIcon :class="[
                    'ml-2 h-5 w-5 text-black hover:text-sento transition-transform duration-200',
                    isOpen ? 'transform rotate-180 text-sento' : ''
                ]" aria-hidden="true" />
            </MenuButton>
            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <div v-if="isOpen"
                    class="divide-y-2 divide-gray-100 rounded-b-3xl bg-sento border-dotted border-2 border-black">
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button
                            class="group flex w-full items-center text-left rounded-md px-2 py-2 text-lg text-white">
                            {{ item1 }}
                        </button>
                        </MenuItem>
                        <div class="w-full h-1 rounded-full right-0 border border-gray-400"></div>
                        <MenuItem v-slot="{ active }">
                        <button
                            class="group flex w-full items-center text-left rounded-md px-2 py-2 text-lg text-white">
                            {{ item2 }}
                        </button>
                        </MenuItem>
                        <div class="w-full h-1 rounded-full right-0 border border-gray-400"></div>
                    </div>
                    <MenuButton @click="toggleDropdown2" v-if="buttonText2" :class="[
                        'flex w-full justify-start rounded-3xl px-2 py-2 font-medium text-lg bg-white',
                        isOpen2 ? 'bg-white' : 'text-black my-2',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'
                    ]">
                        {{ buttonText2 }}
                        <ChevronDownIcon :class="[
                            'ml-2 h-5 w-5 text-black hover:text-sento transition-transform duration-200',
                            isOpen2 ? 'transform rotate-180 text-sento' : ''
                        ]" aria-hidden="true" />
                    </MenuButton>
                    <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <div v-if="isOpen2"
                            class="divide-y-2 divide-gray-100 rounded-b-3xl bg-sento border-dotted border-2 border-black">
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button
                                    class="group flex w-full items-center text-left rounded-md px-2 py-2 text-lg text-white">
                                    {{ item3 }}
                                </button>
                                </MenuItem>
                                <div class="w-full h-1 rounded-full right-0 border border-gray-400"></div>
                                <MenuItem v-slot="{ active }">
                                <button
                                    class="group flex w-full items-center text-left rounded-md px-2 py-2 text-lg text-white">
                                    {{ item4 }}
                                </button>
                                </MenuItem>
                            </div>
                        </div>
                    </transition>
                    <MenuButton @click="toggleDropdown3" v-if="buttonText3" :class="[
                        'flex w-full justify-start rounded-3xl px-2 py-2 font-medium text-lg bg-white',
                        isOpen3 ? 'bg-white' : 'text-black my-2',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'
                    ]">
                        {{ buttonText3 }}
                        <ChevronDownIcon :class="[
                            'ml-2 h-5 w-5 text-black hover:text-sento transition-transform duration-200',
                            isOpen3 ? 'transform rotate-180 text-sento' : ''
                        ]" aria-hidden="true" />
                    </MenuButton>
                    <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <div v-if="isOpen3"
                            class="divide-y-2 divide-gray-100 rounded-b-3xl bg-sento border-dotted border-2 border-black">
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button
                                    class="group flex w-full items-center text-left rounded-md px-2 py-2 text-lg text-white">
                                    {{ item5 }}
                                </button>
                                </MenuItem>
                                <div class="w-full h-1 rounded-full right-0 border border-gray-400"></div>
                                <MenuItem v-slot="{ active }">
                                <button
                                    class="group flex w-full items-center text-left rounded-md px-2 py-2 text-lg text-white">
                                    {{ item6 }}
                                </button>
                                </MenuItem>
                            </div>
                        </div>
                    </transition>
                </div>
            </transition>
        </div>

    </Menu>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { defineProps } from 'vue';

const props = defineProps({
    buttonText: String,
    item1: String,
    item2: String,
    buttonText2: String ,
    item3: String,
    item4: String,
    buttonText3: String ,
    item5: String,
    item6: String
});

const isOpen = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const menuButtonWrapper = ref(null);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};
const toggleDropdown2 = () => {
    isOpen2.value = !isOpen2.value;
};
const toggleDropdown3 = () => {
    isOpen3.value = !isOpen3.value;
};

const handleClickOutside = (event) => {
    if (menuButtonWrapper.value && !menuButtonWrapper.value.contains(event.target)) {
        isOpen2.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>