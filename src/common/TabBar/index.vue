<template>
  <div id="footer">
    <ul>
      <router-link v-for="(item,index) in tabBar" :key="index" :to="item.to" tag="li">
        <i class="iconfont" v-html="item.iconfont"></i>
        <span>{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      tabBar: [
        {
          iconfont: "&#xe60b;",
          text: "首页",
          to: "/home"
        },
        {
          iconfont: "&#xe634;",
          text: "商品",
          to: "/goods"
        },
        {
          iconfont: "&#xe502;",
          text: "购物车",
          to: "/shopcar"
        },
        {
          iconfont: "&#xe601;",
          text: "消息",
          to: "/message"
        },
          {
          iconfont: "&#xe623;",
          text: "个人",
          to: "/mine"
        }
      ]
    };
  }
};
</script>

<style>
#footer {
  width: 100%;
  height: 0.98rem;
  border-top: 1px solid #f1f1f1;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0 -1px 0.075rem rgba(0,0,0,.2);
  background-color: #fff;
}

#footer > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#footer > ul > li {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
#footer > ul > .router-link-active{
    color:#ffce00;
}
#footer > ul > li > i {
  font-size: 0.4rem;
}

</style>