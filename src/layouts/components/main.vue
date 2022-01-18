<template>
  <div class="main__container">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'layoutMain',
  setup() {}
})
</script>

<style lang="scss" scoped>
.main__container {
  min-height: calc(100vh - 120px);
  padding: 20px;
  background-color: $--color-bg-secondary;
}
</style>
