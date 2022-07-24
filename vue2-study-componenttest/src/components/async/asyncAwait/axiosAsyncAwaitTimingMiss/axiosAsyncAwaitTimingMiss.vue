<template>
<div class="container">

  <div class="loading-container" v-if="isLoading">
    <div class="loading"></div>
    <div id="loading-text">loading</div>
  </div>

  <table class="content-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>UserName</th>
        <th>E-Mail</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" @click="idFn(user.id)" :key="index">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
      </tr>
    </tbody>
  </table>

  <hr>

  <!--blog-section============================================================================-->
  <section id="blog">
    <div class="blog-heading">
    <span>My Recent Posts</span>
    <h3>My Blog</h3>
    </div>
    <!--container---------------->
    <div class="blog-container">
      <!--box-1------------->
      <div v-for="(post, index) in posts"  :key="index" class="blog-box">
        <!--img---->
        <div class="blog-img">
          <img alt="blog" src="./images/blog-1.jpeg">
        </div>
        <!--text--->
        <div class="blog-text">
          <span>{{post.userId}}</span>
          <a class="blog-title" @click="commentsFn(post.id)">{{post.title}}</a>
          <p>{{post.body}}</p>
          <a >Read More</a>
        </div>
      </div>
    </div>
  </section>

  <hr>

  <div class="table">
    <div class="table_header">
      <p>Comments</p>
      <div> <input placeholder="product" /> <button class="add_new">+ Add New</button> </div>
    </div>
    <div class="table_section">
      <table>
        <thead>
        <tr>
          <th>Post ID</th>
          <th>ID</th>
          <th>Name</th>
          <th>E-Mail</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(comment, index) in comments" :key="index">
            <td>{{comment.postId}}</td>
            <td>{{comment.id}}</td>
            <td>{{comment.name}}</td>
            <td>{{comment.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      isLoading: false,
      users:[],
      posts: [],
      comments: [],
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => this.users = res.data);
    axios.get('https://jsonplaceholder.typicode.com/albums').then(res => this.albums = res.data);
  },
  mounted() {
  },
  updated() {
  },
  methods: {
    async idFn(id) {
      this.isLoading = true;
      this.posts = [];

      const setTimeoutRes = await new Promise(resolve => setTimeout(() => resolve(0),2000));
      const newId = id + setTimeoutRes;

      //첫번째 엘범에 대한 posts들 찾기
      const posts = await this.reqPosts(newId);
      this.posts = posts;
      this.isLoading = false;

      // this.$nextTick(function(){
      //   this.$refs.loading.style.display = 'none';
      // });

    },
    async commentsFn(id){
      this.isLoading = true;
      this.comments = [];

      const setTimeoutRes = await new Promise(resolve => setTimeout(() => resolve(0),2000));
      const newId = id + setTimeoutRes;

      const comments = await this.reqComments(newId);
      this.comments = comments;
      console.log('comments : ', comments);

      this.isLoading = false;
      // this.$nextTick(function(){
      //   this.$refs.loading.style.display = 'none';
      // });
    },

    reqPosts(id){
      return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.data);
    },

    reqComments(id){
      return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res =>res.data);
    },
  }
}
</script>
<style>
/* table */
* {
  font-family: sans-serif; /* Change your font family */
}

.container{
  position: relative;
}

.content-table {
  border-collapse: collapse;
  margin: 25px auto;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.content-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}




/* post */
/*--blog--------------------------*/
#blog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.blog-heading{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.blog-heading span{
  color: #f33c3c;
}
.blog-heading h3{
  font-size: 2.4rem;
  color: #2b2b2b;
  font-weight: 600;
}
.blog-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  flex-wrap: wrap;
}

.blog-box{
  width:350px;
  background-color: #ffffff;
  border: 1px solid #ececec;
  margin: 20px 20px;

}
.blog-img{
  width:100%;
  height: auto;
}
.blog-img img{
  width:100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.blog-text{
  padding: 30px;
  display: flex;
  flex-direction: column;
}
.blog-text span{
  color: #f33c3c;
  font-size: 0.9rem;
}
.blog-text .blog-title{
  font-size: 1.3rem;
  font-weight: 500;
  color: #272727;
}
.blog-text p{
  color: #9b9b9b;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px 0px;
}
.blog-text a{
  color: #0f0f0f;
}
.blog-text a:hover{
  color: #c74242;
  transition: all ease 0.3s;
}


@media(max-width:1250px){

  .blog-box{
    width: 300px;
  }
}
@media(max-width:1100px){
  .blog-box{
    width:70%;
  }
}

@media(max-width:550px){

  .blog-box{
    margin: 20px 10px;
    width: 100%;
  }
  #blog{
    padding:20px;
  }
}




