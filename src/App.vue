<template>
  <div id="app">
    <ym-price msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import YmPrice from './components/ym-price.vue'

export default {
  name: 'App',
  components: {
    YmPrice
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 70px 0;
}
</style>
