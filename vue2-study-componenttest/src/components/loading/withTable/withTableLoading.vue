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
          <img alt="blog" src="https://via.placeholder.com/600/92c952">
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
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => this.users = res.data);
  },
  mounted() {
  },
  updated() {
    console.timeLog('what time?');
  },
  methods: {
    async idFn(id) {

      //loading 시작
      //await전에 렌더링이 된다.
      this.isLoading = true;

      //await전에 await전에 렌더링이 된다.
      this.posts = [];

      //첫번째 아이디에 대한
      const posts = await this.reqPosts(id);
      this.posts = posts;

      //loading 끝
      this.isLoading = false;

    },
    reqPosts(id){
      return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.data);
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
