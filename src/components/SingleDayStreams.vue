<script lang="ts">
export interface LiveStream {
  time?: string,
  url?: string
}

export interface LiveStreamProps {
  day?: string,
  livestreams?: Array<LiveStream>
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import Stream from './Stream.vue'

const {
  day = "13 July",
  livestreams = [{
    time: "6AM Cest",
    url: "https://youtube.com"
  }],
} = defineProps<LiveStreamProps>()

const current = ref(livestreams[0].time + day)

function handleSelect(id: unknown) {
  current.value = id as string
}
</script>

<template>
  <div>
    <div class="grid gap-6 mt-6">
      <Stream
        v-for="livestream of livestreams"
        :key="livestream.time + day"
        :current="current"
        :title="livestream.time + ''"
        :id="livestream.time + day"
        @select="handleSelect"
      >
        <template #answer>
          <iframe class="w-full h-64 md:h-96 lg:h-[36rem] rounded-lg"
            :src="livestream.url">
          </iframe>
        </template>
      </Stream>
    </div>
  </div>
</template>

<style>
</style>
