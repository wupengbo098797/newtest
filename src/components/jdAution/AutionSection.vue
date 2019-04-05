<template>
<div class="gunoun">
<!--分类-->
<div class="classify">
    <div class="ass">
         <span class="iconfont sify" >&#xe6a7;</span>
        <b>分类</b>
    </div>
    <div class="inbox">
        <span class="iconfont sou">&#xe6fe;</span>
        <input type="text" placeholder="今日热搜:翡翠玉">
    </div>
</div>
<!--导航-->
<div class="navbox">
    <ul>
       <li v-for="iten in msg"><img :src="iten.src" ><b>{{iten.cont}}</b></li>
    </ul>
</div>
<!--对号-->
<div class="dui">
    <span class="iconfont hao" v-for="iten in mag">&#xe610;<b>{{iten.cont}}</b></span>
</div>
<!--小轮播-->
<div class="headline">
    <div class="head">
        <span>拍卖<b>头条</b></span>
    </div>
    <div class="swiper-container car">
        <div class="swiper-wrapper ous">
            <div class="swiper-slide carousel">
                <span>热</span>
                <p>教你拍，一学就会的新手指南</p>
            </div>
            <div class="swiper-slide carousel">
                <span>热</span>
                <p>优质房产超值拍</p>
            </div>
        </div>
    </div>
</div>
<!--轮播图-->
<div class="wheel">
    <div class="pai">
        <img src="data:image/png;base64,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" alt="">
    </div>
        <div class="swiper-container1 swiper1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="iten in mdg">
                    <img :src="iten.src">
                </div>
                <div class="swiper-pagination"></div>
        </div>
    </div>
</div>
<!--图片列表-->
    <div class="imggun">
        <div class="oneimg">
            <ul>
                <li v-for="iten in dun"><img :src="iten.src" alt=""></li>
            </ul>
        </div>
        <ul class="twoimg">
            <li v-for="iten in jun"><img :src="iten.src" alt=""></li>
        </ul>
    </div>
<!--序列-->
<div class="xuli">
    <div class="sabox">
        <img src="data:image/png;base64,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" alt="">
        <p>更多></p>
    </div>
    <ul class="guntun">
        <li v-for="iten in gun"><b>{{iten.cont}}</b><img :src="iten.src" alt=""></li>
    </ul>
</div>
<!--全部商品-->
<div class="dungun">
    <div class="qun">
      <router-link to="/o"> <p>开拍专场</p></router-link>
      <router-link to="/p"><p>专场预告</p></router-link>
    </div>
    <div class="quan">
        <ul>
            <li v-for="iten in dunr">{{iten.cont}}</li>
        </ul>
    </div>
  <jdautionone></jdautionone>\
  <router-view></router-view>
</div>
</div>
</template>

<script>
import Swiper from 'swiper'
  import jdautionone from "./jdautionone";
