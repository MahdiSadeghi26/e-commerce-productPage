<script setup>
import MobileNav from './MobileNav.vue'
import Cart from './Cart.vue'
import { useCartStore } from '../stores/cart';
let cart=useCartStore()
</script>
<template>
    <div
        class="2xl:w-10/12 w-11/12  md:h-[120px] h-[90px] flex items-center justify-between lg:border-b-[1px] border-b-grayishBlue">
        <!-- desktop nav -->
        <div class="lg:flex hidden gap-10 items-center">
            <img src="/images/logo.svg" alt="site logo">
            <ul class="flex text-darkGrayishBlue  font-kumbhRgular">
                <li><a href="#" class="navItem">Collections</a></li>
                <li><a href="#" class="navItem">Men</a></li>
                <li><a href="#" class="navItem">Women</a></li>
                <li><a href="#" class="navItem">About</a></li>
                <li><a href="#" class="navItem">Contact</a></li>
            </ul>
        </div>
        <!-- mobile nav -->
        <MobileNav />
        <!-- cart and profile -->
        <div class="flex md:gap-5 gap-2  items-center">
            <div class="relative w-10 "><img src="/images/icon-cart.svg" class="md:w-6 md:h-6 h-5 w-5 cursor-pointer " alt="cart icon"
                     @click="cart.isActive=!cart.isActive">
                <p :key="cart.count" v-if="cart.count" class="absolute bg-orange text-[white] text-sm md:px-2 px-2 rounded-full top-[-10px]  right-2 ">{{ cart.count }}
                </p>
                <!-- avatar -->
            </div>
            <div class=""><img src="/images/image-avatar.png" class="profileImage" alt="cart icon" @click="console.log(cart.count);">
            </div>
        </div>
        <!-- cart bascket -->
        <Cart v-if="cart.isActive" />
    </div>
</template>
