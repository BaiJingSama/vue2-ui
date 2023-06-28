<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block">
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
$border-color:skyblue;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    /* box-shadow: 0 0 3px rgba(0, 0, 0, .5); */
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
    background: white;
    transform:translateY(-100%);
    margin-top: -10px;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;

    &::before,&::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0px;
      height: 10px;
      position: absolute;
      left: 10px;
    }

    &::before{
      border-top-color: $border-color;
      top: 100%;
    }
    &::after{
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
</style>