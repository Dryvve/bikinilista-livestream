<script setup lang="ts">
import { ref } from 'vue'
import Tabs, { TabItem } from './Tabs.vue'
import VideoPlayer from './VideoPlayer.vue';
import SingleDayStreams from './SingleDayStreams.vue';
import { LiveStream } from './SingleDayStreams.vue';

const julythirteenstreams = [{
  time: '8:30pm Ema Savahl',
  url: 'https://www.youtube.com/embed/srxAro7zYD8'
}] as Array<LiveStream>

const julyfourteenstreams = [{
  time: '6:30pm Tiare Hawaii',
  url: 'https://www.youtube.com/embed/CVgaeEGf09I'
},
{
  time: '6:45pm Showcase',
  url: 'https://www.youtube.com/embed/j4cAHudp7ck'
},
{
  time: '9:00pm Showcase',
  url: 'https://www.youtube.com/embed/vv_uWMbMDnE'
},
{
  time: '10:00pm Showcase',
  url: 'https://www.youtube.com/embed/GQhh7wnL-fY'
},
] as Array<LiveStream>

const julyfifteenstreams = [{
  time: '6:30pm Supermodel Swimwear',
  url: 'https://www.youtube.com/embed/v9Gvfh2bY1Q'
},
{
  time: '6:45pm Showcase',
  url: 'https://www.youtube.com/embed/2GIg4QgOu2o'
},
{
  time: '9:00pm Showcase',
  url: 'https://www.youtube.com/embed/LRTZ6xQGPXo'
},
{
  time: '10:00pm Showcase',
  url: 'https://www.youtube.com/embed/KICdVRMyUy4'
}] as Array<LiveStream>

const activeTab = ref('july-13')
</script>

<template>
  <Tabs v-model="activeTab">
    <template #list>
      <TabItem value="july-13">July 13</TabItem>
      <TabItem value="july-14">July 14</TabItem>
      <TabItem value="july-15" class="text-gold-light font-medium">July 15</TabItem>
    </template>

    <template #july-13>
      <div>
        <SingleDayStreams day="13 July" :livestreams="julythirteenstreams"/>
      </div>
    </template>

    <template #july-14>
      <div>
        <SingleDayStreams day="14 July" :livestreams="julyfourteenstreams"/>
      </div>
    </template>

    <template #july-15>
      <div>
        <SingleDayStreams day="15 July" :livestreams="julyfifteenstreams"/>
      </div>
    </template>
  </Tabs>
</template>
