<template>
  <header class="header__container">
    <div class="logo">logo</div>
    <div class="user">yulj</div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'layoutHeader',
  setup() {}
})
</script>

<style lang="scss" scoped>
.header__container {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 60px;
  background-color: var(--el-color-primary);
  color: #fff;

  .user {
    flex: none;
    justify-self: flex-end;
  }
}
</style>
