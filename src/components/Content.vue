<script setup>
import { ref } from 'vue'
import ImageModal from './ImageModal.vue';
import { useModalStore } from '../stores/Modal'
import ProductImage from './ProductImage.vue';
let clickedImageIndex = ref(1)
let ModalStore = useModalStore()
</script>
<template>
    <div class="flex xl:w-9/12 mt-10 py-5 h-3/5">
        <!-- left side product image and modal -->
        <ProductImage/>
        <!-- right side order seciton  -->
        <div class=""></div>
    </div>
    <!-- modal -->
    <ImageModal v-if="ModalStore" />
</template>

