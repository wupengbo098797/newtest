<template>
  <div class="fungtn">
    <jd-cature01></jd-cature01>
    <jd-property01></jd-property01>
    <jd-cature06></jd-cature06>
  </div>
</template>

<script>
  import jdCature01 from "../src/components/jdCature/jdCature01";
  import  jdProperty01 from"../src/components/jdProperty/jdProperty01"
  import  jdCature06 from"../src/components/jdCature/jdCature06"


  export default {
    components:{
      jdCature01,
      jdProperty01,
      jdCature06

    }
  }
</script>

<style scoped>
  .fungtn{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