export default {
    components:{
      jdautionone
    },
    mounted(){
       var mySwiper = new Swiper('.swiper-container',{
        loop : true,
            autoplay:true,
            direction : 'vertical',
        },


    )


    var mySwiper = new Swiper ('.swiper-container1', {
        direction: 'horizontal', // 垂直切换选项
        slidesPerView : 1.1,
        autoplay: true,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

    })
    },
  data(){
    return{
      msg:[
        {src:'https://img12.360buyimg.com/popactivity/jfs/t23167/222/2532735696/17018/8d5dae51/5b83543aNda85e617.png',cont:'司法拍卖'},
        {src:'https://img12.360buyimg.com/popactivity/jfs/t24409/198/2485976185/10804/16ddc380/5b83543dNaf86c7d5.png',cont:'司法拍卖'},
        {src:'https://img13.360buyimg.com/popactivity/jfs/t24415/141/2502783178/10024/f72c823d/5b835440Nb83bebf5.png',cont:'资产拍卖'},
        {src:'https://img10.360buyimg.com/popactivity/jfs/t27484/314/59165510/10779/466ceae5/5b835443Nba5371e3.png',cont:'破产拍卖'},
        {src:'https://img12.360buyimg.com/popactivity/jfs/t24718/317/968944367/9817/8f6f0609/5b83544fNf6e55b5f.png',cont:'全民抢拍'},
        {src:'https://img13.360buyimg.com/popactivity/jfs/t26926/267/1760942928/9276/36f4c1e8/5bebee38Nc4c6e524.png',cont:'汽车'},
        {src:'https://img13.360buyimg.com/popactivity/jfs/t25333/56/2609028253/7236/c838c817/5bebee3fNea5528b2.png',cont:'限时拍'},
        {src:'https://img13.360buyimg.com/popactivity/jfs/t1/16231/37/10599/6177/5c878636Efe12a640/7fa92a714fef5e63.png',cont:'降价拍'},
        {src:'https://img12.360buyimg.com/popactivity/jfs/t1/30161/35/776/6395/5c406692E61be411b/ec547670ace3d9dc.png',cont:'趣收藏'},
        {src:'https://img13.360buyimg.com/popactivity/jfs/t28648/342/241881279/10626/d9f2d63c/5bebee56N16e84ac5.png',cont:'全球拍'},
      ],
      mag:[
        {cont:'机构鉴定'},
        {cont:'严选品质'},
        {cont:'专业服务'},
      ],
       mdg:[
         {src:"https://img13.360buyimg.com/popactivity/s617x300_jfs/t1/10254/8/13217/52155/5c7f676dEb39570ff/c3fab489239af5ce.jpg!cc_617x300!q70"},
         {src:"https://img11.360buyimg.com/popactivity/s617x300_jfs/t1/24674/20/13612/127379/5ca16615Eb97ff177/89ff64c0f4f78df0.jpg!cc_617x300!q70"},
         {src:"https://img11.360buyimg.com/popactivity/s617x300_jfs/t1/17987/22/12804/103152/5c9add36E673d6e6c/696a6168f6f9421f.jpg!cc_617x300!q70"},
       ],
      dun:[
        {src:"https://img13.360buyimg.com/popactivity/s472x220_jfs/t19183/355/965558697/62001/80be636e/5ab463b8N9d21b8bd.jpg!cc_472x220"},
        {src:"https://img13.360buyimg.com/popactivity/s236x220_jfs/t25252/329/1770785959/32314/a5b09d66/5bbc09ebN47dd9f6a.jpg!cc_236x220"}
      ],
      jun:[
        {src:"https://img11.360buyimg.com/popactivity/s236x220_jfs/t1/22858/30/12799/84987/5c9b281dEc3c7af39/99d064e1d662351f.png!cc_236x220"},
        {src:"https://img11.360buyimg.com/popactivity/s236x220_jfs/t1/26213/38/6355/27011/5c4fc0f4Efc077a26/515e2946af60c9d7.jpg!cc_236x220"},
        {src:"https://img13.360buyimg.com/popactivity/s236x220_jfs/t1/22098/27/11503/29140/5c90847cEb83f5928/7e408d6f14ed7459.jpg!cc_236x220"},
        {src:"https://img14.360buyimg.com/popactivity/s236x220_jfs/t1/11898/22/13589/23898/5c99d0eaEffe74dc7/28a6515e68bf8448.jpg!cc_236x220"},
        {src:"https://img14.360buyimg.com/popactivity/s236x220_jfs/t1/25561/15/11703/24518/5c93389eEe3a5f6fc/a3909582c2a42a5f.jpg!cc_236x220"},
        {src:"https://img11.360buyimg.com/popactivity/s236x220_jfs/t1/30556/16/7839/27953/5c9a0b37E8ce59921/c2acc54463f14d4a.jpg!cc_236x220"},
      ],
      gun:[
        {cont:'翡翠',src:"https://img12.360buyimg.com/popactivity/s130x130_jfs/t18634/136/1461219297/6391/e2dbcbfb/5ac9cc7dNa1d1964e.jpg"},
        {cont:'腕表',src:"https://img12.360buyimg.com/popactivity/s130x130_jfs/t9439/68/1367716076/9061/eab9d6d0/59b88a6fN7952f2f6.jpg"},
        {cont:'国画书法',src:"https://img10.360buyimg.com/popactivity/s130x130_jfs/t12616/325/485782768/45465/aced47d0/5a0cdca3Nfee470c3.jpg"},
        {cont:'茶酒',src:"https://img11.360buyimg.com/popactivity/s130x130_jfs/t9112/257/1360647240/14670/4441d9b7/59b890b9Ned1dd9e9.jpg"},
        {cont:'和田玉',src:"https://img13.360buyimg.com/popactivity/s130x130_jfs/t9103/185/1340156017/34394/b72bd153/59b7cec4Nc8ff37b9.jpg"},
        {cont:'名包',src:"https://img13.360buyimg.com/popactivity/s130x130_jfs/t7465/333/3003866280/10130/2a896898/59b890e6N27ffe381.jpg"},
        {cont:'文玩收藏',src:"https://img12.360buyimg.com/popactivity/s130x130_jfs/t14422/210/2029187414/24706/92da0de0/5a683c6dN9e1165dd.jpg"},
        {cont:'紫砂',src:"https://img14.360buyimg.com/popactivity/s130x130_jfs/t17278/298/781082665/13146/50dd9b0a/5aa78f71N53af5b09.jpg"},
        {cont:'工艺品',src:"https://img13.360buyimg.com/popactivity/s130x130_jfs/t17545/319/472216741/18990/868e04a6/5a7ecf36N1bb807f6.jpg"},
        {cont:'鬼市寻宝',src:"https://img10.360buyimg.com/popactivity/s130x130_jfs/t1/19900/16/13191/39945/5c9de254E3323138b/19c41442f12b6b5d.jpg"},
        {cont:'琥珀',src:"https://img10.360buyimg.com/popactivity/s130x130_jfs/t19429/100/1436994540/16215/ed2a991f/5ac9cc4fN063d1c39.png"},
        {cont:'陶瓷',src:"https://img14.360buyimg.com/popactivity/s130x130_jfs/t18658/16/770109034/30672/dc39340b/5aa78b19N94b71b1e.jpg"},
      ],
      dunr:[
        {cont:'全部(74)'},
        {cont:'珠宝玉器(18)'},
        {cont:'文玩收藏(7)'},
        {cont:'紫砂陶瓷(10)'},
        {cont:'茶酒滋补(10)'},
        {cont:'艺术品(12)'},
        {cont:'工艺品(5)'},
        {cont:'奢饰品(5)'},
        {cont:'机动车(2)'},
        {cont:'特色(1)'},
      ]
    }
  }
}


