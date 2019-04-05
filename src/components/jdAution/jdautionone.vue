<template>
  <div class="wunbox">
    <div class="srun">
      <img src="https://img10.360buyimg.com/popactivity/s750x310_jfs/t1/15321/17/11288/114954/5c8f54b7E99fc3b30/f3f76044c49ded1b.jpg!q70!cc_750x310" alt="">
      <div class="funtun">
        <p>大牌腕表低价折扣专场</p>
        <b>41次出价</b>
      </div>
      <div class="yunli">
        <img src="https://img12.360buyimg.com/popactivity/s750x214_jfs/t1/29870/35/9571/45132/5c7f3a76E5c6a7993/88c356ce5ea8dd0b.jpg!cc_750x214!q70" alt="">
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "jdautionone"
    }
</script>

<style scoped>
  /*全部商品*/
  .dungun{
    width: 100%;
    margin-top: .08rem;
    background: white;
    padding-bottom: .1rem;
  }
  .qun{
    display: flex;
    width: 100%;
  }
  .qun p{
    width: 50%;
    color: #433e33;
    font-size: .14rem;
    padding: .16rem .63rem;
  }
  .qun p:hover{
    color: #cc2729;
    border-bottom: 2px solid #cc2729;
  }
  .quan{
    width: 100%;
  }
  .quan ul{
    display: flex;
    /*justify-content: space-around;*/
    flex-wrap: nowrap;
    flex-shrink: 0;
    overflow-y:hidden;
    overflow-x:auto;
    white-space: nowrap;
    padding: .1rem .0rem .1rem .1rem;
  }
  .quan ul li{
    font-size: .1rem;
    color: #443f34;
    display: inline-table;
    vertical-align: top;
    margin-left: .1rem;
  }
  .quan ul li:hover{
    border: 1px solid #b92c23;
    color: #b92c23;
    border-radius: .05rem;
  }
  .wunbox{
    width: 100%;
  }
  .srun{
    display: flex;
    flex-direction: column;
  }
  .srun img{
    width: 100%;
    height: 1.52rem;
  }
  .srun .funtun{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .08rem .0rem;
    background: #FFF;
  }
  .funtun p{
    font-size: .17rem;
    color: #433e33;
    margin-left: .1rem;
  }
  .funtun b{
    font-weight: 100;
    color: #524e44;
    font-size: .1rem;
    margin-right: .1rem;
  }
  .yunli{
    width: 100%;
    margin: .08rem .0rem;
  }
  .yunli img{
    width: 100%;
    height: 1.05rem;
  }
</style>
