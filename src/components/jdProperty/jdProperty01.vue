<template>
  <div class="sunaund">
    <jd-property02></jd-property02>
    <jd-property03></jd-property03>
    <jd-property04></jd-property04>
    <jd-property05></jd-property05>
    <jd-property06></jd-property06>
    <jd-property07></jd-property07>
  </div>
</template>

<script>
  import jdProperty02 from"./jdProperty02";
  import jdProperty03 from"./jdProperty03";
  import jdProperty04 from"./jdProperty04";
  import jdProperty05 from"./jdProperty05";
  import jdProperty06 from"./jdProperty06";
  import jdProperty07 from"./jdProperty07";


  export default {
        name: "jdProperty01.vue",
      components:{
        jdProperty02,
        jdProperty03,
        jdProperty04,
        jdProperty05,
        jdProperty06,
        jdProperty07
      }
    }
</script>

<style scoped>
.sunaund{
  height: 100%;
  flex: 1;
  overflow-y: auto;
}
</style>