</script>

<style scoped>
  .gunoun{
    height: 100%;
    flex: 1;
    overflow-y: auto;
  }
  /*分类*/
  .classify{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .11rem .0rem;
  }
  .ass{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ass b{
    font-size: .11rem;
    color: #5f5f5f;
    font-weight: 100;
  }
  .sify{
    font-size: .18rem;
    color: #5f5f5f;
  }
  .inbox{
    width: 3.2rem;
    height: .3rem;
    background: #fff;
    border-radius: .15rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .sou{
    font-size: .18rem;
    color: #5f5f5f;
    margin-left: .08rem;
  }
  .inbox input{
    width: 2.75rem;
    height: .3rem;
    background: white;
    font-size: .14rem;
    margin-left: .05rem;
  }
  .inbox input::-webkit-input-placeholder {
    color: #b0acac;
    font-size:.1rem;
  }
  /*导航*/
  .navbox{
    width: 100%;
    background: #f9fafb;
    padding: .18rem .0rem;
  }
  .navbox ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
  .navbox ul li{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .18rem;
  }
  .navbox img{
    width: .50rem;
    height: .50rem;
  }
  .navbox b{
    margin-top: .08rem;
    font-weight: 100;
    font-size: .11rem;
    color: #000;
  }
  /*对号*/
  .dui{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .07rem .11rem;
    background: #f9fafb;
    border-top: 1px solid #f3f4f4;
  }
  .dui span{
    display: flex;
    align-items: center;
  }
  .hao{
    font-size: .13rem;
    color: #bbbbbb;
  }
  .dui b{
    font-size: .13rem;
    color: #bbbbbb;
    font-weight: 100;
  }
  /*小轮播*/
  .headline{
    width: 3.55rem;
    height: .30rem;
    border-radius: 1.1rem;
    display: flex;
    align-items: center;
    margin: .1rem auto;
    overflow: hidden;
    background: #f9fafb;
  }
  .headline>.head>span{
    font-size: .11rem;
    color: #333333;
    margin-left: .08rem;
  }
  .headline>.head>span>b{
    font-weight: 100;
    background: #b92c23;
    border-radius: .05rem;
    color: white;
    font-size: .11rem;
  }
  .car{
    width: 2.8rem;
    height: .18rem;
  }
  .carousel{
    display: flex;
  }
  .carousel span{
    font-size: .11rem;
    color: #ba2e25;
    margin: .0rem .08rem .0rem .1rem;
  }
  .carousel p{
    font-size: .11rem;
    color: #333333;

  }
  /*轮播图*/
  .wheel{
    width: 100%;
    margin-top: .11rem;
    background: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: .2rem;
    overflow-x: hidden;
  }
  .pai{
    margin: .14rem .0rem .08rem .0rem;
  }
  .pai img{
    width: 1.03rem;
    height: .23rem;
  }
  .wunr{
    width: 100%;
    height: 1.5rem;
  }
  .tunr{
    width: 100%;
  }
  .tunr img{
    width: 3.2rem;
    height: 1.5rem;
  }
  .swiper1{
    width: 100%;
    height: 1.5rem;
  }
  .swiper1 img{
    width: 3.2rem;
    height: 1.5rem;
  }
  /*图片列表*/
  .imggun{
    width: 100%;
    padding: .08rem .05rem;
    background: white;
  }
  .oneimg{
    width: 100%;
  }
  .oneimg ul{
    display: flex;
    width: 100%;
  }
  .oneimg ul li:nth-child(1){
    width: 66.2%;
    height: 1.09rem;
    border: 0.005rem solid #f8f3f2;
  }
  .oneimg ul li:nth-child(2){
    width:33%;
    height: 1.09rem;
  }
  .imggun img{
    width: 100%;
    height: 100%;
  }
  .twoimg{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
  .twoimg li{
    width: 33%;
    height: 1.09rem;
    border: 0.005rem solid #f8f3f2;
  }
  .twoimg img{
    width: 100%;
    height: 100%;
  }
  /*序列*/
  .xuli {
    width: 100%;
    background: white;
    margin-top: .08rem;
  }
  .xuli .guntun{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
  .guntun li{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 1.09rem;
    border: .002rem solid #ebebeb;
  }
  .guntun b{
    font-weight: 100;
    color: #333333;
    font-size: .12rem;
    padding-top: .08rem;
  }
  .guntun img{
    width: .65rem;
    height: .65rem;
  }
  .sabox{
    text-align: center;
    padding: .12rem .0rem;
  }
  .sabox img{
    display: inline-block;
    width: 1.03rem;
    height: .23rem;
    margin-left: .3rem;
  }
  .sabox p{
    float: right;
    font-size: .12rem;
    color: #606060;
    margin-right: .1rem;
    /*margin-left: .5rem;*/
  }
  /*全部商品*/
  .dungun{
    width: 100%;
    margin-top: .08rem;
    background: white;
    padding-bottom: .1rem;
  }
  .qun{
    display: flex;
    width: 100%;
  }
  .qun p{
    width: 50%;
    color: #433e33;
    display: table-cell;
    font-size: .14rem;
    padding: .16rem .63rem;
  }
  .qun p:hover{
    color: #cc2729;
    border-bottom: 2px solid #cc2729;
  }
  .quan{
    width: 100%;
  }
  .quan ul{
    display: flex;

    flex-wrap: nowrap;
    flex-shrink: 0;
    overflow-y:hidden;
    overflow-x:auto;
    white-space: nowrap;
    padding: .1rem .0rem .1rem .1rem;
  }
  .quan ul li{
    font-size: .1rem;
    color: #443f34;
    display: inline-table;
    vertical-align: top;
    margin-left: .1rem;
  }
  .quan ul li:hover{
    border: 1px solid #b92c23;
    color: #b92c23;
    border-radius: .05rem;
  }
  .wunbox{
    width: 100%;
  }
  .srun{
    display: flex;
    flex-direction: column;
  }
  .srun img{
    width: 100%;
    height: 1.52rem;
  }
  .srun .funtun{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .08rem .0rem;
    background: #FFF;
  }
  .funtun p{
    font-size: .17rem;
    color: #433e33;
    margin-left: .1rem;
  }
  .funtun b{
    font-weight: 100;
    color: #524e44;
    font-size: .1rem;
    margin-right: .1rem;
  }
  .yunli{
    width: 100%;
    margin: .08rem .0rem;
  }
  .yunli img {
    width: 100%;
    height: 1.05rem;
  }
</style>
