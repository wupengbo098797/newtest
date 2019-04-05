<template>
  <!--导航-->
  <ul class="onseul">
    <li><img src="https://img13.360buyimg.com/paimai/s92x92_jfs/t7558/111/4048551584/6439/481bf393/59f1d256N859abf20.png!cc_92x92" alt=""><b>债权</b></li>
    <li><img src="https://img13.360buyimg.com/paimai/s92x92_jfs/t7240/233/3646679091/4096/61030167/59f1d2b2Na941b9e4.png!cc_92x92" alt=""><b>房产</b></li>
    <li><img src="https://img14.360buyimg.com/paimai/s92x92_jfs/t10423/208/2214701068/4036/304d59c0/59f1ebf2Na197cf96.png!cc_92x92" alt=""><b>交通运输</b></li>
    <li><img src="https://img11.360buyimg.com/paimai/s92x92_jfs/t11056/211/499531174/5625/6202a4c2/59f1d2daNe2ffe0cd.png!cc_92x92" alt=""><b>机械设备</b></li>
    <li><img src="https://img12.360buyimg.com/paimai/s92x92_jfs/t11044/216/513611784/4441/5a7800bc/59f1d300Nd8cdc732.png!cc_92x92" alt=""><b>其他资产</b></li>
  </ul>
</template>

<script>
    export default {
        name: "jdProperty04"
    }
</script>

<style scoped>
  /*导航*/
  .onseul{
    background: white;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: .1rem .0rem;
  }
  .onseul li{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .onseul b{
    font-weight: 100;
    color: #433d33;
    font-size: .11rem;
    margin-top: .05rem;
  }
  .onseul li img{
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
  }
</style>
