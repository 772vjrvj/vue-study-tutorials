<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>Author: {{ blog.author }}</p>
        <p>Categories:</p>
        <ul>
            <li v-for="category in blog.categories">{{ category }}</li>
        </ul>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins44/searchMixin';

export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('https://vue2-study-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>
