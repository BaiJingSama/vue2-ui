/*
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-03-24 00:05:51
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-04-16 12:44:02
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

Vue.component('Button', Button)
Vue.component('Icon', Icon);
Vue.component('Button-group', ButtonGroup)
Vue.component('g-input',Input)
Vue.config.productionTip = false

chai.use(spies)

new Vue({
  router,
  render: h => h(App)
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