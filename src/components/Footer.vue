<template>
    <div class="relative justify-between items-center w-1/2">
        <img src="./images/Notification.png" alt="" class="md:h-96">
        <div class="absolute h-60 w-60 top-32 left-1/4 backdrop-blur-md bg-white/10 rounded-full rounded-br-none shadow-2xl ">
            <button class="mixed-button mt-24 ml-5" style="width: 200px;text-align: center;"><span class="btn-text whitespace-nowrap" style="flex-wrap: nowrap;">TOPLANTI PLANLA</span><svg
                    xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                    <path
                        d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
                </svg></button>
        </div>
    </div>
</template>
<style>
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
  right: 10px;
  top: 6px;
  fill: #383736;
  opacity: 1;
  transition: transform 0.3s ease-in-out;
}

.mixed-button:hover svg {
  top: -19px;
  transform: translateX(0) translateY(100%);
  fill: white;
}
</style>
