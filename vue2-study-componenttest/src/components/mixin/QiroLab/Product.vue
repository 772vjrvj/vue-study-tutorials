<template>
  <ul>
    <li v-for="(product, index) in products" :key="index" v-text="product"></li>
  </ul>
</template>
<script>
import productmixin from "./productmixin";

export default {
  mixins: [productmixin]
}
</script>
<style>

</style>
