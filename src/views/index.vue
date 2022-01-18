<template>
  <div class="font-bold text-lg">
    <router-link to="/login">跳转login</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Home extends Vue {}
</script>
