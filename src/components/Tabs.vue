<script lang="ts">
import { InjectionKey, inject } from 'vue'
export { default as TabItem } from './TabItem.vue'

export interface TabsState {
  activeTab: string
}

const TabsKey: InjectionKey<TabsState> = Symbol('Tabs')

export function useTabs() {
  return inject(TabsKey, makeTabsState, true)
}

function makeTabsState() {
  return reactive({ activeTab: '' })
}
</script>

<script lang="ts" setup>
import { reactive, provide, watchEffect, watch } from 'vue'

const { modelValue } = defineProps<{ modelValue?: string }>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const state = makeTabsState()

watchEffect(() => (state.activeTab = modelValue || ''))

watch(
  () => state.activeTab,
  (tab) => emit('update:modelValue', tab || '')
)

provide(TabsKey, state)
</script>

<template>
  <div :class="$style.tabs" class="rounded-lg lg:bg-gradient-to-b lg:from-gray-darkest lg:border-gray-dark lg:border lg:to-gray-darker lg:p-4 lg:px-8 lg:rounded-lg">
    <div :class="$style.list" role="tablist" class="lg:w-1/2 lg:mx-auto border-gray-dark border">
      <slot name="list" />
    </div>

    <slot :name="state.activeTab" />
  </div>
</template>

<style lang="postcss" module>
.tabs {
  @apply flex flex-col gap-2;
}

.list {
  @apply flex p-1 rounded-lg;

  & > button {
    @apply flex-1;
  }
}
</style>
