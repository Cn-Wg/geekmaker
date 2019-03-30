<template>
  <div class="nav">
    <div class="nav_box">
      <p class="p1">
        <span>{{navs[0]}}</span>
        <span>{{navs[1]}}</span>
      </p>
      <p class="p2">
        <span>{{navs[2]}}</span>
        <i class="iconfont" v-html="navs[3]"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navs: {
      type: Array
    }
  }
};
</script>

<style>
.nav {
  width: 100%;
}
.nav_box {
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: .2rem;
  color:#fff;
}
.nav_box>.p1>span:nth-of-type(1){
  color:khaki;
  font-weight: bolder;
  font-size: .3rem;
  padding-right: .2rem;
}
.nav_box>.p1>span:nth-of-type(2),.nav_box>.p2>span{
  font-size: .3rem;
  font-weight: bolder;
}
.nav_box>.p2>.iconfont{
  font-size: .4rem;
  font-weight: 200;

}
</style>