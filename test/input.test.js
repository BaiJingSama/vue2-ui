import { expect } from 'chai';
import chai from 'chai'
import Vue from 'vue'
import Input from '../src/components/g-input.vue'
import spies from 'chai-spies'

chai.use(spies)

// props测试
export function inputTestProps(){
  const Constructor = Vue.extend(Input)

  const gInput = new Constructor({
    propsData: {
      value: '1234',
      disabled: false,
      readonly: true,
      error: '你错了'
    }
  }).$mount()

  const inputElement = gInput.$el.querySelector('input')
  expect(inputElement.value).to.eq('1234')
  expect(inputElement.disabled).to.eq(false)
  expect(inputElement.readOnly).to.eq(true)
  const errorMessage = gInput.$el.querySelector('.error-message')
  expect(errorMessage.innerText).to.eq('你错了')
  gInput.$destroy()
  // 挂载后删除这个元素
}

export function inputTestEvent(){
  const Constructor = Vue.extend(Input)
  let vm
  vm = new Constructor({}).$mount()
  const callback = chai.spy(()=>{})
  vm.$on('change',callback)
  // 触发input的change 事件
  let event = new Event('change')
  let inputElement = vm.$el.querySelector('input')
  inputElement.dispatchEvent(event)

  expect(callback).to.have.been.called

  vm.$destroy()
}



