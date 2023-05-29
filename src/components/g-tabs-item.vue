<template>
  <div class="tab-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'g-tabs-item',
    props:{
      disabled:{
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.tab-item{

}
</style>