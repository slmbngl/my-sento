<template>
  <div
    :class="[
      'flex flex-col p-10 rounded-3xl transition-all duration-300 ml-2',
      isActive ? 'w-80 md:w-96 bg-sento text-white h-96 justify-between' : 'w-64 md:w-72 bg-gray-200 h-64 my-16 justify-center items-center'
    ]"
  >
    <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
    <p v-if="isActive" class="mb-4">{{ description }}</p>
    <div class="justify-end text-right items-end">
      <button v-if="isActive" class="btn mt-auto bg-white text-sento font-normal py-2 px-2 rounded w-36">
        <span class="btn-text">DETAYLAR</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="M472-480 288-664l88-88 272 272-272 272-88-88 184-184Z"/></svg>
      </button>
    </div>
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

<style>
.btn {
  position: relative;
  border: 2px white solid;
  text-transform: uppercase;
  outline: 0;
  overflow: hidden;
  background: #EE5959;
  z-index: 0;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease-in-out;
  @apply border-2 border-dashed rounded-full;
}

.btn:hover .btn-text {
  position: relative;
  display: inline-block;
  transform: translateX(10px);
  transition: all 0.3s ease-in-out;
}

.btn:before {
  content: "";
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(100% - 50px);
  z-index: -1;
  transition: width 0.3s ease-in-out;
  border-radius: 9999px;
}

.btn:hover:before {
  width: 100%;
}

.btn svg {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  fill: white;
  opacity: 1;
  transition: transform 0.3s ease-in-out;
}

.btn:hover svg {
  top: -24px;
  transform: translateX(-5px) translateY(100%);
  fill: red;
}
</style>
