<script setup>
const props = defineProps(['imagesNumber'])
import { useModalStore } from '../stores/Modal'
import { useImageIndexStore } from '../stores/ImageIndex'

let ModalStore = useModalStore()
let activeImage = useImageIndexStore()

let incrementImage = () => {
    if (activeImage.activeIndex < 5) {
        activeImage.activeIndex++
    }
    if (activeImage.activeIndex == 5) {
        activeImage.activeIndex = 1
    }

}
let decresmentImage = () => {
    if (activeImage.activeIndex == 1) {
        activeImage.activeIndex = 4
    } else {
        activeImage.activeIndex--
    }
}

</script>
<template>
    <div class="w-full h-full absolute flex justify-center items-center" v-if="ModalStore.isActive">
        <!-- image modal -->
        <!-- black wrapper -->
        <div class="w-screen h-screen blur absolute">s</div>
        <!-- picture slide show -->
        <div class="z-10 flex xl:w-1/3  h-5/6 flex-col items-center gap-y-5 cursor-pointer">
            <div class="w-11/12 flex items-center relative">
                <i class="fa-solid fa-xmark text-orange absolute -top-2 -right-10 fa-2xl"
                    @click="ModalStore.isActive = false"></i>
                <img :src="`/images/image-product-${activeImage.activeIndex}.jpg`" :key="activeImage.activeIndex"
                    alt="modal main image" class=" rounded-2xl">
                <!-- showcase keys -->
                <div class="absolute flex w-full  items-center justify-between">
                    <div class="modalkeys leftKey"><i class="fa-solid fa-chevron-left fa-xl" @click="decresmentImage"></i></div>
                    <div class="modalkeys rightKey"><i class="fa-solid fa-chevron-right fa-xl" @click="incrementImage"></i>
                    </div>
                </div>
            </div>
            <!-- tiny pictures -->
            <div class="w-11/12 flex gap-8 ">
                <div class="smallPicture " :class="{ activeItem: activeImage.activeIndex == 1 }"><img
                        src="/images/image-product-1.jpg" alt="main picture" class="rounded-xl"
                        :class="{ modalActivePicture: activeImage.activeIndex == 1 }"></div>
                <div class="smallPicture" :class="{ activeItem: activeImage.activeIndex == 2 }"><img
                        src="/images/image-product-2.jpg" alt="main picture" class="rounded-xl "
                        :class="{ modalActivePicture: activeImage.activeIndex == 2 }"></div>
                <div class="smallPicture" :class="{ activeItem: activeImage.activeIndex == 3 }"><img
                        src="/images/image-product-3.jpg" alt="main picture" class="rounded-xl "
                        :class="{ modalActivePicture: activeImage.activeIndex == 3 }"></div>
                <div class="smallPicture" :class="{ activeItem: activeImage.activeIndex == 4 }"><img
                        src="/images/image-product-4.jpg" alt="main picture" class="rounded-xl "
                        :class="{ modalActivePicture: activeImage.activeIndex == 4 }"></div>
            </div>
        </div>
    </div>
</template>