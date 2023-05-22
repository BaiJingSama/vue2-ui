import Toast from './components/g-toast'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({
        Vue, 
        message, 
        propsData: toastOptions,
        onClose: () =>{
          currentToast = null
        }
      })
    }
    console.log(options);
  }
}

function createToast({ Vue, message, propsData ,onClose}) {
  // 拿到Toast实例
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  // 给toast的slots绑定用户传入的参数
  toast.$slots.default = [message]
  // mount toast组件
  toast.$mount()
  // 将toast组件添加进body里
  toast.$on('close',onClose)
  document.body.appendChild(toast.$el)
  return toast
}