<template>
  <div
    :class="[
      'flex flex-col p-10 rounded-3xl transition-all duration-300 ml-2',
      isActive ? 'w-96 bg-sento text-white h-96 justify-between' : 'w-80 bg-gray-200 h-64 my-16 justify-center items-center'
    ]"
  >
    <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
    <p v-if="isActive" class="mb-4">{{ description }}</p>
    <button v-if="isActive" class="mt-auto bg-white text-sento font-semibold py-2 px-4 rounded">DETAYLAR</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    isActive: Boolean,
  },
};
</script>


