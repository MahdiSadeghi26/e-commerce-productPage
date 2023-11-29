<script setup>
import { useImageIndexStore } from '../stores/ImageIndex'
import { useModalStore } from '../stores/Modal'

let ModalStore = useModalStore()
let activeImage = useImageIndexStore()
const imageClickHandler = (index) => {
    ModalStore.isActive = true
    activeImage.activeIndex = index
}
const nextSlide = () => {
    if (activeImage.activeIndex < 4) {
        activeImage.activeIndex++
    } else {
        activeImage.activeIndex = 1
    }
}
const prevSlide = () => {
    if (activeImage.activeIndex>1) {
        activeImage.activeIndex--
    }else{
        activeImage.activeIndex=4
    }
}
</script>
<template>
    <div class="flex flex-col gap-y-5 lg:w-1/2 md:w-full  items-center  xl:px-10 md:relative -z-10 ">
        <!-- main image -->
        <img :src="`/images/image-product-${activeImage.activeIndex}.jpg`" :key="activeImage.activeIndex" alt="main picture"
            class="lg:w-10/12 lg:h-full md:h-[300px] w-full  md:rounded-2xl ">
        <i class="fa-solid fa-chevron-left fa-xl  md:top-[40%] md:left-0 mobileSlide" @click="prevSlide"></i>
        <i class="fa-solid fa-chevron-right fa-xl md:top-[40%] md:right-0 mobileSlide" @click="nextSlide"></i>
        <div class="w-10/12 lg:flex hidden gap-8 lg:h-2/6  ">
            <div class="smallPicture" @click="imageClickHandler(1)" :class="{ activeItem: activeImage.activeIndex == 1 }">
                <img src="/images/image-product-1.jpg" alt="main picture" class="rounded-xl"
                    :class="{ activePicture: activeImage.activeIndex == 1 }">
            </div>
            <div class="smallPicture" @click="imageClickHandler(2)" :class="{ activeItem: activeImage.activeIndex == 2 }">
                <img src="/images/image-product-2.jpg" alt="main picture" class="rounded-xl "
                    :class="{ activePicture: activeImage.activeIndex == 2 }">
            </div>
            <div class="smallPicture" @click="imageClickHandler(3)" :class="{ activeItem: activeImage.activeIndex == 3 }">
                <img src="/images/image-product-3.jpg" alt="main picture" class="rounded-xl "
                    :class="{ activePicture: activeImage.activeIndex == 3 }">
            </div>
            <div class="smallPicture" @click="imageClickHandler(4)" :class="{ activeItem: activeImage.activeIndex == 4 }">
                <img src="/images/image-product-4.jpg" alt="main picture" class="rounded-xl "
                    :class="{ activePicture: activeImage.activeIndex == 4 }">
            </div>

        </div>
    </div>
</template>

