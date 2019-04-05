<template>
  <!--轮播图-->
  <div class="swiper-container1 unt">
    <div class="swiper-wrapper">
      <div class="swiper-slide img1">
        <img src="https://img30.360buyimg.com/popactivity/jfs/t1/15139/11/12917/48731/5c9c2a9bEf9639b1d/ea1a7769fd9943e8.jpg" alt="">
      </div>
      <div class="swiper-slide img1">
        <img src="https://img30.360buyimg.com/popactivity/jfs/t1/23330/36/11760/89378/5c947b48Eb8daad59/6c3a571c51d72407.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    mounted(){
      var mySwiper = new Swiper('.swiper-container1', {
        loop:true,
        autoplay: true,

      })

    }
  }
</script>

<style scoped>
  /*轮播图*/
  .unt{
    width: 100%;
    height: 1.6rem;
    overflow-x: hidden;
  }
  .unt .img1 img{
    width: 100%;
    height: 1.6rem;
  }
</style>
