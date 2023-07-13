<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
  export default {
    data() {
      return {
        eventBus: new Vue()
      }
    },
    props:{
      single: {
        type: Boolean,
        default: false
      }
    },
    mounted(){
      console.log(this.eventBus);
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    }
  }
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse{
  border: 1px solid $grey;
  border-radius: $border-radius;
  border-bottom: none;
}
</style>