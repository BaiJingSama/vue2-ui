<template>
  <div>
    <button class="s-button">
      <Icon name="settings"/>
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';
.s-button{
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  font: inherit;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
}

.s-button:hover{
  border-color:$border-color-hover
}

.s-button:active{
  background: $button-active-bg;
}
</style>