<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    clickHandle (e) {
      if (!this.$refs.contentWrapper || !this.$refs.contentWrapper.contains(e.target)) {
        this.close()
      }
    },
    listenToDocument(){
      console.log('监听了document');
      document.addEventListener('click', this.clickHandle)
    },
    open(){
      this.visible = true
      setTimeout(() => {
        this.positionContent()
        this.listenToDocument()
      })
    },
    close(){
      this.visible = false
      document.removeEventListener('click', this.clickHandle)
    },
    onClick(event) {
      console.log(event.target);
      if(this.$refs.triggerWrapper.contains(event.target)){
        this.visible = !this.visible
         if (this.visible) {
          this.open()
        }else{
          this.close()
        }
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