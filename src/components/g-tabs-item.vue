<template>
  <div class="tab-item" @click="abc" :class="classes">
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
      },
      name: {
        type: String || Number,
        required: true,
        default: ''
      }
    },
    computed:{
      classes(){
        return {
          active: this.active
        }
      }
    },  
    data() {
      return {
        active: false
      }
    },
    inject: ['eventBus'],
    created(){
      this.eventBus.$on('update:selected',(name)=>{
        this.active = this.name === name
      })
    },
    methods:{
      abc(){
        this.eventBus.$emit('update:selected',this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-item{
    flex-shrink: 0;
    padding: 0 2em;
    &.active{
      background: skyblue
    }
}
</style>