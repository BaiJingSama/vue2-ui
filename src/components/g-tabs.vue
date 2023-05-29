<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: 'g-tabs',
    props:{
      selected:{
        type: String,
        required: true,
        default: ''
      },
      direction:{
        type: String,
        default: 'horizontal',
        validator(value){
          return ['horizontal','vertical'].includes(value)
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide(){
      return {
        eventBus:this.eventBus
      }
    },
    created(){
    }
  }
</script>

<style lang="scss" scoped>
.tabs{
  height: 100%;
}
</style>