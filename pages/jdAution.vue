<template>
  <div id="index">
    <jd-cature01></jd-cature01>
   <AutionSection></AutionSection>
    <jd-cature06></jd-cature06>
  </div>
</template>

<script>
import jdCature01 from"../src/components/jdCature/jdCature01"
import AutionSection from"../src/components/jdAution/AutionSection"
import jdCature06 from"../src/components/jdCature/jdCature06"
export default {
  components:{
    jdCature01,
    AutionSection,
    jdCature06
  }
}
</script>

<style scoped>
  #index{
    height: 100%;
    display: flex;
    flex-direction: column;
  }

</style>
