<template>
  <!--轮播图-->
  <div class="swiper-container1 unt">
    <div class="swiper-wrapper">
      <div class="swiper-slide img1">
        <img src="https://img11.360buyimg.com/paimai/s750x290_jfs/t1/297/25/12574/86553/5bd2f72cE37d1ee2f/699d9638d0af806c.jpg!cc_750x290!q70" alt="">
      </div>
      <div class="swiper-slide img1">
        <img src="https://img11.360buyimg.com/paimai/s750x290_jfs/t1/297/25/12574/86553/5bd2f72cE37d1ee2f/699d9638d0af806c.jpg!cc_750x290!q70" alt="">
      </div>
    </div>
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
    }
  }
</script>

<style scoped>
  /*轮播图*/
  .unt{
    width: 100%;
    height: 1.45rem;
    overflow-x: hidden;
  }
  .unt .img1 img{
    width: 100%;
    height: 1.45rem;
  }
</style>
