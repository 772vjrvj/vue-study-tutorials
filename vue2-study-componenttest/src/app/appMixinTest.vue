<template>
  <div id="app">
    <Product />
    <hr>
    <Sitemap />
  </div>
</template>
<script>
import Product from "@/components/mixin/QiroLab/Product";
import Sitemap from "@/components/mixin/QiroLab/Sitemap";


export default {
  name: "app", 
  components : {
    Product,
    Sitemap
  },

}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
