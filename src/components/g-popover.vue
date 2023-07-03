<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
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
  props:{
    position:{
      type: String,
      default: 'top',
      validator(value){
        return ['top','bottom','left','right'].indexOf(value) >= 0
      }
    },
    trigger:{
      type: String,
      default: 'click',
      validator(val){
        return ['hover','click'].indexOf(val) >= 0
      }
    }
  },
  mounted(){
    if(this.trigger === 'click'){
      this.$refs.popover.addEventListener('click',this.onClick)
    }else{
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed(){
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  methods: {
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      const {contentWrapper,triggerWrapper} = this.$refs
      let { top, left, width, height} = triggerWrapper.getBoundingClientRect()
      // console.log(height);
      if(this.position === 'top'){
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + window.scrollY + 'px' 
      }else if(this.position === 'bottom'){
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + height + window.scrollY + 'px'
        console.log(top + height + window.scrollY + 'px');
      }else if(this.position === 'left'){
        contentWrapper.style.left = left + window.scrollX + 'px'
        let {height : height2} = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + window.scrollY + (height - height2) / 2  + 'px'
      } else if (this.position === 'right') {
        contentWrapper.style.left = left + window.scrollX + width +'px'
        let { height: height2 } = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
      }
    },
    clickHandle (e) {
      if (!this.$refs.contentWrapper || !this.$refs.contentWrapper.contains(e.target)) {
        this.close()
      }
    },
    listenToDocument(){
      // console.log('监听了document');
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
      // console.log(event.target);
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
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;

    &::before,&::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0px;
      height: 0px;
      position: absolute;
    }

    &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
      &::before,&::after{
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

    &.position-bottom{
      margin-top: 10px;
      &::before,&::after{
        left: 10px;
      }
      &::before{
        border-bottom-color: $border-color;
        bottom: 100%;
      }
      &::after{
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }

    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before,&::after{
        transform: translateY(-50%);
        top:50%;
      }
      &::before{
        border-left-color: $border-color;
        left: 100%;
      }
      &::after{
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }

    &.position-right{
      margin-left: 10px;
      &::before,&::after{
        transform: translateY(-50%);
        top:50%;
      }
      &::before{
        border-right-color: $border-color;
        right: 100%;
      }
      &::after{
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }
  }
</style>