/*
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-03-24 00:05:51
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-04-12 20:18:14
 * @Description: 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Icon from './components/Icon.vue';
import Button from './components/Button.vue'
import ButtonGroup from './components/button-group'
import { expect} from 'chai';
import chai from 'chai'
import spies from 'chai-spies'

Vue.component('Button', Button)
Vue.component('Icon', Icon);
Vue.component('Button-group', ButtonGroup)
Vue.config.productionTip = false

chai.use(spies)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log(expect);

// 单元测试
// icon测试
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  button.$mount()
  const useElement = button.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#settings')
  button.$el.remove()
  button.$destroy()
  // 挂载后删除这个元素
}
// loading测试
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  button.$mount()
  const useElement = button.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#loading')
  button.$el.remove()
  button.$destroy()
}
// icon位置测试
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition:'right'
    }
  })
  button.$mount(div)
  const svg = button.$el.querySelector('svg')
  const {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}

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