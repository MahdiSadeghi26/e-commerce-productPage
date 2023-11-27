<script setup>
import { useImageIndexStore } from '../stores/ImageIndex'
import { useModalStore } from '../stores/Modal'

let ModalStore = useModalStore()
let activeImage = useImageIndexStore()
const imageClickHandler = (index) => {
    ModalStore.isActive = true
    activeImage.activeIndex = index
}
</script>
<template>
    <div class="flex flex-col gap-y-5 lg:w-1/2 md:w-full  items-center lg:h-5/6 xl:px-10 ">
        <!-- main image -->
        <img src="/images/image-product-1.jpg" alt="main picture" class="lg:w-10/12 md:h-[300px] w-full  md:rounded-2xl">
        <div class="w-10/12 lg:flex hidden gap-8  ">
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

