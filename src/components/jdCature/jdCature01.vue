<template>
  <!--头部-->
  <div class="headbox">
    <div class="jdjudi">
      <span class="iconfont fan">&#xe6a5;</span>
      <span class="iconfont cuo">&#xe7f6;</span>
    </div>
    <div class="wz">
      <p>京东司法拍卖</p>
    </div>
    <div class="icofon">
      <span class="iconfont si">&#xe619;</span>
      <span class="iconfont dian">&#xe653;</span>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  /*头部*/
  .headbox{
    width: 100%;
    display: flex;
    height: .50rem;
    background: #FFFFFF;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cbcbcb;
  }
  .jdjudi{
    width: 12%;
    display: flex;
    justify-content: space-between;
    margin-left: .1rem;
  }
  .fan{
    font-size: .17rem;
    color: #464b55;
  }
  .cuo{
    font-size: .18rem;
    color: #464b55;
  }
  .si{
    font-size: .17rem;
    color: #464b55;
  }
  .dian{
    font-size: .17rem;
    color: #464b55;
  }
  .wz{
    width: 76%;
    display: flex;
    justify-content: center;
  }
  .wz p{
    font-size: .16rem;
    color: #232326;
  }
  .icofon{
    width: 12%;
    display: flex;
    justify-content: space-between;
    margin-right: .1rem;
  }
</style>
