<template>
  <div class="ark-box">
    <main>
      <Button @click="sum += 648">充值648（648）</Button>
      <Button @click="sum += 168">十连抽礼包（168）</Button>
      <Button @click="sum += 68">每周资源礼包（68）</Button>
      <Button @click="sum += 68">新手资源礼包（68）</Button>
      <Button @click="sum += 128">遗物礼包（128）</Button>
      <Button @click="sum += 128">钱币礼包（128）</Button>
      <div class="other">
        <span class="label">其他充值金额</span>
        <g-input  v-model="rechargeNum" type="number" placeholder="请输入充值的金额"></g-input>
        <Button class="g-button" @click="addSum">确定</Button>
      </div>
      <div class="other">
        <span class="label">删除金额</span>
        <g-input v-model="delNum" type="number" placeholder="请输入删除的金额"></g-input>
        <Button class="g-button" @click="delSum">确定</Button>
      </div>

    </main>
    <footer>
      <span>累计充值:</span>
      <span class="num">{{ sum }}</span>
    </footer>
  </div>
</template>

<script>

  export default {
    name: 'tomorrowArk',
    data() {
      return {
        sum: 0,
        rechargeNum: '',
        delNum: ''
      }
    },
    watch: {
      sum(newVal){
        console.log(newVal);
        localStorage.setItem('sum',newVal)
      }
    },
    mounted(){
      this.sum = Math.floor(localStorage.getItem('sum')) || 0
      console.log(this.sum);
    },
    methods:{
      addSum(){
        if(this.rechargeNum && !isNaN(this.rechargeNum) && this.rechargeNum >= 0 ){
          this.sum += parseInt(this.rechargeNum)
          this.rechargeNum = ''
          window.alert('充值金额成功')
        }else{
          this.rechargeNum = ''
          window.alert('充值金额失败')
        }
      },
       delSum(){
        if (this.delNum && !isNaN(this.delNum) && this.delNum >= 0) {
          const subtract = this.sum - parseInt(this.delNum)
          if(subtract >= 0){
            this.sum = subtract
            this.delNum = ''
            window.alert('删除金额成功')
          }else{
            this.delNum = ''
            window.alert('删除金额比累计金额多，删除失败')
          }   
        }else{
          this.delNum = ''
          window.alert('删除金额失败')
        }
       }
    }
  }
</script>

<style lang="scss" scoped>
.ark-box{
  padding-left: 20px;
}

.other{
  margin-top: 20px;

  .label{
  padding-right: 20px;
  }

 .g-button{
  margin-left: 10px;
  }
}

main{
  button{
    margin-right: 10px;
  }
}

footer{
  margin-top: 50px;

  .num{
    font-size: 24px;
    font-weight: 700;
    padding-left: 10px;
  }
}
</style>