<template>
  <div>
    {{posts}}
  </div>

</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      posts:[]
    }
  },
  created() {
    this.testGet();
  },
  mounted() {
  },
  updated() {
  },
  methods: {
    testGet(){

      //잘못된 코드
      // const posts = axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data);
      // console.log('posts : ', posts);
      // this.posts = posts;

      //해결 1
      //반드시 then 안에 넣어야 합니다. 그래야 promise를 받아서 작업을 처리할 수 있습니다.
      axios.get('https://jsonplaceholder.typicode.com/posts').then(res => this.posts = res.data);

      //해결2
      // async testGet() 과 사용해야함
      // const posts = await axios.get('/posts').then(res => res.data);
      // this.posts = posts;
    }
  }
}
</script>
<style>

</style>
