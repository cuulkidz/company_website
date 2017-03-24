<template>
  <el-row id="app">
    <el-col :span="24">
      <div class="main-content home-background">
        <navRegion></navRegion>
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Welcome to Cuulkids'
    }
  }
}
</script>
<style lang="scss">
html, body {
  margin: 0 !important;
  padding: 0 !important;
  min-height: 100% !important;
  min-width: 100% !important;
}
#app {
  font-family: 'Lato', sans-serif, 'Avenir', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #20A0FF;
}

.main-content {

}
.home-background {
  height:100vh;
  background-color: white;
}
</style>
