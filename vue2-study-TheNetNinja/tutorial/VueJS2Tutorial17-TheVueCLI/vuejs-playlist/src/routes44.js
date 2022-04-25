import addBlog from './components44/addBlog.vue';
import showBlogs from './components44/showBlogs.vue';
import singleBlog from './components44/singleBlog.vue';

export default [
    { path: '/', component: showBlogs},
    { path: '/add', component: addBlog},
    { path: '/blog/:id', component: singleBlog}
]
