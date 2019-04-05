<template>
  <!--搜索-->
  <div class="soubox">
    <span class="iconfont cai">&#xe607;</span>
    <div class="inbox">
      <input type="text" placeholder="搜索标的物名称">
      <span class="iconfont sou">&#xe6fe;</span>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  /*搜索*/
  .soubox{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .07rem .0rem;
  }
  .cai{
    font-size: .18rem;
    color: #5a5a5a;
  }
  .inbox{
    display: flex;
    justify-content: space-around;
    width: 3.23rem;
    height: .32rem;
    background: #fff;
    border-radius: .5rem;
    align-items: center;
  }
  .inbox input{
    width: 2.5rem;
    height: .32rem;
    background: #fff;
    font-size: .14rem;
  }
  .inbox input::-webkit-input-placeholder {
    color: #b0acac;
    font-size:.1rem;
  }
  .sou{
    font-size: .18rem;
    color: #b92c23;
  }
</style>
