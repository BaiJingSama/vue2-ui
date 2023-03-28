<template>
  <div id="app">
    <Button >我是button</Button>
    <Button :icon="icons[0]" :iconPosition="'right'">我是button</Button>
    <Button :icon="icons[0]" :loading="loading" :iconPosition="'left'" @click="loading = !loading">我是button</Button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      icons:['settings'],
      loading: false
    }
  },
  methods:{
    loadingClick(){
      console.log(1);
      this.icons[1] = ''
      console.log(this.icons);
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/reset.scss';
@import './assets/style/vars.scss';

body{
  font-size: $font-size;
}

#app {
  margin-top: 20px;
  margin-left: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  
}

</style>
