<!--
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-03-24 00:05:51
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-07-10 20:39:40
 * @Description: 
-->
<template>
  <div id="app">

    <div class="box" style="padding-top:100px; padding-left:100px;overflow:hidden">
      <g-popover position="top" class="g-popover">
        <template slot="content" slot-scope="{close}">
          <div>我是popover
            <Button @click="close">关闭</Button>
          </div>
        </template>
      <Button>点我</Button>
      </g-popover>
      
      <g-popover position="bottom" class="g-popover">
          <template slot="content">
          <div>我是popover</div>
        </template>
      <Button>点我</Button>
      </g-popover>

      <g-popover position="left" class="g-popover">
          <template slot="content">
          <div>我是popover</div>
        </template>
      <Button>点我</Button>
      </g-popover>

      <g-popover position="right" class="g-popover">
          <template slot="content">
          <div>我是popover</div>
        </template>
      <Button>点我</Button>
      </g-popover>
    </div>

    <div class="box" style="padding-top:100px; padding-left:100px;overflow:hidden">
        <g-popover position="top" class="g-popover" trigger="hover">
          <template slot="content">
            <div>我是hover的popover我是hover的popover我是hover的popover我是hover的popover我是hover的popover</div>
          </template>
        <Button>点我</Button>
        </g-popover>
      
        <g-popover position="bottom" class="g-popover" trigger="hover">
            <template slot="content">
            <div>我是hover的popover</div>
          </template>
        <Button>点我</Button>
        </g-popover>

        <g-popover position="left" class="g-popover" trigger="hover">
            <template slot="content">
            <div>我是hover的popover</div>
          </template>
        <Button>点我</Button>
        </g-popover>

        <g-popover position="right" class="g-popover" trigger="hover">
            <template slot="content">
          <div>我是hover的popover</div>
        </template>
      <Button>点我</Button>
      </g-popover>
    </div>

    <!-- <tomorrow-ark class="ark"/> -->



  <!-- <div class="box">
      <g-tabs :selected.sync="selectedTab">
        <g-tabs-nav>
          <g-tabs-item name="consoleGame" disabled>
            <Icon name="settings"></Icon>单机热游
          </g-tabs-item>
          <g-tabs-item name="networkGame">网络游戏</g-tabs-item>
          <g-tabs-item name="leisureGames">休闲游戏</g-tabs-item>
          <template slot="actions">
            <Button>click me</Button>
          </template>
        </g-tabs-nav>
        <g-tabs-content>
          <g-tabs-pane name="consoleGame">
            <ul>
              <li>单机游戏1</li>
              <li>单机游戏2</li>
              <li>单机游戏3</li>
            </ul>
          </g-tabs-pane>
          <g-tabs-pane name="networkGame">
            <ul>
              <li>网络游戏1</li>
              <li>网络游戏2</li>
              <li>网络游戏3</li>
            </ul>
          </g-tabs-pane>
          <g-tabs-pane name="leisureGames">
            <ul>
              <li>休闲游戏1</li>
                <li>休闲游戏2</li>
                <li>休闲游戏3</li>
            </ul>
          </g-tabs-pane>
        </g-tabs-content>
      </g-tabs>
    </div> -->

  <!-- 
    <div class="box">
        <Button @click="getToast1">top</Button>
        <Button @click="getToast2">middle</Button>
        <Button @click="getToast3">bottom</Button>
    </div>
    <div class="box">
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
  components:{
    // tomorrowArk: ()=> import('./components/play/tomorrow-ark.vue')
  },
  data() {
    return {
      icons: ["settings"],
      loading: false,
      message: "hi",
      selectedTab: 'networkGame'
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
    getToast1() {
      this.showToast('top')
    },
    getToast2() {
      this.showToast('middle')
    },
    getToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast(`该睡觉了，现在已经
      ${new Date().getFullYear()}年
      ${new Date().getMonth() + 1}月
      ${new Date().getDate()}日
      ${new Date().getHours()}:
      ${new Date().getMinutes()}:
      ${new Date().getSeconds()}了
      `
        , {
          closeButton: {
            text: '关闭',
            callback(toast) {
              toast.log()
            }
          },
          autoClose: true,
          // autoCloseDelay: 3,
          position
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
  /* margin: 20px; */
  > .g-popover{
    margin-right: 10px;
  }
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

.ark{
  margin-top: 50px;
}
</style>
