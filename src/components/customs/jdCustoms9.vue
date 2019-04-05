<template>
  <!--底部-->
  <div class="footbox">
    <span class="iconfont eun">&#xe68a;<b>首页</b></span>
    <span class="iconfont eun">&#xe672;<b>司法</b></span>
    <span class="iconfont eun">&#xe641;<b>海关</b></span>
    <span class="iconfont eun">&#xe68e;<b>资产</b></span>
    <span class="iconfont eun">&#xe6f9;<b>我的</b></span>
  </div>

</template>

<script>
    export default {
        name: "jdcustomsnine"
    }
</script>

<style scoped>
  /*底部*/
  .footbox{
    width: 100%;
    height: .5rem;
    display: flex;
    align-items: center;
    background: #fff;
    justify-content: space-around;
  }
  .footbox b{
    font-weight: 100;
    font-size: .12rem;
    color: #5a5a5a;
    margin-top: .05rem;
  }
  .footbox span{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .eun{
    font-size: .23rem;
    color: #5a5a5a;
  }
  .footbox span b:hover{
    color: #b92c23;
  }
  .footbox span:hover{
    color: #b92c23;
  }
  .fun1{
    width: 100%;
  }
</style>