/* comments */
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');


.table {
  width: 100%;
}

.table .table_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: rgb(240, 240, 240);
}

.table .table_header p {
  color: #000000;
}

.table button {
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px;
  color: #ffffff;
}

.table td button:nth-child(1) {
  background-color: #0298cf;
}

.table td button:nth-child(2) {
  background-color: #f80000;
}

.table .add_new {
  padding: 10px 20px;
  color: #ffffff;
  background-color: #0298cf;
}

.table input {
  padding: 10px 20px;
  margin: 0 10px;
  outline: none;
  border: 1px solid #0298cf;
  border-radius: 6px;
  color: #0298cf;
}

.table .table_section {
  height: 500px;
  overflow: auto;
}

.table table {
  width: 100%;
  table-layout: fixed;
  min-width: 900px;
  border-collapse: collapse;
}

.table thead th {
  position: sticky;
  top: 0;
  background-color: #f6f9fc;
  color: #8493a5;
  font-size: 15px;
}

.table th,
td {
  border-bottom: 1px solid #dddddd;
  padding: 10px 20px;
  word-break: break-all;
  text-align: center;
}

.table td img {
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 15px;
  border: 5px solid #ced0d2;
}

.table tr:hover td {
  color: #0298cf;
  cursor: pointer;
  background-color: #f6f9fc;
}

.table .pagination {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 20px;
}

.table .pagination div {
  padding: 10px;
  border: 2px solid #d5d0d0;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0298cf;
  color: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  margin: 0 5px;
  cursor: pointer;
}

::placeholder {
  color: #0298cf;
}









/* loading */

@keyframes rotate-loading {
  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@-moz-keyframes rotate-loading {
  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@-webkit-keyframes rotate-loading {
  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@-o-keyframes rotate-loading {
  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@keyframes rotate-loading {
  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@-moz-keyframes rotate-loading {
  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@-webkit-keyframes rotate-loading {
  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@-o-keyframes rotate-loading {
  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@keyframes loading-text-opacity {
  0%  {opacity: 0}
  20% {opacity: 0}
  50% {opacity: 1}
  100%{opacity: 0}
}

@-moz-keyframes loading-text-opacity {
  0%  {opacity: 0}
  20% {opacity: 0}
  50% {opacity: 1}
  100%{opacity: 0}
}

@-webkit-keyframes loading-text-opacity {
  0%  {opacity: 0}
  20% {opacity: 0}
  50% {opacity: 1}
  100%{opacity: 0}
}

@-o-keyframes loading-text-opacity {
  0%  {opacity: 0}
  20% {opacity: 0}
  50% {opacity: 1}
  100%{opacity: 0}
}
.loading-container,
.loading {
  height: 100px;
  position: relative;
  width: 100px;
  border-radius: 100%;
}

.loading-container { margin: 40px auto; position: absolute; z-index: 1; left: 50%; top: 50%; transform: translate(-50%, -50%)}

.loading {
  border: 2px solid transparent;
  border-color: transparent #63a637 transparent #63a637;
  -moz-animation: rotate-loading 1.5s linear 0s infinite normal;
  -moz-transform-origin: 50% 50%;
  -o-animation: rotate-loading 1.5s linear 0s infinite normal;
  -o-transform-origin: 50% 50%;
  -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;
  -webkit-transform-origin: 50% 50%;
  animation: rotate-loading 1.5s linear 0s infinite normal;
  transform-origin: 50% 50%;
}

.loading-container:hover .loading {
  border-color: transparent #E45635 transparent #E45635;
}

.loading-container:hover #loading-text {
  color: #E45635;
}

.loading-container:hover .loading,
.loading-container .loading {
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

#loading-text {
  -moz-animation: loading-text-opacity 2s linear 0s infinite normal;
  -o-animation: loading-text-opacity 2s linear 0s infinite normal;
  -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;
  animation: loading-text-opacity 2s linear 0s infinite normal;
  color: #63a637;
  font-family: "Helvetica Neue, "Helvetica", ""arial";
  font-size: 10px;
  font-weight: bold;
  margin-top: 45px;
  opacity: 0;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 0;
  width: 100px;
}


</style>
