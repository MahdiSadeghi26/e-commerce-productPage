<script setup>

</script>
<template>
    <div class="xl:p-10 xl:w-[550px] lg:h-5/6 md:w-[450px] flex flex-col gap-7  lg:px-5">
            <!-- company name -->
            <h2 class="uppercase text-orange font-kumbhBold tracking-widest">sneakers company</h2>
            <!-- product title -->
            <h1 class="lg:text-5xl font-kumbhBold">Fall Limited Editon Sneakers</h1>
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
            <div class="flex lg:flex-row flex-col lg:gap-4 md:gap-y-5">
                <div class="bg-lightgb lg:w-5/12 w-full text-center flex justify-between items-center px-4 py-4 rounded-md">
                    <i class="fa-solid fa-minus text-orange cursor-pointer"></i>
                    <p class="font-kumbhBold">0</p>
                    <i class="fa-solid fa-plus text-orange cursor-pointer"></i>
                </div>
                <div class="lg:w-3/5 w-full lg:h-auto md:h-[70px] bg-orange rounded-lg flex items-center justify-center gap-3">
                    <i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i>
                    <p class="text-white text-lg font-kumbhMedium">Add to cart</p>
                </div>
            </div>
        </div>
</template>

