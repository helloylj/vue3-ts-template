<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, ref, markRaw, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Layout',
  setup() {
    const layout = ref()
    const route = useRoute()
    const getLayout = async (layoutName = 'layout-default') => {
      const component = await import(`@/layouts/${layoutName}.vue`)
      return component.default
    }

    watch(
      () => route?.meta,
      async (meta: any) => {
        try {
          layout.value = markRaw(await getLayout(meta.layout))
        } catch (e) {
          layout.value = markRaw(await getLayout(''))
        }
      }
    )
    return {
      layout
    }
  }
})
</script>
