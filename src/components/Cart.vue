<script setup>
</script>
<template>
    <div class="xl:w-[350px]  md:top-[90px] md:right-10 right-2 top-20  rounded-lg absolute shadow-lg bg-white flex flex-col ">
            <p class="font-kumbhBold py-5 px-5">Cart</p>
            <hr class="w-full border-grayishBlue ">
            <!-- items container -->
            <div class="w-full px-5 py-5 flex flex-col gap-y-5 justify-center items-start h-4/6">
                <p class="hidden font-kumbhBold text-darkGrayishBlue">Your Cart is Empty</p>
                <!-- items -->
                <div class="flex w-full gap-4 items-center">
                    <img src="/images/image-product-1-thumbnail.jpg" class="w-12 h-12 rounded-md" alt="">
                    <!-- title and prices -->
                    <div class="flex flex-col text-darkGrayishBlue font-kumbhRgular">
                        <p class="">Fall Limited Edition Sneakers</p>
                        <span>
                            <p class="inline mr-2">$125.00</p>x <p class="inline">3</p>
                            <p class="text-black inline ml-2">$375.00</p>
                        </span>
                    </div>
                    <!-- delete button -->
                    <div class="cursor-pointer"><img src="/images/icon-delete.svg" alt=""></div>
                </div>
                <!-- checkout Button -->
                <button class="bg-orange text-white font-kumbhBold w-full py-4 rounded-lg hover:bg-[#ED7D31] hover:transition-all">Checkout</button>
            </div>
        </div>
</template>