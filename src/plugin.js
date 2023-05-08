import Toast from './components/g-toast'

export default {
  install(Vue,options){
    Vue.prototype.$toast = function(message,toastOptions){
      // 拿到Toast实例
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData:{
          closeButton: toastOptions.closeButton || undefined,
          enableHtml: toastOptions ? toastOptions.enableHtml : false
        }
      })
      // 给toast的slots绑定用户传入的参数
      toast.$slots.default = [message]
      // mount toast组件
      toast.$mount()
      // 将toast组件添加进body里
      document.body.appendChild(toast.$el)
    }
    console.log(options);
  }
}