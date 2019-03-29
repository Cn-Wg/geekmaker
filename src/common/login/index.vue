<template>
    <div id="login">
        <div class="top">
        <header>
    <!-- 返回按钮 -->
        <i class="iconfont back">&#xe60d;</i>
        <span>账号登录</span>
    </header>
    </div>
    <section>
       <div class="center"></div>
    </section>
    </div>
</template>
<script>
export default {
    name:"login"
}
</script>
<style>
#login{
    flex:1;
    overflow: auto;
}
.top{
    width:100%;
    min-height:0.86rem;
}
#login>.top>header{
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
    font-weight:500;
}
header>.back{
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    left: .36rem;
    font-size:0.4rem;
}
section{
  flex: 1;
  overflow: auto;
 
}
.center{
    width:100%;
    height:10.94rem;
    /* background: #f3f5f4; */
}
</style>