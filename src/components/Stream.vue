<script lang="ts">
import { computed, defineComponent, PropType, Ref } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    current: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const active = computed(() => props.current === props.id)

    return {
      active,
    }
  },
})
</script>

<template>
  <div>
    <h3
      class="
        text-lg
        font-semibold
        duration-200
        cursor-pointer
        lg:text-xl lg:leading-relaxed
      "
      :class="active ? 'text-white' : 'text-gray-400 lg:hover:text-gray-200'"
      v-text="title"
      @click="$emit('select', id)"
    />

    <div>
      <p class="transition-opacity leading-relaxed text-sm whitespace-pre-wrap pt-2" :class="active ? 'block opacity-100' : 'hidden opacity-0'">
        <slot name="answer" />
      </p>
    </div>
  </div>
</template>