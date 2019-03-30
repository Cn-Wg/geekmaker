<template>
    <div class="pic">
        <div  class="pic_box">
            <div class="pic_sm_box" v-for="(item,index) in pics" :key="index">
                <img :src="item.imgUrl">
                <div class="pic_font">
                    <p>{{item.name}}</p>
                    <p>{{item.mess}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
           pics:[
               {
                   imgUrl:"https://www.geekmaker.com/_nuxt/img/e19b9ef.png",
                   name:"机械键盘",
                   mess:"品牌.产量"
               },
               {
                   imgUrl:"https://www.geekmaker.com/_nuxt/img/96fa47b.png",
                   name:"键帽",
                   mess:"CNC.手工"
               },
               {
                   imgUrl:"https://www.geekmaker.com/_nuxt/img/0e3ef4d.png",
                   name:"配件",
                   mess:"轴体.数据线"
               },
               {
                   imgUrl:"https://www.geekmaker.com/_nuxt/img/02f0725.png",
                   name:"客制化",
                   mess:"个性.定制"
               },
           ] 
        }
    }
}
</script>

<style >
    .pic{
        width:100%;
        display:flex;
        justify-content: center;
        padding: .3rem;
    }
   .pic_box{
       width:6.9rem;
       height:3.54rem;
       display:flex;
       justify-content: space-around;
       flex-wrap: wrap;
   }
    .pic_sm_box{
        position:relative;
    }
    .pic_font{
        position:absolute;
        top: .2rem;
        left: 1.5rem;
        
    }
    .pic_font>p{
        padding: .1rem;
    }
    .pic_font>p:nth-of-type(1){
        font-size: .26rem;
        color:#2c2c2c;
        font-weight: bolder;
    }
    .pic_font>p:nth-of-type(2){
        font-size: .2rem;
        color:#2c2c2c;
    }
</style>

