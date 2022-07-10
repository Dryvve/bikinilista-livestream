<script setup lang="ts">
import Livestreams from './components/Livestreams.vue';
import Collection from './components/Collection.vue'
</script>

<template>
  <div class="w-full flex justify-center py-6 bg-gradient-to-t from-gray-darkest to-gray-darker border-gray-dark border-b">
    <a href="https://bikinilista.com">
      <img src="./assets/bkn_white.png" class="w-auto h-8 lg:h-10">
    </a>
  </div>
  <div class="w-full text-white font-sans px-4 max-w-6xl mx-auto">
    <div class="w-full flex flex-col mt-12 lg:mt-20 gap-2">
      <h1 class="font-bold text-4xl leading-tight lg:text-5xl lg:text-center">Miami Swim Week Livestreams</h1>
      <p class="text-lg lg:w-1/2 lg:text-center lg:mx-auto lg:mt-2 lg:text-xl lg:font-thin">Official Miami Swim Week™ The Shows powered by DCSW returns. Watch the official Livestreams here. If you don't want to miss any news subscribe to our <a href="https://bikinilista.com/en-gb/Category/Newsletter/" class="inline text-gold hover:text-gold-light">Newsletter</a>.</p>
      <Livestreams class="mt-5 lg:mt-20"/>
    </div>
  </div>
  <div class="w-full">
    <div class="w-full overflow-hidden">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-3 lg:h-6 text-white rotate-180 mt-20">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="bg-white fill-current"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="bg-white fill-current"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="bg-white fill-current"></path>
      </svg>
    </div>
    <div class="w-full bg-white pb-12 lg:pb-32">
      <div class="px-4 max-w-6xl mx-auto">
        <h2 class="font-bold text-3xl leading-tight lg:text-5xl lg:text-center pt-8 lg:pt-20">Shop the Miami Swim Week Collection</h2>
        <p class="text-lg lg:w-1/2 lg:text-center lg:mx-auto lg:mt-4 lg:text-xl lg:font-thin">Shop the best Swimwear as seen on the Official Miami Swim Week™ The Shows powered by DCSW.</p>
        <Collection class="mt-5 lg:mt-20"/>
      </div>
    </div>
    <div class="w-full text-white flex flex-col px-4 max-w-6xl mx-auto py-12">
      <a href="https://bikinilista.com">
        <img src="./assets/bkn_white.png" class="w-auto h-8 lg:h-10">
      </a>
      <div class="w-full border-white border-b mt-5"/>
      <div class="flex justify-between flex-wrap w-full mt-5">
        <a class="hover:underline w-1/2 lg:w-auto" href="https://bikinilista.com/en-gb/Size/">Size Chart</a>
        <a class="hover:underline w-1/2 lg:w-auto text-right" href="https://bikinilista.com/en-gb/Category/Shipping-and-Returns/">Shipping and Returns</a>
        <a class="hover:underline w-1/2 lg:w-auto" href="https://bikinilista.com/en-gb/Category/Newsletter/">Newsletter</a>
        <a class="hover:underline w-1/2 lg:w-auto text-right" href="https://bikinilista.com/en-gb/Category/Terms-and-Conditions/">Terms and Conditions</a>
        <a class="hover:underline w-1/2 lg:w-auto" href="https://bikinilista.com/en-gb/Category/Privacy-and-Cookies/">Privacy and Cookies</a>
        <a class="hover:underline w-1/2 lg:w-auto text-right" href="https://bikinilista.com/en-gb/Category/Customer-Service/">Customer Service</a>
        <a class="hover:underline w-1/2 lg:w-auto" href="https://bikinilista.com/en-gb/Category/Legal/">Legal</a>
      </div>
    </div>
  </div>
</template>

<style>
</style>
