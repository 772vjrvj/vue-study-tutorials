<template>
  <div>
    <ul>
      <h1>{{title}}</h1>
      <li>Home</li>
      <li>About</li>
      <li>Products
        <ul>
          <li v-for="(product, index) in products" :key="index" v-text="product"></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import productmixin from "./productmixin";

export default {
  data(){
    return {
      title: "Sitemap"
    }
  },
  mixins: [productmixin]
}
</script>