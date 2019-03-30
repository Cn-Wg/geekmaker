<template>
  <div class='better'>
    <NavT :navs="navs"/>
    <div class="scroll">
      <div class="wrapper tabWrapper">
        <div class="content">
          <ul class="tabbar">
            <li v-for="(item,index) in scrolls" :key="index">
              <img :src="item.imgUrl">
              <span>{{item.name}}</span>
              <p>{{item.mess}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from "better-scroll";
import NavT from "./common/nav";
export default {
    components:{
        NavT,
    },
  data() {
    return {
      scrolls: [
        {
          imgUrl: "http://image.geekmaker.com/Fk4jm_Zi_Z0h4jpf8ayAaBMrCPMu?imageMogr2/auto-orient/thumbnail/480x380/size-limit/200k!",
          name: "XDA 哈密瓜 PBT 键帽",
          mess: "￥25"
        },
        {
          imgUrl: "http://image.geekmaker.com/FlATDIBBn_1-4MNG6DDD1saOBsVa?imageMogr2/auto-orient/thumbnail/480x380/size-limit/200k!",
          name: "SP DSA ICE CREAM冰淇淋 R2 Base团购",
          mess: "￥688"
        },
        {
          imgUrl: "http://image.geekmaker.com/ltJbUYZiqvEMrqZ7lZsNNS1wZahM?imageMogr2/auto-orient/thumbnail/480x380/size-limit/200k!",
          name: "JER Plant JER Mini 客制化套件",
          mess: "￥450"
        }
      ],
      navs:["|","限时团购","更多","&#xe656;"]
    };
  },
  mounted() {
    let scroll = new Scroll(".wrapper", {
      scrollX: true,
      click: true
    });
  }
};
</script>

<style  scoped>
.better{
    padding: .3rem 0;
}
.scroll {
  height: 4rem;
  width: 100%;
}
.scroll > .tabWrapper > .content > .tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
.scroll > .tabWrapper > .content {
  width: max-content;
}
.tabbar > li {
  padding: 0.2rem;
  position: relative;
}
.tabbar > li > img {
  width: 4.8rem;
  height: 3.7rem;
  opacity:0.8;
}
.tabbar > li > p {
  position: absolute;
  bottom: .5rem;
  color: red;
  width: 4.8rem;
  height: 0.3rem;
  padding: .2rem;
}
.tabbar > li > span {
  display: block;
  position: absolute;
  bottom: .8rem;
  width: 4.8rem;
  height: 0.3rem;
  color:#000;
  padding-left: .2rem;
}
</style>
