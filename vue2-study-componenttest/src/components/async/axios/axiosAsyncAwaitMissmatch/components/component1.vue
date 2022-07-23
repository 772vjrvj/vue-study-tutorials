<template>
  <table id="post_table" ref="post_table" :style="{width: `${500}px`, height: `${500}px`,backgroundColor: `${'red'}`}">
    <tr>
      test
    </tr>
  </table>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      posts:[]
    }
  },
  mounted() {
    console.log('mounted');
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => console.log('updated post_table',res));
    console.log('mounted post_table: ',this.$refs.post_table);
  },
  updated() {
    console.log('updated');
    console.log('updated post_table: ',this.$refs.post_table);
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
