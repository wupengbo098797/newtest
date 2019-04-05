<template>
  <div class="fungtn">
    <jd-cature01></jd-cature01>
    <jdCustoms1></jdCustoms1>
    <jd-cature06></jd-cature06>
  </div>
</template>

<script>
  import jdCature01 from "../src/components/jdCature/jdCature01";
  import  jdCustoms1 from"../src/components/customs/jdCustoms1";
  import  jdCature06 from"../src/components/jdCature/jdCature06"
  export default {
    components:{
      jdCature01,
      jdCustoms1,
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
