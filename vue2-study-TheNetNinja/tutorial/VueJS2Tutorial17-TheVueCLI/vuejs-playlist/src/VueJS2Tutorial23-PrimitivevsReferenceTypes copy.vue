<template>
    <div>
        <app-header v-bind:title="title"></app-header>
        <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
        <ul>
          <li v-for="ninja in ninjas">{{ ninja.name }}</li>
        </ul>
        <app-footer v-bind:title="title"></app-footer>
    </div>
</template>

<script>
// Imports
import Header from './components23/Header.vue';
import Footer from './components23/Footer.vue';
import Ninjas from './components23/Ninjas.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-ninjas': Ninjas
    },
    data () {
        return {
          ninjas: [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],
          title: 'Vue Wizards'
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
