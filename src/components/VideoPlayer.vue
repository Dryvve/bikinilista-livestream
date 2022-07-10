<script lang="ts">
import 'videojs-youtube/dist/Youtube.min.js'
import 'video.js/dist/video-js.css'
import './videoplayer.css'
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  PropType,
  Ref,
  ref,
  computed,
  toRefs,
  watch,
} from 'vue'
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'

function makeVideoOptions(
  opts: Ref<VideoJsPlayerOptions>,
  video: Ref<String>
) {
  return computed(() => {
    const options = opts.value

    options.sources = []

      options.sources.push({
        type: `video/youtube`,
        src: "" + video,
      })

    options.techOrder = ['youtube']

    return options
  })
}

export default defineComponent({
  props: {
    options: {
      type: Object as PropType<VideoJsPlayerOptions>,
      default: {},
    },
    video: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const { options, video } = toRefs(props)

    const player = ref(null) as Ref<VideoJsPlayer | null>
    const vjs = ref(null) as Ref<Element | null>

    const opts = makeVideoOptions(options, video)

    function createPlayer() {
      player.value?.dispose()

      if (vjs.value) {
        player.value = videojs(vjs.value, opts.value)
      }
    }

    onMounted(createPlayer)

    onBeforeUnmount(() => {
      player.value?.dispose()
      player.value = null
    })

    return {
      vjs,
    }
  },
})
</script>

<template>
  <div class="aspect-video">
    <video ref="vjs" class="video-js vjs-big-play-centered w-full h-full rounded-lg" />
  </div>
</template>

<style lang="css" src="./videoplayer.css" />
