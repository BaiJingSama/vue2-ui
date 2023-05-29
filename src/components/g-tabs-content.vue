<template>
  <div class="tabs-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'g-tabs-content',
    inject: ['eventBus'],
  }
</script>

<style lang="scss" scoped>
.tabs-content{

}
</style>