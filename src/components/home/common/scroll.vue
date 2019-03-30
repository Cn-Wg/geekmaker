<template>
    <div id="scroll">
      <div class="wrapper tabWrapper">
        <div class="content">
          <ul class="tabbar">
            <li v-for="(item,index) in scroll" :key="index">
                <img :src="item.imgUrl" >
                <span>{{item.name}}</span>
                <p>{{item.mess}}</p>
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
         scroll:[
             {
                 imgUrl:"http://image.geekmaker.com/Fg31H1PrGvZCprNN2wgpG-jbd3AJ?imageMogr2/auto-orient/thumbnail/200x200/size-limit/200k!",
                 name:"95新",
                 mess:"【95新】Ganss 双色 104键帽"
             },
             {
                 imgUrl:"http://image.geekmaker.com/FhpZcFD9qpygTm5Rj7sDIt6rdecZ?imageMogr2/auto-orient/thumbnail/200x200/size-limit/200k!",
                 name:"99新",
                 mess:"【99新】Giant Pineapple大菠萝 麻将 键帽"
             },
             {
                 imgUrl:"http://image.geekmaker.com/FtR7Q09w6l5oQhSjBAPt7kMCdhHp?imageMogr2/auto-orient/thumbnail/200x200/size-limit/200k!",
                 name:"s",
                 mess:"【S】ZOMO 空投箱 马里奥帽子 透明猫爪 键帽"
             },
             {
                 imgUrl:"http://image.geekmaker.com/FmKbWT7Yc3AI7D2WTFyWMFQ6YUIS?imageMogr2/auto-orient/thumbnail/200x200/size-limit/200k!",
                 name:"D",
                 mess:"【D】阿米洛 VA87MN 茶轴 机械键盘"
             },
             {
                 imgUrl:"http://image.geekmaker.com/ltP_CPyi5PwQW4fo3FKT5LoPgYdD?imageMogr2/auto-orient/thumbnail/200x200/size-limit/200k!",
                 name:"99新",
                 mess:"【99新】HolyOOPS EVA 使徒 初号机 暴走 枫叶 键帽"
             },
             {
                 imgUrl:"http://image.geekmaker.com/FtbOUdqo3151-ldsCUyRB4jiWHOA?imageMogr2/auto-orient/thumbnail/200x200/size-limit/200k!",
                 name:"B",
                 mess:"【B】Matrix 1.2 PCB 内胆"
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
  height: 2rem;
  width:100%
}
#scroll > .tabWrapper > .content > .tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
#scroll > .tabWrapper > .content {
  width: max-content;
}
.tabbar>li{
  padding: .15rem;

}
.tabbar>li>img{
    width:2rem;
    height:2rem;
}
.tabbar>li>p{
    position:absolute;
    bottom: .12rem;
    overflow:hidden;
    color:#fff;
    width:2rem;
    height: .3rem;
    
}
.tabbar>li>span{
    display:block;
    position:absolute;
    bottom: 1.8rem;
    width: .6rem;
    height: .3rem;
    background:khaki;
    border-radius: .1rem;
    text-align:center;

}
</style>
