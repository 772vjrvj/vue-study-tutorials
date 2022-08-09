<template>
  <div class="table">
    <div class="table_header">
      <p>Comments</p>
      <div><input placeholder="product" /><button class="add_new">+ Add New</button></div>
    </div>

    <div class="table_section" @click.stop="trClear">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>E-Mail</th>
        </tr>
      </thead>
      <tbody ref="tbody" >
        <tr v-for="(post, index) in posts" @click.stop="idFn(post, index)" :key="index" :class="{'active' : post.id === activeRow}" :id="post.id">
          <td>{{post.userId}}</td>
          <td>{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.body}}</td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      activeRow : ''
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => this.posts = res.data);
  },
  mounted() {
  },
  updated() {
    console.log('updated');
  },
  methods: {

    trClear(){
      this.activeRow = '';
    },

    //방법 1
    // idFn(post, index) {
    //     this.activeRow = index;
    // },

    //방법 2
    idFn(post) {
      this.activeRow = post.id;
    },
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
}

.table {
  margin: 0 auto;
  width: 70%;
}

.table_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: rgb(240, 240, 240);
}

.table_header p {
  color: #000000;
}

button {
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px;
  color: #ffffff;
}

.add_new {
  padding: 10px 20px;
  color: #ffffff;
  background-color: #0298cf;
}

input {
  padding: 10px 20px;
  margin: 0 10px;
  outline: none;
  border: 1px solid #0298cf;
  border-radius: 6px;
  color: #0298cf;
}

.table_section {
  height: 500px;
  overflow: auto;
}

table {
  width: 100%;
  /*table-layout: fixed;*/
  min-width: 900px;
  border-collapse: collapse;
}

thead th {
  position: sticky;
  top: 0;
  background-color: #f6f9fc;
  color: #8493a5;
  font-size: 15px;
}

th,
td {
  border-bottom: 1px solid #dddddd;
  padding: 10px 20px;
  word-break: break-all;
  text-align: center;
}

td:nth-child(1) {
  width: 10%;
}

td:nth-child(2) {
  width: 10%;
}

td img {
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 15px;
  border: 5px solid #ced0d2;
}

tr:hover td {
  color: #0298cf;
  cursor: pointer;
  background-color: #f6f9fc;
}

tr.active td {
  color: #0298cf;
  cursor: pointer;
  background-color: #f6f9fc;
}

::placeholder {
  color: #0298cf;
}

::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

</style>
