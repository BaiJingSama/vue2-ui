<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'g-tabs-nav',
    inject: ['eventBus'],
    mounted(){
      this.eventBus.$on('update:selected',(item, vm)=>{
        let {width,height,top,left} = vm.$el.getBoundingClientRect()
        console.log(width,height,top,left);
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
      })
    }
  }
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: skyblue;
$border-color: #ddd;
.tabs-nav{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  >.line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid green;
    transition: all .5s;
  }
  >.actions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>