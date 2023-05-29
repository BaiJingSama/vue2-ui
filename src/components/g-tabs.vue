<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
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
    created(){
      // this.$emit('update:selected')
    }
  }
</script>

<style lang="scss" scoped>
.tabs{
  height: 100%;
}
</style>