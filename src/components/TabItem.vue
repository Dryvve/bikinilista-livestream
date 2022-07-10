<script lang="ts" setup>
import { ref, toRefs } from 'vue'
import { useTabs } from './Tabs.vue'

const { value, disabled = false } = defineProps<{
  value: string
  disabled?: boolean
}>()

const { activeTab } = toRefs(useTabs())

function selectTab() {
  activeTab.value = value
}
</script>

<template>
  <button
    role="tab"
    :class="[$style.item, activeTab === value ? 'border-gray-light bg-gray-dark' : '']"
    @click="selectTab"
  >
    <slot />
  </button>
</template>

<style lang="postcss" module>
.item {
  @apply rounded-lg border border-transparent px-4 py-2 duration-200;

  &[disabled] {
    @apply pointer-events-none;
  }
}
</style>
