<template>
  <div class="adt">
    <NavT :navs="navs"/>
    <img
      src="http://image.geekmaker.com/Fr0_rgP5Qk3SWWUEutLz54sRxa1S?imageMogr2/auto-orient/thumbnail/690x281/size-limit/600k!"
    >
  </div>
</template>

<script>
import NavT from "./common/nav";
export default {
  components: {
    NavT
  },
  data() {
    return {
      navs: ["|", "极制精选", "更多", "&#xe656;"]
    };
  }
};
</script>


<style >
.adt>img{
    margin: 0 auto;
}
</style>