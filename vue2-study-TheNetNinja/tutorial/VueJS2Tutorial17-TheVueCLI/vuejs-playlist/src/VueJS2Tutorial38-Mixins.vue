<template>
    <div>
        <show-blogs></show-blogs>
        <list-blogs></list-blogs>
    </div>
</template>

<script>
// Imports
import showBlogs from './components38/showBlogs.vue';
import listBlogs from './components38/listBlogs.vue';

export default {
    components: {
        'show-blogs': showBlogs,
        'list-blogs': listBlogs
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
