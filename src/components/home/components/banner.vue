<template>
  <div id="banner">
    <div class="swiper-container" ref="swiperWrapper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
          <img :src="item">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      imgs: [
        "http://image.geekmaker.com/FiD6viHH-OE1gh7mkA5CxikY6jAQ",
        "http://image.geekmaker.com/FpvLTQRNbJ3mJiZvAl8fjK3LT2pY",
        "http://image.geekmaker.com/Fq8G__3tOVZsFBV4NHhPwjPN2Mhp",
        "http://image.geekmaker.com/FgPZNuJtOrLJDiq75_ZycUfFkh7_"
      ]
    };
  },
  mounted() {
    new Swiper(this.$refs.swiperWrapper, {
      autoplay: true,
      loop: true,
      pagination:{
        el:'.swiper-pagination'
      }
    });
  }
};
</script>


<style >
#banner {
  margin-top: 0.89rem;
}
.swiper-container {
  width: 6.92rem;
  height: 3.7rem;
}
</style>