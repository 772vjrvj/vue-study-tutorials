<template>
  <div>
    <button @click="TestFn">Test Async Await</button>
    <div id="result">
      {{posts}}
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      users:[],
      posts: [],
      comments: [],
    }
  },
  methods: {
    async TestFn(){
      const posts = await this.getPost(1); //await promise가 fullfill이 될때 까지 기다린다.
      console.log('posts type :', Object.prototype.toString.apply(posts));
      console.log('posts: ', posts);
      this.posts = posts[0];
    },
    getPost(id)
    {
      //axios의 promise결과 자체를 리턴하던가
      //then 에서 결과를 조작하고 리턴해야 한다.
      const posts = axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then(res => res.data);
      console.log('posts type :', Object.prototype.toString.apply(posts));
      console.log('posts :', posts);
      return posts;
    }
  }
}
</script>
