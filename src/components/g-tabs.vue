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
    mounted(){
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'g-tabs-nav'){
          vm.$children.forEach((childVm)=>{
            if(childVm.$options.name === 'g-tabs-item' && childVm.name === this.selected){
              this.eventBus.$emit('update:selected',this.selected, childVm)
            }
          })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
.tabs{
  height: 100%;
}
</style>