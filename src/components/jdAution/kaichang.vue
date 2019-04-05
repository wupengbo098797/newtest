<template>
<div>
  <!--商品-->
  <ul class=" commo">
    <li>
      <div class="cunbox">
        <img src="https://img14.360buyimg.com/imgw/jfs/t1/18977/17/11795/216572/5c943b76Ed45bc3ff/2e4c8a27933f30aa.jpg!q85" alt="">
      </div>
      <div class="eunbox">
        <div class="vun">
          <p>白糖，数量约912.54吨</p>
          <span>当前价：<b>￥371万</b></span>
        </div>
        <div class="sun">
          <p>2999次围观 | <span class="iconfont vin">&#xe600;</span> 南通海关</p>
        </div>
        <div class="mont">
          <span>拍卖中</span>
          <p>剩23小时37分28秒</p>
        </div>
      </div>
    </li>
    <li>
      <div class="cunbox">
        <img src="https://img11.360buyimg.com/imgw/jfs/t1/32313/9/7169/429931/5c945265E88b1d41c/647b99e1f0c9335a.jpg!q85" alt="">
      </div>
      <div class="eunbox">
        <div class="vun">
          <p>眼镜、瘦脸仪等一宗</p>
          <span>当前价：<b>￥1.5万</b></span>
        </div>
        <div class="sun">
          <p>2347次围观 | <span class="iconfont vin">&#xe600;</span> 青岛海关</p>
        </div>
        <div class="mont">
          <span>拍卖中</span>
          <p>剩23小时37分28秒</p>
        </div>
      </div>
    </li>
    <li>
      <div class="cunbox">
        <img src="https://img14.360buyimg.com/imgw/jfs/t1/31187/21/6986/419164/5c945323Ef1c5b778/f5ece881527bb101.jpg!q85" alt="">
      </div>
      <div class="eunbox">
        <div class="vun">
          <p>盐干羊皮一宗</p>
          <span>当前价：<b>￥21.99万</b></span>
        </div>
        <div class="sun">
          <p>837次围观 | <span class="iconfont vin">&#xe600;</span> 青岛海关</p>
        </div>
        <div class="mont">
          <span>拍卖中</span>
          <p>剩23小时37分28秒</p>
        </div>
      </div>
    </li>
    <li>
      <div class="cunbox">
        <img src="https://img14.360buyimg.com/imgw/s480x320_jfs/t1/11830/34/11471/1197747/5c89b39bEbb4dd17a/d00daab7a09d87a9.jpg!cc_3x2!q85" alt="">
      </div>
      <div class="eunbox">
        <div class="vun">
          <p>车牌号为鲁P066WM大众轿车一辆</p>
          <span>当前价：<b>￥4.55万</b></span>
        </div>
        <div class="sun">
          <p>0次出价 | <span class="iconfont vin">&#xe600;</span> 北京</p>
        </div>
        <div class="mont">
          <span>拍卖中</span>
          <p>剩23小时37分28秒</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "kaichang"
    }
</script>

<style scoped>
  /*商品*/
  .commo{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .commo li{
    width: 100%;
    height: 1.26rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e3e5e9;

  }
  .cunbox{
    width: 40%;
    margin: .1rem;
  }
  .cunbox img{
    width: 100%;
  }
  .eunbox{
    width: 60%;
  }
  .vun{
    margin: .1rem .0rem;

  }
  .vun p{
    font-size: .13rem;
    color: #232326;
  }
  .vun span{
    display: inline-block;
    font-size: .11rem;
    color: #848689;
    margin-top: .05rem;
  }
  .vun b{
    font-size: .12rem;
    color: #f23030;
  }
  .sun{
    margin-top: .08rem;
  }
  .sun p{
    font-size:.12rem;
    color: #848689;
  }
  .vin{
    font-size: .12rem;
    color: #848689;
  }
  .mont{
    width: 1.85rem;
    height: .18rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f3f3f3;
    margin-top: .1rem;
  }
  .mont span{
    display: inline-block;
    width: .59rem;
    height: .18rem;
    background: #b92c23;
    border-radius: .0rem .5rem .5rem .0rem;
    color: #fff;
    text-align: center;
    line-height: .18rem;
    font-size: .1rem;

  }
  .mont p{
    font-size: .1rem;
    color: #232326;
    margin-right: .1rem;
  }
</style>
