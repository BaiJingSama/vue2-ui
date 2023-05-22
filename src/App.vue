<!--
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-03-24 00:05:51
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-05-22 20:43:07
 * @Description: 
-->
<template>
  <div id="app">

  <div class="box">
    <Button @click="showToast">出现toast</Button>
  </div>
<!--     <div class="box">
      <g-layout style="height: 60vh">
        <g-sider class="sider"></g-sider>
        <g-layout>
          <g-header class="header"></g-header>
          <g-content class="content"></g-content>
          <g-footer class="layout"></g-footer>
        </g-layout>
      </g-layout>
    </div>
    <div class="box">
      <g-row :gutter="10">
        <g-col
          :phone="{ span: 12 }"
          :ipad="{ span: 1 }"
          :narrowPc="{ span: 12 }"
          :pc="{ span: 24 }"
          :widePc="{ span: 1 }"
          >1</g-col
        >
        <g-col
          :phone="{ span: 12 }"
          :ipad="{ span: 24 }"
          :narrowPc="{ span: 12 }"
          :pc="{ span: 1 }"
          :widePc="{ span: 24 }"
          >2</g-col
        >
      </g-row>
      <g-row>
        <g-col :span="10"></g-col>
        <g-col :span="14"></g-col>
      </g-row>
      <g-row>
        <g-col :span="2"></g-col>
        <g-col :span="2" :offset="4"></g-col>
        <g-col :span="2" :offset="1"></g-col>
        <g-col :span="2" :offset="1"></g-col>
      </g-row>
    </div>
    <hr />
    <div class="box">
      <g-input v-model="message"></g-input>
      <p>{{ message }}</p>
    </div>
    <div class="box">
      <g-input value="张三" />
      <g-input disabled value="李四" />
      <g-input readonly value="王五" />
    </div>
    <div class="box">
      <g-input value="我是error" error="不能有英文" />
    </div>
    <div class="box">
      <g-input value="赵四" @change="inputChange" />
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
    </div> -->

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      icons: ["settings"],
      loading: false,
      message: "hi",
    };
  },
  methods: {
    loadingClick() {
      console.log(1);
      this.icons[1] = "";
      console.log(this.icons);
    },
    inputChange(e) {
      console.log(e.target.value);
    },
    showToast(){
      this.$toast(`该睡觉了，现在已经
      ${new Date().getFullYear()}年
      ${new Date().getMonth()+1}月
      ${new Date().getDate()}日
      ${new Date().getHours()}:
      ${new Date().getMinutes()}:
      ${new Date().getSeconds()}了
      `
      ,{
        closeButton:{
          text: '关闭',
          callback(toast){
            toast.log()
          }
        },
        autoClose: true,
        // autoCloseDelay: 3,
        position: 'bottom'
      }
      )
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

.box {
  margin: 20px;
}

/* .layout{
  border: 1px solid gray;
  min-height: 100px;
}

.sider{
  background: #333;
  width: 200px;
}

.header{
  background: skyblue;
  height: 100px;
}

.footer{
  background: pink;
  height: 50px;
} */
</style>
