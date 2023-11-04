<script setup>
</script>
<template>
    <div class="2xl:w-10/12  h-[120px] flex items-center justify-between border-b-[1px] border-b-grayishBlue">
        <!-- desktop nav -->
        <div class="flex gap-10 items-center">
            <img src="/images/logo.svg" alt="site logo">
            <ul class="flex text-darkGrayishBlue  font-kumbhRgular">
                <li><a href="#" class="navItem">Collections</a></li>
                <li><a href="#" class="navItem">Men</a></li>
                <li><a href="#" class="navItem">Women</a></li>
                <li><a href="#" class="navItem">About</a></li>
                <li><a href="#" class="navItem">Contact</a></li>
            </ul>
        </div>
        <!-- cart and profile -->
        <div class="flex gap-10 items-center">
            <img src="/images/icon-cart.svg" class="w-6 h-6 cursor-pointer" alt="cart icon">
            <img src="/images/image-avatar.png" class="profileImage" alt="cart icon">
        </div>
    </div>
</template>
