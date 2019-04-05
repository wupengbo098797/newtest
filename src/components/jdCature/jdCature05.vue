<template>
  <!--地区-->
  <div class="region">
    <ul class="gion">
      <li>默认排序<span class="iconfont huan">&#xe702;</span></li>
      <li>分类<span class="iconfont huan">&#xe64b;</span></li>
      <li>所在地<span class="iconfont huan">&#xe64b;</span></li>
      <li>更多<span class="iconfont huan">&#xe64b;</span></li>
      <li><b>订阅</b></li>
    </ul>
    <!--商品-->
    <ul class=" commo">
      <li v-for="iten in tunit">
        <div class="cunbox">
          <img :src="iten.src" alt="">
        </div>
        <div class="eunbox">
          <div class="vun">
            <p>{{iten.ped}}</p>
            <span>{{iten.spanr}}<b>{{iten.bovu}}</b></span>
          </div>
          <div class="sun">
            <p> {{iten.juntu}}<span class="iconfont vin">&#xe600;</span> 北京</p>
          </div>
          <div class="mont">
            <span>{{iten.svun}}</span>
            <p>{{iten.qtom}}</p>
          </div>
        </div>
      </li>
      <li class="gunyyunh">
        <img src="https://img10.360buyimg.com/uba/jfs/t6634/307/1171086280/20010/ef411d51/594cc16eNb1cd2945.png" alt="" class="fun1">
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            tunit:[
              {src:'https://img14.360buyimg.com/imgw/s480x320_jfs/t1/11830/34/11471/1197747/5c89b39bEbb4dd17a/d00daab7a09d87a9.jpg!cc_3x2!q85',ped:'车牌号为鲁P066WM大众轿车一辆', spanr:'当前价：',bovu:'￥4.55万', juntu:'0次出价 |',svun:'拍卖中',qtom:'剩23小时37分28秒'},
              {src:'https://img14.360buyimg.com/imgw/s480x320_jfs/t1/11830/34/11471/1197747/5c89b39bEbb4dd17a/d00daab7a09d87a9.jpg!cc_3x2!q85',ped:'车牌号为鲁P066WM大众轿车一辆', spanr:'当前价：',bovu:'￥4.55万', juntu:'0次出价 |',svun:'拍卖中',qtom:'剩23小时37分28秒'},
              {src:'https://img14.360buyimg.com/imgw/s480x320_jfs/t1/11830/34/11471/1197747/5c89b39bEbb4dd17a/d00daab7a09d87a9.jpg!cc_3x2!q85',ped:'车牌号为鲁P066WM大众轿车一辆', spanr:'当前价：',bovu:'￥4.55万', juntu:'0次出价 |',svun:'拍卖中',qtom:'剩23小时37分28秒'},
              {src:'https://img14.360buyimg.com/imgw/s480x320_jfs/t1/11830/34/11471/1197747/5c89b39bEbb4dd17a/d00daab7a09d87a9.jpg!cc_3x2!q85',ped:'车牌号为鲁P066WM大众轿车一辆', spanr:'当前价：',bovu:'￥4.55万', juntu:'0次出价 |',svun:'拍卖中',qtom:'剩23小时37分28秒'},
              {src:'https://img14.360buyimg.com/imgw/s480x320_jfs/t1/11830/34/11471/1197747/5c89b39bEbb4dd17a/d00daab7a09d87a9.jpg!cc_3x2!q85',ped:'车牌号为鲁P066WM大众轿车一辆', spanr:'当前价：',bovu:'￥4.55万', juntu:'0次出价 |',svun:'拍卖中',qtom:'剩23小时37分28秒'},
              {src:'https://img14.360buyimg.com/imgw/s480x320_jfs/t1/11830/34/11471/1197747/5c89b39bEbb4dd17a/d00daab7a09d87a9.jpg!cc_3x2!q85',ped:'车牌号为鲁P066WM大众轿车一辆', spanr:'当前价：',bovu:'￥4.55万', juntu:'0次出价 |',svun:'拍卖中',qtom:'剩23小时37分28秒'},
              {src:'https://img14.360buyimg.com/imgw/s480x320_jfs/t1/11830/34/11471/1197747/5c89b39bEbb4dd17a/d00daab7a09d87a9.jpg!cc_3x2!q85',ped:'车牌号为鲁P066WM大众轿车一辆', spanr:'当前价：',bovu:'￥4.55万', juntu:'0次出价 |',svun:'拍卖中',qtom:'剩23小时37分28秒'},
              {src:'https://img14.360buyimg.com/imgw/s480x320_jfs/t1/11830/34/11471/1197747/5c89b39bEbb4dd17a/d00daab7a09d87a9.jpg!cc_3x2!q85',ped:'车牌号为鲁P066WM大众轿车一辆', spanr:'当前价：',bovu:'￥4.55万', juntu:'0次出价 |',svun:'拍卖中',qtom:'剩23小时37分28秒'},
              {src:'https://img14.360buyimg.com/imgw/s480x320_jfs/t1/11830/34/11471/1197747/5c89b39bEbb4dd17a/d00daab7a09d87a9.jpg!cc_3x2!q85',ped:'车牌号为鲁P066WM大众轿车一辆', spanr:'当前价：',bovu:'￥4.55万', juntu:'0次出价 |',svun:'拍卖中',qtom:'剩23小时37分28秒'},
            ]
          }
        }
    }
</script>

<style scoped>
  /*地区*/
  .region{
    background: white;
  }
  .gion{
    width: 100%;
    height: .47rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e3e5e9;
  }
  .gion li b{
    display: inline-block;
    width: .46rem;
    height: .28rem;
    color: #fff;
    text-align: center;
    line-height: .28rem;
    border-radius: .05rem;
    font-size: .1rem;
    font-weight: 100;
    background: #cc272b;
  }
  .gion li{
    padding:.0rem .13rem;
    border-right: 1px solid #cbcbcb;
    color: #232326;
    font-size: .12rem;
  }
  .huan{
    font-size: .11rem;
    color: #232326;
  }
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
  .gunyyunh img{
    width: 100%;
    height: 3rem;
  }
</style>
