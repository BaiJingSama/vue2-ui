/*
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-03-24 00:05:51
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-05-08 15:23:20
 * @Description: 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Icon from './components/Icon.vue';
import Button from './components/button.vue'
import ButtonGroup from './components/button-group'
import Input from './components/g-input.vue'
import { expect} from 'chai';
import chai from 'chai'
import spies from 'chai-spies'
import {inputTestProps,inputTestEvent} from '../test/input.test'
import Row from './components/row.vue'
import Col from './components/col.vue'
import Layout from './components/g-layout.vue'
import Header from './components/g-header.vue'
import Footer from './components/g-footer.vue'
import Content from './components/g-content.vue'
import Sider from './components/g-sider.vue'
import Toast from './components/g-toast.vue'
import plugin from './plugin';

Vue.component('Button', Button)
Vue.component('Icon', Icon);
Vue.component('Button-group', ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.config.productionTip = false

chai.use(spies)
Vue.use(plugin)
new Vue({
  router,
  render: h => h(App),
  // created(){
  //   this.$toast()
  // }
}).$mount('#app')

inputTestProps()
inputTestEvent()
// 单元测试
// click测试
{
  const Constructor = Vue.extend(Button)
  const gButton = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  gButton.$mount()

  let spy = chai.spy(()=>{})

  gButton.$on('click',spy)
  // 期望函数被执行
  const button = gButton.$el
  button.click()
  // 期待spy间谍函数被调用
  expect(spy).to.have.been.called()
}