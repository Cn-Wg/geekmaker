<template>
  <div class="home">
    <HeaderCom/>
    <BannerCom/>
    <AdCom/>
    <PicCom/>
    <NavCom :navs="navs"/>
    <ScrollCom/>
    <BetterCom/>
    <AdTCom/>
    <SlideCom/>
  </div>
</template>
<script>
import HeaderCom from "./components/header";
import BannerCom from "./components/banner";
import AdCom from "./components/ad";
import PicCom from "./components/pic";
import NavCom from "./components/common/nav";
import ScrollCom from "./common/scroll";
import BetterCom from "./components/better";
import AdTCom from "./components/adt";
import SlideCom from "./components/slide";
export default {
   
    components:{
        HeaderCom,
        BannerCom,
        AdCom,
        PicCom,
        ScrollCom,
        NavCom,
        BetterCom,
        AdTCom,
        SlideCom,
    },
    data(){
        return{
            navs:["|","极市","更多","&#xe656;"],
            icon:"&#xe67b;",

        }
    }

}
</script>

<style >
.home {
  width: 100%;
  height: 100%;
  background: url('https://www.geekmaker.com/_nuxt/img/eb810a8.png') no-repeat #4a4a4a;
}
</style>