<template>
  <div class="tabs-pane" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'g-tabs-pane',
    props:{
      name: {
        type: String || Number,
        required: true
      }
    },
    computed:{
      classes(){
        return {
          active: this.active
        }
      }
    },  
    data(){
      return {
        active: false
      }
    },
    inject: ['eventBus'],
    created(){
      this.eventBus.$on('update:selected',(name)=>{
        this.active = this.name === name
      })
    },
  }
</script>

<style lang="scss" scoped>
.tabs-pane{
  &.active{
    background: skyblue
  }
}
</style>