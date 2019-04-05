<template>
  <!--保证金-->
  <div class="baobox">
    <div class="aunx">
      <img src="https://misc.360buyimg.com/m/auction-my/images/icon_secu.png" alt="">
      <p>我的保证金/变卖金</p>
    </div>
    <ul class="nunli">
      <li><p>0</p><b>全部</b></li>
      <li><p>0</p><b>已支付</b></li>
      <li><p>0</p><b>已转货款</b></li>
      <li><p>0</p><b>待返还</b></li>
      <li><p>0</p><b>已返还</b></li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "jdMine03"
    }
</script>

<style scoped>
  /*保证*/
  .baobox{
    background: white;
    height: 1.1rem;
    width: 100%;
    margin-top: .48rem;
  }
  .aunx{
    display: flex;
    align-items: center;
    padding: .14rem .0rem .18rem .17rem;
  }
  .aunx img{
    width: .25rem;
    height: .25rem;
  }
  .aunx p{
    color: #3c3b36;
    font-size: .14rem;
    margin-left: .1rem;
  }
  .nunli{
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
  }
  .nunli li{
    display: flex;
    width: 20%;
    flex-direction: column;
    align-items: center;
  }
  .nunli li p{
    font-size: .14rem;
    color: #d3325c;
  }
  .nunli li b{
    font-weight: 100;
    font-size: .12rem;
    color: #232326;
  }
</style>
