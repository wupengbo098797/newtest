<template>
  <div class="tunhung">
    <jd-cature01></jd-cature01>
    <div class="junhuni">
        <jd-cature02></jd-cature02>
        <jd-cature03></jd-cature03>
        <jd-cature04></jd-cature04>
        <jd-cature05></jd-cature05>
    </div>
     <jd-cature06></jd-cature06>
  </div>
</template>

<script>
  import jdCature01 from "../src/components/jdCature/jdCature01";
  import jdCature02 from "../src/components/jdCature/jdCature02";
  import jdCature03 from "../src/components/jdCature/jdCature03";
  import jdCature04 from "../src/components/jdCature/jdCature04";
  import jdCature05 from "../src/components/jdCature/jdCature05";
  import jdCature06 from "../src/components/jdCature/jdCature06"
  export default {
    components:{
      jdCature01,
      jdCature02,
      jdCature03,
      jdCature04,
      jdCature05,
      jdCature06
    }
  }
</script>

<style scoped>
  .tunhung{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .junhuni{
    height: 100%;
    flex: 1;
    overflow-y: auto;
  }
</style>
