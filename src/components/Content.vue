<script setup>
import { ref } from 'vue'
import ImageModal from './ImageModal.vue';
import { useModalStore } from '../stores/Modal'
import { useImageIndexStore } from '../stores/ImageIndex'

let ModalStore = useModalStore()
let activeImage = useImageIndexStore()
let clickedImageIndex = ref(1)

const imageClickHandler = (index) => {
    ModalStore.isActive = true
    activeImage.activeIndex = index

}


</script>
<template>
    <div class="flex xl:w-9/12 mt-10 py-5 h-3/5">
        <!-- left side images -->
        <div class="flex flex-col gap-y-5 w-1/2 items-center h-5/6 xl:px-10 ">
            <!-- main image -->
            <img src="/images/image-product-1.jpg" alt="main picture" class="w-10/12  rounded-2xl">
            <div class="w-10/12 flex gap-8 ">
                <div class="smallPicture" @click="imageClickHandler(1)"
                    :class="{ activeItem: activeImage.activeIndex == 1 }"><img src="/images/image-product-1.jpg"
                        alt="main picture" class="rounded-xl" :class="{ activePicture: activeImage.activeIndex == 1 }">
                </div>
                <div class="smallPicture" @click="imageClickHandler(2)"
                    :class="{ activeItem: activeImage.activeIndex == 2 }"><img src="/images/image-product-2.jpg"
                        alt="main picture" class="rounded-xl " :class="{ activePicture: activeImage.activeIndex == 2 }">
                </div>
                <div class="smallPicture" @click="imageClickHandler(3)"
                    :class="{ activeItem: activeImage.activeIndex == 3 }"><img src="/images/image-product-3.jpg"
                        alt="main picture" class="rounded-xl " :class="{ activePicture: activeImage.activeIndex == 3 }">
                </div>
                <div class="smallPicture" @click="imageClickHandler(4)"
                    :class="{ activeItem: activeImage.activeIndex == 4 }"><img src="/images/image-product-4.jpg"
                        alt="main picture" class="rounded-xl " :class="{ activePicture: activeImage.activeIndex == 4 }">
                </div>

            </div>
        </div>
        <!-- right side order seciton  -->
        <div class=""></div>
    </div>
    <!-- modal -->
    <ImageModal :imagesNumber="clickedImageIndex" v-if="ModalStore" />
</template>

