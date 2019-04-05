<template>
  <!--头部-->
  <div class="huny">
    <div class="headbox">
      <div class="jdjudi">
        <span class="iconfont fan">&#xe6a5;</span>
      </div>
      <div class="wz">
        <p>我的拍卖</p>
      </div>
      <div class="icofon">
        <span class="iconfont dian">&#xe653;</span>
      </div>
    </div>

    <!--信息-->
    <div class="fungun">
      <div class="tunji">
        <img src="https://misc.360buyimg.com/m/auction-my/images/avatar.png" alt="">
        <p>Juice桔小橙</p>
      </div>
      <ul class="runtun">
        <li><img src="https://misc.360buyimg.com/m/auction-my/images/auctionpending.png" alt=""><b>参拍中</b></li>
        <li><img src="https://misc.360buyimg.com/m/auction-my/images/auctionsuccess.png" alt=""><b>已获拍</b></li>
        <li><img src="https://misc.360buyimg.com/m/auction-my/images/auctionfailure.png" alt=""><b>未获拍</b></li>
        <li><img src="https://misc.360buyimg.com/m/auction-my/images/auctionall.png" alt=""><b>全部拍品</b></li>
      </ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: "jdMine02"
    }
</script>

<style scoped>
  .huny{
    background: #b43429;
  }
  /*头部*/
  .headbox{
    width: 100%;
    display: flex;
    height: .50rem;
    justify-content: space-between;
    align-items: center;
  }
  .jdjudi{
    width: 12%;
    display: flex;
    justify-content: space-between;
    margin-left: .1rem;
  }
  .fan{
    font-size: .17rem;
    color: #fff;
  }
  .dian{
    font-size: .17rem;
    color: #fff;
  }
  .wz{
    width: 76%;
    display: flex;
    justify-content: center;
  }
  .wz p{
    font-size: .16rem;
    color: #ffffff;
  }
  .icofon{
    width: 12%;
    display: flex;
    justify-content: space-between;
    margin-right: .1rem;
  }
  .bigbox{
    background: #fff;
    padding-top: .07rem;
  }
  /*信息*/
  .fungun{
    width: 100%;
    height: 1.85rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
  .tunji{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .2rem;
  }
  .tunji img{
    width: .6rem;
    height: .6rem;
  }
  .tunji p{
    font-size: .14rem;
    color: #fff;
    margin-top: .16rem;
  }
  .runtun{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 3.55rem;
    height: .74rem;
    background: white;
    border-radius: .06rem;
    position: absolute;
    bottom: -.37rem;
    left: .1rem;
  }
  .runtun li{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .runtun img{
    width: .25rem;
    height: .25rem;
  }
  .runtun li b{
    font-weight: 100;
    color: #3c3b36;
    font-size: .1rem;
    margin-top: .05rem;
  }

</style>
