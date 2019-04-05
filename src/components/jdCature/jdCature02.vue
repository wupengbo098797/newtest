<template>
  <div class="bigbox">
    <!--搜索-->
    <div class="search">
      <input type="text" placeholder="搜索标的物名称/地理位置">
      <span class="iconfont sou">&#xe6fe;</span>
    </div>

    <!--导航-->
    <div class="nawbox">
      <ul class="ulbox">
        <li v-for="iton in tunyp"><img :src="iton.src" alt=""><b>{{iton.cont}}</b></li>
      </ul>
    </div>
    <!--公告-->
    <div class="notice">
      <div class="naw">
        <span>法院<b>公告</b>:</span>
      </div>
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide bun">
            <span class="iconfont xin">&#xe605;</span>
            <p>马上到了空间哦激怒IFhie分KDJ佛的jhhjdkfhiuhfdoh看法</p>
          </div>
          <div class="swiper-slide bun">
            <span class="iconfont xin">&#xe605;</span>
            <p>马上到了空间哦激怒IFhie分KDJ佛的jhhjdkfhiuhfdoh看法</p>
          </div>
          <div class="swiper-slide bun">
            <span class="iconfont xin">&#xe605;</span>
            <p>马上到了空间哦激怒IFhie分KDJ佛的jhhjdkfhiuhfdoh看法</p>
          </div>
        </div>
      </div>
      <div class="abox">
        <a href="####">更多></a>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    mounted(){
      var mySwiper = new Swiper('.swiper-container',{
          loop : true,
          autoplay:true,
          direction : 'vertical',
        }
      )

    },
    data(){
      return{
        tunyp:[
          {src:'https://img30.360buyimg.com/popactivity/jfs/t20041/9/889998865/4427/b7aa63a0/5b0e3d8eNf68e537a.jpg',cont:'机动车'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t22174/17/474976338/4964/780dbaf0/5b0e3d93Ne5be2293.jpg',cont:'住宅用房'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t19873/42/900093532/4969/a9ae8b17/5b0e3d9bN1413e029.jpg',cont:'商业用房'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t21424/284/439929151/5555/dcee32e0/5b0e3da3N5af7e221.jpg',cont:'股权'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t21760/172/449629015/4941/fd4904d6/5b0e3da7Nf45d8ed8.jpg',cont:'工业用房'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t21796/151/469008668/4800/4b5b86c3/5b0e3dacN1b2cb237.jpg',cont:'机械设备'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t20131/343/502762514/5964/96c9a42b/5b0e3db0N4857c58a.jpg',cont:'土地'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t20587/62/464682530/4996/98daa98b/5b0e3db4N24e4c9f5.jpg',cont:'债权'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t19810/112/907992733/5448/582f80a5/5b0e3dbaN468bac8c.jpg',cont:'其他用房'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t21727/175/483618250/4659/2d5b6a35/5b0e3dbeNb4012fbd.jpg',cont:'全部'},
        ]
      }
    }

  }
</script>

<style scoped>
  .bigbox{
    background: #fff;
    padding-top: .07rem;
  }
  /*搜索*/
  .search{
    width: 3.56rem;
    height: .34rem;
    background: #f0f2f5;
    border-radius: .05rem;
    margin: .07rem auto;
    display: flex;
    align-items: center;
  }
  .sou{
    font-size: .2rem;
    color: #f23030;
  }
  .search input{
    width: 85%;
    height: .3rem;
    background: #f0f2f5;
    font-size: .14rem;
    margin-left: .2rem;
  }
  .search input::-webkit-input-placeholder {
    color: #b0acac;
    font-size:.1rem;
  }
  /*导航*/
  .nawbox{
    margin-bottom: .17rem;
  }
  .nawbox .ulbox li img{
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
  }
  .nawbox{
    width: 100%;
  }
  .nawbox .ulbox{
    display: flex;
    justify-content: space-around;
    flex-shrink: 0;
    flex-wrap: wrap;
  }
  .nawbox .ulbox li{
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: .11rem;
  }
  .nawbox .ulbox li b{
    font-size: .12rem;
    color: #26252a;
    padding-top: .08rem;
  }
  /*公告*/
  .notice{
    width: 3.55rem;
    height: .35rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #cbcbcb;
    margin: 0 auto;
  }
  .naw{
    display: flex;
  }
  .naw span{
    font-size: .13rem;
    color: #232326;
    font-weight: 900;
  }
  .naw b{
    color: #f32f30;
    font-weight: 900;
    font-size: .13rem;
  }
  .bun{
    width: 2.2rem;
    display: flex;
    align-items: center;
    padding-right: .2rem;
  }
  .swiper1{
    overflow: hidden;
    width: 2.4rem;
    height: .35rem;
  }
  .swiper1 .xin{
    font-size: .1rem;
    color: #b92c23;
  }
  .swiper1 p{
    width: 1.5rem;
    font-size: .11rem;
    color: #232326;
    margin-left: .05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
  .abox a{
    font-size: .12rem;
    color:#232326;
    border-left: 1px solid #cbcbcb;
    padding-left: .15rem;
  }
</style>
