<!--
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-03-24 00:05:51
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-03-29 22:34:08
 * @Description: 
-->
<template>
  <div id="app">
    <Button>我是button</Button>
    <Button :icon="icons[0]" :iconPosition="'right'">我是button</Button>
    <Button
      :icon="icons[0]"
      :loading="loading"
      :iconPosition="'left'"
      @click="loading = !loading"
      >我是button
    </Button>
    <Button-group>
      <div></div>
      <Button icon="left">上一页</Button>
      <Button>更多</Button>
      <Button icon="right">下一页</Button>
    </Button-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      icons: ["settings"],
      loading: false,
    };
  },
  methods: {
    loadingClick() {
      console.log(1);
      this.icons[1] = "";
      console.log(this.icons);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style/reset.scss";
@import "./assets/style/vars.scss";

body {
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

.button-group {
  display: inline-flex;
}
</style>
