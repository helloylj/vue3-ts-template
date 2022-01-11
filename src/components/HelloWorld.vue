<template>
  <div></div>
  <div>
    <p></p>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      var a = 1
      console.log(a)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
