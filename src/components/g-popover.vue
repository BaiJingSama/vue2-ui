<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-popover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    xxx() {
      console.log('改变了visible');
      this.visible = !this.visible
      if (this.visible) {
        setTimeout(() => {
          let clickHandle = ()=>{
            this.visible = false
            document.removeEventListener('click', clickHandle)
            console.log('删除了监听器');
          }
          console.log('新增了监听器');
          document.addEventListener('click', clickHandle)
        })  
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid skyblue;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
  }
}
</style>