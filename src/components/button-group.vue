<template>
  <div v-if="!error" class="button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        error: false
      }
    },
    mounted() {
      for(let node of this.$el.children){
        if(node.nodeName.toLowerCase() !== 'button'){
          console.warn('button-group组件预期的子元素为<Button>')
          this.error = true
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "../assets/style/vars.scss";
.button-group{
  display: inline-flex;

  > .s-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child{
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child{
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>