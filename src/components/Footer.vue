<template>
    <div class="relative m-10">
        <img src="./images/Notification.png" alt="" class="w-auto h-96">
        <div class="absolute h-64 w-64 top-32 left-64 backdrop-blur-md bg-white/10 rounded-full rounded-br-none shadow-2xl ">
            <button class="mixed-button mt-24 ml-8" style="width: 200px;text-align: center;">TOPLANTI PLANLA<svg
                    xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                    <path fill="#c3c6d1"
                        d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
                </svg></button>
        </div>
    </div>
</template>


<style>
.btn-1 {
    border: 2px white solid;
    text-transform: uppercase;
    outline: 0;
    overflow: hidden;
    background: #EE5959;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
}

.btn-1:hover {
    text-align: center;
}

.btn-1:before {
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

.btn-1:hover:before {
    width: 100%;
}

.btn-1 svg {
    position: absolute;
    top: 8px;
    fill: #383736;
    opacity: 1;
    transition: transform 0.3s ease-in-out;
}

.btn-1:hover svg {
    top: -18px;
    transform: translateX(-10px) translateY(100%);
}

.btn-1:hover svg:hover {
    transform: translateY(0) translateX(0);
}
</style>
