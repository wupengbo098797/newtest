<template>
  <!--li列表-->
  <ul class="junhun">
    <li>
      <div class="icobox">
        <img src="https://misc.360buyimg.com/m/auction-my/images/icon_loan.png" alt="">
        <p>我的贷款</p>
      </div>
      <div class="dunhu">
        <span class="iconfont you">&#xe62a;</span>
      </div>
    </li>
    <li>
      <div class="icobox">
        <img src="https://misc.360buyimg.com/m/auction-my/images/icon_service.png" alt="">
        <p>辅助服务</p>
      </div>
      <div class="dunhu">
        <span class="iconfont you">&#xe62a;</span>
      </div>
    </li>
    <li>
      <div class="icobox">
        <img src="https://misc.360buyimg.com/m/auction-my/images/icon_notice.png" alt="">
        <p>我的提醒</p>
      </div>
      <div class="dunhu">
        <span class="iconfont you">&#xe62a;</span>
      </div>
    </li>
    <li>
      <div class="icobox">
        <img src="https://misc.360buyimg.com/m/auction-my/images/icon_sub.png" alt="">
        <p>我的订阅</p>
      </div>
      <div class="dunhu">
        <span class="iconfont you">&#xe62a;</span>
      </div>
    </li>
  </ul>
<!--  &lt;!&ndash;空&ndash;&gt;-->
<!--  <div style="height: 2rem"></div>-->
</template>

<script>
    export default {
        name: "jdMine04"
    }
</script>

<style scoped>
  /*li列表*/
  .junhun{
    margin-top: .1rem;
    background: white;
  }
  .junhun li{
    display: flex;
    height: .54rem;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
    align-items: center;
  }
  .junhun .icobox{
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin-left: .1rem;
  }
  .junhun .icobox img{
    width: .25rem;
    height: .25rem;
  }
  .junhun .icobox p{
    font-size: .13rem;
    color: #403b37;
  }
  .dunhu{
    width: 70%;
    display: flex;
    justify-content: flex-end;
  }
  .you{
    font-size: .12rem;
    color: #232326;
    margin-right: .1rem;
  }
</style>
