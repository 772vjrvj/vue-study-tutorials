<template>
  <table id="post_table" ref="post_table" :style="{width: `${500}px`, height: `${500}px`,backgroundColor: `${'red'}`}">
    <tr>
      test 1
    </tr>
  </table>
</template>

<script>

import axios from 'axios'



export default {
  data() {
    return {
      posts:[],
      width: 100,
      height: 100
    }
  },
  mounted() {
    console.log('mounted axiosAsyncAwaitMissmatch');
    axios.get('https://jsonplaceholder.typicode.com/posts');
  },
  updated() {
    console.log('updated axiosAsyncAwaitMissmatch');
  },
  methods: {
    fetchData() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
    },
  }
}
</script>
<style>

</style>
