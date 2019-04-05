<template>
  <!--轮播图-->
  <div class="swiper-container1 unt">
    <div class="swiper-wrapper">
      <div class="swiper-slide img1" v-for="iten in sunto">
        <img :src="iten.src" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    mounted(){
      var mySwiper = new Swiper ('.swiper-container1', {
        direction: 'horizontal', // 垂直切换选项
        autoplay: true,
        loop: true,
      })
    },

    data(){
      return{
        sunto:[
          {src:'https://img30.360buyimg.com/popactivity/jfs/t1/6983/36/6198/42945/5bdedcdaE21742dad/f7fd580faae319cf.jpg'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t1/1476/26/15576/37173/5bdedceeEf5965374/d39a9186eb1a810f.jpg'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t1/6300/36/5979/40828/5bdedcf6Eefb3115e/4e7c9080157a757d.jpg'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t1/9522/14/5702/42768/5bdedd00Ea7f01c74/67a8ea84ea4ebb6b.jpg'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t1/1570/19/15336/43974/5bdedd0cEd8f1f8be/bb0f979d30f24201.jpg'},
          {src:'https://img30.360buyimg.com/popactivity/jfs/t1/6983/36/6198/42945/5bdedcdaE21742dad/f7fd580faae319cf.jpg'}
        ]
      }
    }
  }
</script>

<style scoped>
  /*轮播图*/
  .unt{
    width: 100%;
    height: .9rem;
    margin: .08rem .0rem;
    overflow-x: hidden;
  }
  .unt .img1 img{
    width: 100%;
    height: .9rem;
  }
</style>
