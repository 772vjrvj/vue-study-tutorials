import addBlog from './components42/addBlog.vue';
import showBlogs from './components42/showBlogs.vue';
import singleBlog from './components42/singleBlog.vue';

export default [
    { path: '/', component: showBlogs},
    { path: '/add', component: addBlog},
    { path: '/blog/:id', component: singleBlog}
]
