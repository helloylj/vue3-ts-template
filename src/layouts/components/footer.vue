<template>
  <el-footer class="footer__container"> @yulj 版权所有 </el-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'layoutFooter',
  setup() {}
})
</script>

<style lang="scss" scoped>
.footer__container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: $--color-text-primary;
  background-color: $--color-bg-secondary;
}
</style>
