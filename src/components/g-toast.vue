<!--
 * @Author: baijingsama 1303802862@qq.com
 * @Date: 2023-05-08 14:30:42
 * @LastEditors: baijingsama 1303802862@qq.com
 * @LastEditTime: 2023-05-08 15:29:40
 * @Description: toast组件
-->

<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'g-toast'
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
  color: #fff
}
</style>