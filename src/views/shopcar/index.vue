<template>
  <div id="shopcar">
    <!-- 头部板块 -->
    <header>
    <!-- 返回按钮 -->
        <span class="back"><</span>
        <span>购物车</span>
    </header>
    <!-- 内容区 -->
    <section>
      <article>
      <div class="title">
        <i></i>
      <span>【团购】</span>
    </div>

    <div class="show" v-for="(item,index) in goods" :key="index">
      <div class="show-left">
        <!-- 选中按钮 -->
        <!-- <i class="iconfont icon-duigou"></i> -->
        <input type="checkbox" :checked="item.flag" @change="handleGoodsItemCheckBox(index)">
      </div>
         <!-- 商品图片 -->
      <div class="img-l"><img :src="item.img" alt=""></div>
      <div class="show-right">
        <!-- 商品名称 -->
        <div class="h1">{{item.goodsName}}</div>
        <!-- 商品 型号 -->
        <div class="h2">{{item.model}}</div>
        <!-- 商品价格 -->
        <div class="h3">{{item.price | toPrice}}</div>
        <!-- 删除按钮 -->
        <div class="h4" @click="handleDel(index)">删除</div>
        <!-- 商品加减数量 -->
        <div class="h5">
          <span @click="handleReduce(index)">-</span>
          <input type="text" :value="item.num">
          <span @click="handleAdd(index)">+</span>
        </div>
      </div>
      </div>
      </article>
    </section>
    <footer>
      <div class="left">
        <!-- <i class="iconfont icon-duigou"></i> -->
        <input type="checkbox" :checked="this.$store.state.goods.allSelected" @change="handleToglleAll">
        <span>全选</span>
      </div>
      <div class="cen">
        <b>合计：</b>
        <em>{{goodsCount | toPrice}}</em>
      </div>
      <div class="right">
        <p>下单</p>
      </div>
    </footer>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name:"shopcar",
  data(){
    return {
    }
  },
  filters:{
    toPrice(val){
      return "￥"+val
    }
  },
  computed: {
    ...Vuex.mapState({
      goods:state=>state.goods.goods
    }),
    ...Vuex.mapGetters({
        goodsCount:"goods/goodsCount"
    })
  },
   created () {
    this.$store.dispatch("goods/getGoods");
  },
  methods: {
   ...Vuex.mapMutations({
      handleReduce:"goods/handleReduce",
      handleAdd:"goods/handleAdd",
      handleGoodsItemCheckBox:"goods/handleGoodsItemCheckBox",
   }),
  ...Vuex.mapMutations({
      handleToglleAll:"goods/handleToglleAll"
    }),
  ...Vuex.mapActions({
     handleDel:"goods/handleDel"
  })
  },
  
};
</script>

<style>
#shopcar{
  flex:1;
  overflow:auto
}
#shopcar>header{
    width:100%;
    height: 0.86rem;
    line-height:0.86rem;
    box-shadow: 0 1px 0.075rem rgba(0,0,0,.2);
    color: #2c2c2c;
    font-size: 0.3rem;
    text-align: center;
    background-color: #fff;
    z-index: 10;
    position:fixed;
    font-weight:700;
}
header>.back{
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    left: .36rem;
}
section{
  flex: 1;
  overflow: auto;
 
}
article{
  width:100%;
  min-height:2.5rem;
  margin-top:1.2rem;
  margin-bottom:0.35rem;
  background:#fff;
}
.title{
  height:0.54rem;
  width:100%;
  font-size:0.26rem;
  position:relative;
}
.title>span{
    width:100%;
    line-height:0.6rem;
    padding-left:0.3rem;
    padding-right: .3rem;
    text-align: center;
    background-color: #fff;
    position: relative;
    color: #2c2c2c;
    font-weight: 700;
    z-index: 1;
}
.title>i{
    position: absolute;
    background-color: #bfbfbf;
    height: .03rem;
    width: 100%;
    left: 0;
    top:50%;
}
.show{
  height:2.1rem;
  padding:0.25rem;
  display: flex;
  align-items: center;
}
.show-left{
  height:1.6rem;
  width:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.show-left>input{
  color:#e6e6e6;
  font-size:0.35rem;
  height:0.35rem;
  width:0.35rem;
}
.show>.img-l{
  width:1.6rem;
  height:1.6rem;
  background-image: url(http://image.geekmaker.com/lgx1HPsKwp72DhV-h6KnkVQm5tE0?imageMogr2/auto-orient/thumbnail/160x160/size-limit/30k!);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%
}
.img-l>img{
  width:100%;
  height:100%;
}
.show-right{
  width:4.1rem;
  height:1.6rem;
  margin:0 0.1rem;
  position:relative;
  padding-left:0.1rem;
}
.h1{
  height:0.4rem;
  font-size: 0.26rem;
  color:#2c2c2c;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.h2{
  height:0.38rem;
  font-size:0.24rem;
  color:#707070;
}
.h3{
  position:absolute;
  bottom:0;
  font-size:0.3rem;
  font-weight:700
}
.h4{
  color:#000;
  position: absolute;
  right:0;
  top:0;
  font-size: 0.24rem;
  font-weight:200;
}
.h5{
  display: flex;
  height:0.5rem;
  width:1.6rem;
  border:1px solid #e6e6e6;
  position: absolute;
  right:0;
  bottom:0;
}
.h5>span{
  width:0.44rem;
  height:0.46rem;
  text-align: center;
  line-height:0.46rem;
}
.h5>input{
  height:0.46rem;
  width:0.68rem;
  text-align: center;
  font-size: 0.3rem;
  background:#fff;
  /* border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6; */
  border:1px solid #e6e6e6;
}
footer{
  height:1rem;
  width:100%;
  background:#fff;
  position:fixed;
  bottom:0.98rem;
  display: flex;
}
.left{
  width:1.6rem;
  height:1rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  justify-content: flex-end;
}
.left>span{
  font-size:0.26rem;
  margin-left:0.1rem;
}
.left>input{
  color:#e6e6e6;
  font-size:0.35rem;
  width:0.35rem;
  height:0.35rem;
}
.cen{
  width:3.7rem;
  height:1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom:0.2rem;
}
.cen>em{
  color:#f45957;
  font-weight:700;
  font-size:0.26rem;
  margin-right:0.3rem;
}
.cen>b{
  font-size:0.26rem;
  font-weight:700;
  margin-right:0.1rem;
}
.right{
  width:2.2rem;
  height:1rem;
  background:#ffd101;
  text-align: center;
  line-height:1rem;
  color:#2c2c2c;
  font-weight:700;
}
</style>