<template>
  <div class="tab-item" @click="itemChange" :class="classes">
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
      itemChange(){
        this.eventBus.$emit('update:selected',this.name,this)
      }
    }
  }
</script>

<style lang="scss" scoped>
 $blue: skyblue;
  .tab-item{
    display: flex;
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    align-items: center;
    &.active{
        color:$blue;
        font-weight: bold;
    }
}
</style>