<template>
    <div id="message">
        <div class="top">
        <header>
    <!-- 返回按钮 -->
        <i class="iconfont back">&#xe60d;</i>
        <span>消息</span>
    </header>
    </div>
    <section>
        <div class="center">
            <div class="massage-1">
                <span>系统消息</span>
                <i>1</i>
            </div>
             <div class="massage-1">
                <span>站内信</span>
                <i>1</i>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#message{
    flex:1;
    overflow: auto;
}
.top{
    width:100%;
    min-height:0.86rem;
}
#message>.top>header{
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
    min-height:2.42rem;
    background:#fff;
    display: flex;
   justify-content: center;
    padding:0 0.25rem;
    flex-direction: column;
}
.massage-1{
    height:1.2rem;
    display: flex;
    padding:0 0.2rem;
    justify-content:space-between;
    align-items: center;
    border-top: .02rem solid #f0f0f0;
    font-size: 0.3rem;
}
.massage-1>i{
    width:0.4rem;
    height:0.4rem;
    border-radius: 0.2rem;
    background:red;
    color:#fff;
    text-align: center;
    line-height:0.4rem;
}
</style>