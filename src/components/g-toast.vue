<!--
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-05-08 14:30:42
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-05-08 17:26:09
 * @Description: toast组件
-->

<template>
  <div class="toast">
    <slot></slot>
    <div class="line" v-if="closeButton.text"></div>
    <span class="close" v-if="closeButton.text" @click="onClickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
  export default {
    name:'g-toast',
    props:{
      autoClose:{
        type:Boolean,
        default: true
      },
      autoCloseDelay:{
        type:Number,
        default: 50
      },
      closeButton:{
        type:Object,
        default (){
          return {}
        }
      }
    },
    mounted(){
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },this.autoCloseDelay * 1000)
      }
    },
    methods:{
      close(){
        this.$el.remove()
        this.$destroy()
      },
      log(){
        console.log('我是toast');
      },
      onClickClose(){
        this.close()
        if(this.closeButton && typeof this.closeButton === 'function'){
          this.closeButton.callback(this) // this === toast 实例
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.74);

.toast{
  /* border:1px solid red; */
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
  border-radius: 4px;
  padding: 0 24px;
  color: #fff;

  .line{
    height:100%;
    margin-left: 24px;
    border-left: 1px solid #ccc ;
  }
  .close{
    padding-left: 24px;
  }
}
</style>