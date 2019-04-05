<template>
  <!--搜索-->
  <div class="zunbox">
    <span class="iconfont kun">&#xe6fe;</span>
    <input type="text" placeholder="标的物名称/处置机构">
  </div>
</template>

<script>
    export default {
        name: "jdProperty02"
    }
</script>

<style scoped>
  /*}搜索*/
  .zunbox{
    width: 3.55rem;
    height: .3rem;
    background: #eaebed;
    border-radius: .5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: .1rem auto;
  }
  .kun{
    font-size: .14rem;
    color: #bbbbbb;
  }
  .zunbox input{
    width: 2.9rem;
    height: .3rem;
    background: #eaebed;
    font-size: .14rem;
  }
  .zunbox input::-webkit-input-placeholder {
    color: #b0acac;
    font-size:.1rem;
  }
</style>
