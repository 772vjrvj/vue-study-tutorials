<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
import showBlogs from './components41/showBlogs.vue';
import listBlogs from './components41/listBlogs.vue';
import header from './components41/header.vue';

export default {
    components: {
        'app-header': header
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
