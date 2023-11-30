<script setup>
import { useCartStore } from '../stores/cart';
let cart=useCartStore()
</script>
<template>
    <div class="xl:w-[350px]  md:top-[90px] md:right-10 right-2 top-20  rounded-lg absolute shadow-lg bg-white flex flex-col ">
            <p class="font-kumbhBold py-5 px-5">Cart</p>
            <hr class="w-full border-grayishBlue ">
            <!-- items container -->
            <div class="w-full px-5 py-5 flex flex-col gap-y-5 justify-center items-center h-4/6">
                <!-- if cart is empty  -->
                <p v-if="!cart.count" class="font-kumbhBold text-darkGrayishBlue py-16"  :key="cart.count">Your cart is empty</p>
                <!-- items -->
                <div class="flex w-full gap-4 items-center" :key="cart.count" v-if="cart.count">
                    <img src="/images/image-product-1-thumbnail.jpg" class="w-12 h-12 rounded-md" alt="">
                    <!-- title and prices -->
                    <div class="flex flex-col text-darkGrayishBlue font-kumbhRgular">
                        <p class="">Fall Limited Edition Sneakers</p>
                        <span>
                            <p class="inline mr-2">$125.00</p>x <p class="inline">{{ cart.count }}</p>
                            <p class="text-black inline ml-2">${{ 125.00 * cart.count }}</p>
                        </span>
                    </div>
                    <!-- delete button -->
                    <div class="cursor-pointer" @click="cart.count=0"><img src="/images/icon-delete.svg" alt=""></div>
                </div>
                <!-- checkout Button -->
                <button v-if="cart.count" class="bg-orange text-white font-kumbhBold w-full py-4 rounded-lg hover:bg-[#ED7D31] hover:transition-all">Checkout</button>
            </div>
        </div>
</template>