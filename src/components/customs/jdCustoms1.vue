<template>
  <div class="dungunj">
    <jd-customs2></jd-customs2>
    <jd-customs3></jd-customs3>
    <jd-customs4></jd-customs4>
    <jd-customs5></jd-customs5>
    <jd-customs6></jd-customs6>
    <jd-customs7></jd-customs7>
  </div>
</template>

<script>
  import jdCustoms2 from'./jdCustoms2';
  import jdCustoms3 from "./jdCustoms3";
  import jdCustoms4 from "./jdCustoms4";
  import jdCustoms5 from "./jdCustoms5";
  import jdCustoms6 from'./jdCustoms6';
  import jdCustoms7 from "./jdCustoms7";
    export default {
        name: "jdCustoms1",
      components:{
        jdCustoms2,
        jdCustoms3,
        jdCustoms4,
        jdCustoms5,
        jdCustoms6,
        jdCustoms7,
      }
    }
</script>

<style scoped>
.dungunj{
  height: 100%;
  flex: 1;
  overflow-y: auto;
}
</style>
