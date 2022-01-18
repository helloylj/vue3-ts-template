<template>
  <div class="layout__container--vertical">
    <layout-header />
    <div class="layout__content">
      <layout-sidebar />
      <div class="layout__main">
        <layout-main>
          <slot />
        </layout-main>
        <layout-footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHeader from './components/header.vue'
import LayoutFooter from './components/footer.vue'
import LayoutSidebar from './components/sidebar.vue'
import LayoutMain from './components/main.vue'
export default defineComponent({
  name: 'LayoutDefault',
  components: {
    LayoutHeader,
    LayoutFooter,
    LayoutSidebar,
    LayoutMain
  }
})
</script>

<style lang="scss" scoped>
.layout {
  &__container--vertical {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }

  &__content {
    display: flex;
    flex: 1;
    overflow: auto;
  }

  &__main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
  }
}
</style>
