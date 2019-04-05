<template>
  <!--列表-->
  <div class="lastbox">
    <ul class="oneul">
      <li><img src="https://img30.360buyimg.com/popactivity/jfs/t20614/5/457717155/12888/cac675ae/5b0e43a8N832ce20a.jpg" alt=""></li>
      <li><img src="https://img30.360buyimg.com/popactivity/jfs/t21760/125/462053018/13902/6710787e/5b0e3653N91c4aa02.jpg" alt=""></li>
    </ul>
    <div class="runbox">
      <ul class="twoul">
        <li><img src="https://img30.360buyimg.com/popactivity/jfs/t18634/100/2646532064/18011/30d007f4/5b014bc9N3f102bf6.jpg" alt=""></li>
      </ul>
      <ul class="sesul">
        <li><img src="https://img30.360buyimg.com/popactivity/jfs/t18211/99/2579015079/10808/ae4643b2/5b014befNf451ae50.jpg" alt=""></li>
        <li><img src="https://img30.360buyimg.com/popactivity/jfs/t16831/260/2630271705/10109/764720a1/5b014c16N5f38b056.jpg" alt=""></li>
        <li><img src="https://img30.360buyimg.com/popactivity/jfs/t22216/234/360034608/11279/10f9178f/5b0bae8eN2e044a28.jpg" alt=""></li>
        <li><img src="https://img30.360buyimg.com/popactivity/jfs/t21514/154/472941472/7993/d6e9469e/5b0e8c22N32f82bb3.jpg" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  /*列表*/
  .lastbox{
    width: 100%;
    background: #FFFFFF;
    margin-top: .08rem;
  }
  .lastbox img{
    width: 100%;
  }
  .oneul{
    width: 100%;
    display: flex;
  }
  .oneul li:nth-child(1){
    width: 65%;
    height: 1.09rem;
    border: 2px solid #f3f4f6;
  }
  .oneul li:nth-child(2){
    width: 35%;
    height: 1.09rem;
    border: 2px solid #f3f4f6;
  }
  .runbox{
    width: 100%;
    display: flex;
  }
  .twoul{
    width: 30%;
  }
  .twoul li{
    width: 100%;
    height: 2.18rem;
    border: 2px solid #f3f4f6;
  }
  .sesul{
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
  .sesul li{
    width: 50%;
    height: 1.09rem;
    border: 2px solid #f3f4f6;
  }

</style>
