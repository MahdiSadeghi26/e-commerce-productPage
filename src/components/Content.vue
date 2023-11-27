<script setup>
import ImageModal from './ImageModal.vue';
import { useModalStore } from '../stores/Modal'
import ProductImage from './ProductImage.vue';
import ProductInfo from './ProductInfo.vue';
let ModalStore = useModalStore()
</script>
<template>
    <div class="flex lg:flex-row flex-col lg:gap-0 gap-y-5 items-center xl:w-9/12 lg:w-11/12  mt-10 py-5 h-3/5">
        <!-- left side product image and modal -->
        <ProductImage />
        <!--product info and order  -->
        <ProductInfo/>
    </div>
    <!-- modal -->
    <ImageModal v-if="ModalStore" />
</template>

