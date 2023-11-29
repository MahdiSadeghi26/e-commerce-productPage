<script setup>
import { ref } from 'vue';
let trigerdMenu = ref(false)
</script>

<template>
    <div class="lg:hidden">
        <div class="flex items-center gap-5">
            <i class="fa-solid fa-bars fa-xl cursor-pointer" @click="trigerdMenu = !trigerdMenu"></i>
            <img src="/images/logo.svg" alt="site logo">
        </div>
        <!-- background blur -->
        <div class="fixed left-0 h-screen w-screen bottom-0 blur z-10" v-if="trigerdMenu" @click="trigerdMenu=false"></div>
        <!-- menu -->
        <div class="flex flex-col p-10 gap-x-5 gap-y-7  md:w-[300px] w-8/12 z-20 top-0 h-screen fixed left-0 bg-white"
            v-if="trigerdMenu">
            <i class="fa-solid fa-xl fa-xmark text-darkGrayishBlue cursor-pointer py-5"
                @click="trigerdMenu = !trigerdMenu"></i>
            <ul class="flex flex-col   font-kumbhBold gap-5 text-lg ">
                <li><a href="#" class="navItem">Collections</a></li>
                <li><a href="#" class="navItem">Men</a></li>
                <li><a href="#" class="navItem">Women</a></li>
                <li><a href="#" class="navItem">About</a></li>
                <li><a href="#" class="navItem">Contact</a></li>
            </ul>
        </div>
    </div>
</template>

