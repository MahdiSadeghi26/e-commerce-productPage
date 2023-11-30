<script setup>
import { useModalStore } from '../stores/Modal'
import ProductImage from './ProductImage.vue';
import ProductInfo from './ProductInfo.vue';
import { useCartStore } from '../stores/cart';
let ModalStore = useModalStore()
let cart=useCartStore()
</script>
<template>
    <div class="flex lg:flex-row flex-col lg:gap-0 gap-y-5 items-center xl:w-9/12  md:mt-10 md:py-5 h-4/5" @click="cart.isActive=false">
        <!-- left side product image and modal -->
        <ProductImage />
        <!--product info and order  -->
        <ProductInfo/>
    </div>
    <!-- modal -->
    <ImageModal v-if="ModalStore" />
</template>

