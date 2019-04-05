<template>
  <div class="FUNGYN">
    <div class="sunrune">
        <jd-mine02></jd-mine02>
        <jd-mine03></jd-mine03>
        <jd-mine04></jd-mine04>
      <jd-mine05></jd-mine05>
    </div>
     <jd-cature06></jd-cature06>
  </div>
</template>

<script>
    import jdMine02 from "../src/components/Mine/jdMine02";
    import jdMine03 from "../src/components/Mine/jdMine03";
    import jdMine04 from "../src/components/Mine/jdMine04";
    import jdMine05 from "../src/components/Mine/jdMine05";
    import  jdCature06 from"../src/components/jdCature/jdCature06"

    export default {
      components: {

          jdMine02,
        jdMine03,
        jdMine04,
        jdMine05,
        jdCature06
        }
    }
</script>

<style scoped>
.FUNGYN{
  height: 100%;
  display: flex;
  flex-direction: column;
}
  .sunrune{
    height: 100%;
    flex: 1;
    overflow-y: auto;
  }
</style>
