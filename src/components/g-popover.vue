<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
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
          document.body.appendChild(this.$refs.contentWrapper)
          let {top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY +'px'
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
}

.content-wrapper {
    position: absolute;
    border: 1px solid skyblue;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    transform:translateY(-100%)
  }
</style>