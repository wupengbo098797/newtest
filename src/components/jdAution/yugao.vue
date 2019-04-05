<template>
  <!--商品-->
  <ul class=" commo">
    <li>
      <div class="cunbox">
        <img src="https://img11.360buyimg.com/imgw/s320x230_jfs/t1/24557/35/4993/15414/5c37278eE07ab9a10/a7b0a9e276a616ec.png!q85!cc_320x230" alt="">
      </div>
      <div class="eunbox">
        <div class="vun">
          <p>域名：xiongannewarea.企业（无佣金无过户费）【东风拍卖】</p>
          <span>当前价：<b>￥5050</b></span>
        </div>
        <div class="sun">
          <p>1次出价 | <span class="iconfont vin">&#xe600;</span> 北京</p>
        </div>
        <div class="mont">
          <span>拍卖中</span>
          <p>剩23小时37分28秒</p>
        </div>
      </div>
    </li>
    <li>
      <div class="cunbox">
        <img src="https://img10.360buyimg.com/imgw/s320x230_jfs/t1/29488/12/12210/16562/5c972f3dEd8924bde/43ad96953d46029b.jpg!q85!cc_320x230" alt="">
      </div>
      <div class="eunbox">
        <div class="vun">
          <p>【贯通拍卖】（2）燃气煮面机</p>
          <span>当前价：<b>￥1000</b></span>
        </div>
        <div class="sun">
          <p>0次出价 | <span class="iconfont vin">&#xe600;</span> 福建</p>
        </div>
        <div class="mont">
          <span>拍卖中</span>
          <p>剩23小时37分28秒</p>
        </div>
      </div>
    </li>
    <li>
      <div class="cunbox">
        <img src="https://img11.360buyimg.com/imgw/s320x230_jfs/t1/31845/30/6161/148113/5c8b6c09Eeec4d817/ae711eb90902c2ec.jpg!q85!cc_320x230" alt="">
      </div>
      <div class="eunbox">
        <div class="vun">
          <p>【一拍】村上隆版画20幅</p>
          <span>当前价：<b>￥30万</b></span>
        </div>
        <div class="sun">
          <p>0次出价 | <span class="iconfont vin">&#xe600;</span> 天津</p>
        </div>
        <div class="mont">
          <span>拍卖中</span>
          <p>剩23小时37分28秒</p>
        </div>
      </div>
    </li>
    <li>
      <div class="cunbox">
        <img src="https://img13.360buyimg.com/imgw/s320x230_jfs/t1/21039/8/8721/114933/5c78958eEdc79b31b/96a17272b474847b.jpg!q85!cc_320x230" alt="">
      </div>
      <div class="eunbox">
        <div class="vun">
          <p>【二拍】-平安银行-北京众义达汇诚汽车销售服务有限公司等两公司债权</p>
          <span>当前价：<b>￥200万</b></span>
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
</template>

<script>
    export default {
        name: "yugao"
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
  .mont p {
    font-size: .1rem;
    color: #232326;
    margin-right: .1rem;
  }
</style>
