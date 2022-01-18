<template>
  <el-aside class="sidebar__container" width="200px">
    <el-menu @open="handleOpen" @close="handleClose">
      <el-sub-menu index="1">
        <template #title>
          <icon class="iconfont icon-all"></icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="role">
          <router-link to="/role">角色管理</router-link>
        </el-menu-item>
        <el-menu-item index="permission">
          <router-link to="/permission">权限管理</router-link>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <icon class="iconfont icon-account"></icon>
        <span>客户管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'layoutSidebar',
  setup() {}
})
</script>

<style lang="scss" scoped>
.sidebar__container {
  .el-menu {
    border-right: none;
  }

  .iconfont {
    font-size: 20px;
  }
}
</style>
