<template>
    <div id="scroll">
      <div class="wrapper tabWrapper">
        <div class="content">
          <ul class="tabbar">
            <li v-for="(item,index) in sli" :key="index">
                <img :src="item.imgUrl" >
                <p>{{item.name}}</p>
                <span>{{item.mess}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
 data(){
   return{
         sli:[
         {
             imgUrl:"http://image.geekmaker.com/FoAJk3fgYi3dGftuPTPHSOb0Vuwb?imageMogr2/auto-orient/thumbnail/203x220/size-limit/200k!",
             name:"Royal Glam 木质 键盘外壳",
             mess:"￥640",
         },
           {
             imgUrl:"http://image.geekmaker.com/FhDpvCjDqttNvzkmGnTwbSK9pzYK?imageMogr2/auto-orient/thumbnail/203x220/size-limit/200k!",
             name:"GeekMaker Happy Pig`s New Year 猪年小猪套 键帽",
             mess:"￥55",
         },
           {
             imgUrl:"http://image.geekmaker.com/Flb_jKagLXhGKYb7-oJTvsAdzZum?imageMogr2/auto-orient/thumbnail/203x220/size-limit/200k!",
             name:"GeekMaker 网络流行语 我好了 我酸了 我可以 键帽",
             mess:"￥35",
         }
     ]
   }
 },
  mounted() {
    let scroll = new BScroll(".wrapper", {
      scrollX: true,
      click: true
    });
  }
};
</script>

<style  scoped>
#scroll {
  height: 2.5rem;
  width:100%;
  margin-bottom: 2rem;
}
#scroll > .tabWrapper > .content > .tabbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
#scroll > .tabWrapper > .content {
  width: max-content;
}
.tabbar>li{
    width:2.18rem;
    height:2.2rem;
    background:#fff;
    position: relative;
    margin: .3rem .12rem;
}
.tabbar > li>img{
   width:2.18rem;
   border-bottom:1px solid #ccc;
}
.tabbar>li>p{
    position:absolute;
    bottom: .4rem;
    overflow:hidden;
    color:#000;
    width:2.2rem;
    height: .3rem;
    padding: .3rem;
}
.tabbar>li>span{
    display:block;
    position:absolute;
    bottom: .07rem;
    width: .6rem;
    height: .3rem;
    color:red;
     padding: .3rem;
}
</style>