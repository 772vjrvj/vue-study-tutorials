<template>
  <div>
    <app-header></app-header>
    <app-ninjas :ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
// Imports
import Header from './components21c/Header.vue';
import Footer from './components21c/Footer.vue';
import Ninjas from './components21c/Ninjas.vue';

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
      ]
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
