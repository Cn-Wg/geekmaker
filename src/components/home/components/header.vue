<template>
  <div class="header ">
    <i class="iconfont" v-html="message[0]"></i>
    <div class="midd">
      {{message[1]}}
      <i class="iconfont" v-html="message[2]"></i>
    </div>
    <p>{{message[3]}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ["&#xe790;", "输入搜索内容", "&#xe607;", "登录"]
    };
  }
};
</script>

<style >
.header {
  width: 100%;
   height: 0.89rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  position:fixed;
  top:0;
  z-index:200;
  background:#fff;
}

.header>.midd{
    width: 5rem;
    height: .6rem;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: .1rem;
    border:1px solid #ccc;
}
.midd>.iconfont{
    color:rgb(175, 175, 4);
    font-size: .5rem;
}
.header>p{
    color:#000;
    font-size: .34rem;
    font-weight: 200;
}
.header>.iconfont{
    color:#000;
    font-size: .6rem;
}
</style>