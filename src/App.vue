<!--
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-03-24 00:05:51
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-04-16 11:31:46
 * @Description: 
-->
<template>
  <div id="app">
    <div class="box">
      <g-input value="张三" />
      <g-input disabled value="李四" />
      <g-input readonly value="王五" />
    </div>
    <div class="box">
      <g-input value="我是error" error="不能有英文" />
    </div>
    <div class="box">
      <g-input value="赵四" @change="inputChange"/>
    </div>
    <div class="box">
      <Button :icon="icons[0]">我是button</Button>
      <Button :icon="icons[0]" :iconPosition="'right'">我是button</Button>
      <Button
        class="margin-left"
        :icon="icons[0]"
        :loading="loading"
        :iconPosition="'left'"
        @click="loading = !loading"
        >我是button
      </Button>
      <Button-group class="margin-left">
        <Button icon="left">上一页</Button>
        <Button>更多</Button>
        <Button icon="right">下一页</Button>
      </Button-group>
    </div>
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
    inputChange(e){
      console.log(e.target.value);
    }
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
  /* text-align: center; */
  color: #2c3e50;
  /* display: flex; */
}

.margin-left {
  margin-left: 10px;
}

.box{
  margin: 20px
}
</style>
