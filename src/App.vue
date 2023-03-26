<template>
  <div id="app">
    <s-button>我是button</s-button>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './assets/style/reset.scss';
@import './assets/style/vars.scss';

body{
  font-size: $font-size;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
