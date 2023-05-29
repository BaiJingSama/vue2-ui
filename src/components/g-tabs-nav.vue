<template>
  <div class="tabs-nav">
    <slot></slot>
    <!-- <slot name="actions"></slot> -->
  </div>
</template>

<script>
  export default {
    name: 'g-tabs-nav',
    inject: ['eventBus'],
  }
</script>

<style lang="scss" scoped>
.tabs-nav{
  
}
</style>