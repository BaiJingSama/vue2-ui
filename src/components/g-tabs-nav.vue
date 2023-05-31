<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'g-tabs-nav',
    inject: ['eventBus'],
  }
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.tabs-nav{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  >.actions-wrapper{
    margin-left: auto;
  }
}
</style>