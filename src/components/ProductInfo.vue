<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart';
 let productCount=ref(0)
 let cart=useCartStore()
 const decrementCount=()=>{
   if (productCount.value>=1) {
    productCount.value--
   }else{
    productCount=0
   }
 }
 const createOrder=(count)=>{
    if (!cart.count) {
        cart.count=count
    }else if (cart.count && count) {
        cart.count+=count
    }else{
        return
    }

 }
</script>
<template>
    <div class="xl:p-10 xl:w-[550px] lg:h-5/6 md:w-[450px] flex flex-col gap-7  lg:px-5 px-5 pb-10" >
        <!-- company name -->
        <h2 class="uppercase text-orange font-kumbhBold tracking-widest md:text-base text-sm">sneakers company</h2>
        <!-- product title -->
        <h1 class="lg:text-5xl md:text-4xl text-3xl font-kumbhBold">Fall Limited Editon Sneakers</h1>
        <!-- product description -->
        <p class="text-left text-darkGrayishBlue font-kumbhRgular">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
            they’ll withstand everything the weather can offer.
        </p>
        <!-- price section -->
        <div class="flex lg:flex-col justify-between gap-1">
            <!-- current price and off precent -->
            <div class="flex gap-5 items-center">
                <p class="text-black font-kumbhBold tracking-wide text-3xl">$125.00</p>
                <!-- off precent -->
                <p class="bg-paleOrange text-orange px-2 py-1 rounded-lg font-kumbhBold">50%</p>
            </div>
            <!-- original price -->
            <p class="text-grayishBlue line-through text-lg font-kumbhBold">$250.00</p>
        </div>
        <!-- add to cart section -->
        <div class="flex lg:flex-row flex-col lg:gap-4 gap-y-5 ">
            <div class="counter">
                <i class="fa-solid fa-minus text-orange cursor-pointer" @click="decrementCount"></i>
                <p class="font-kumbhBold">{{productCount}}</p>
                <i class="fa-solid fa-plus text-orange cursor-pointer" @click="productCount++"></i>
            </div>
            <div class="lg:w-3/5 w-full lg:h-auto md:h-[70px] h-[55px] bg-orange rounded-lg flex items-center justify-center gap-3 cursor-pointer" @click="createOrder(productCount)">
                <i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i>
                <p class="text-white text-lg font-kumbhMedium" >Add to cart</p>
            </div>
        </div>
    </div>
</template>

