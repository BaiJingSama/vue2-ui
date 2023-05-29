<template>
  <div class="tab-item" @click="abc">
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
    inject: ['eventBus'],
    created(){
      this.eventBus.$on('update:selected',(name)=>{
        console.log(name);
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

}
</style>