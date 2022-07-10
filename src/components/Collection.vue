<script setup lang="ts">
import { ref } from 'vue'
import Tabs, { TabItem } from './Tabs.vue'
import VideoPlayer from './VideoPlayer.vue';
import SingleDayStreams from './SingleDayStreams.vue';
import { LiveStream } from './SingleDayStreams.vue';

interface Product {
  name?: string
  img?: string
  url?: string
}

const products = [{
  name: 'AMALFI COAST BANDEAU',
  img: 'https://bikinilista.com/media/4d/b8/b2/1638735062/Bikini-Amalfi%20Coast%20Bandeau%20Bikini-Snow%20White-Bikinilista%20%281%29.jpg',
  url: 'https://bikinilista.com/en-gb/Bandeau/'
},
{
  name: 'TOKYO BLOSSOM BALCONETTE',
  img: 'https://bikinilista.com/media/12/91/1a/1638822356/Bikini-Tokyo%20Blossom%20Balconette-Lipstick%20Red-Bikinilista%20%281%29.jpg',
  url: 'https://bikinilista.com/en-gb/Balconette/'
},
{
  name: 'CAP DE BARBORIA BUSTIER',
  img: 'https://bikinilista.com/media/57/f8/7d/1638738737/Bikini-Cap%20de%20Barboria%20Bustier-Olive%20Green-Bikinilista%20%20%282%29.jpg',
  url: 'https://bikinilista.com/en-gb/Bustier/'
},
{
  name: 'CARBIS BAY NECKHOLDER',
  img: 'https://bikinilista.com/media/8f/88/89/1638735148/Bikini-Carbis%20Bay%20Neckholder-Magenta%20Red-Bikinilista%20%281%29.jpg',
  url: 'https://bikinilista.com/en-gb/Halter/',
},
{
  name: 'HONOLULU EAST TRIANGLE',
  img: 'https://bikinilista.com/media/a8/17/8e/1638739123/Bikini-Honolulu%20East%20Triangle-Basil%20Green-Bikinilista%20%20%282%29.jpg',
  url: 'https://bikinilista.com/en-gb/Triangle/'
},
{
  name: 'SANTA MARIA BANDEAU',
  img: 'https://bikinilista.com/media/6f/d7/92/1638735774/Bikini-Santa%20Maria%20Bandeau-Snow%20White-Bikinilista%20%281%29.jpg',
  url: 'https://bikinilista.com/en-gb/Bandeau/'
},
{
  name: 'MILANO DESIGN BUSTIER',
  img: 'https://bikinilista.com/media/44/4e/10/1638738793/Bikini-Milano%20Design%20Bustier-Bumblebee%20Yellow-Bikinilista%20%20%281%29.jpg',
  url: 'https://bikinilista.com/en-gb/Bustier/'
},
{
  name: 'GREAT BARRIER NECKHOLDER',
  img: 'https://bikinilista.com/media/59/22/2b/1638735617/Bikini-Great%20Barrier%20Neckholder-Midnight%20Black-Bikinilista%20%281%29.jpg',
  url: 'https://bikinilista.com/en-gb/Halter/',
},
] as Array<Product>
</script>

<template>
  <div class="w-full grid lg:grid-cols-4 gap-2">
    <div v-for="product, j of products" class="flex border-gray-darker border rounded-lg pb-2">
    <a :href="product.url">
      <img :src="product.img" class="h-auto rounded-lg object-cover">
      <p v-text="product.name" class="text-center font-bold text-xl lg:text-sm mt-2"/>
    </a>
    </div>
  </div>
</template>
