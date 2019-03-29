<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./common/TabBar"
export default {
  name : "app",
  components : {
    Footer,
  }
}
</script>
<style lang="scss">
#app{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  background:#f3f5f4;
}
</style>
