<template>
  <div>
    <AxiosAsyncAwaitMissmatch ref="axiosAsyncAwaitMissmatch"></AxiosAsyncAwaitMissmatch>
    <div id="test1" :style="{backgroundColor: 'blue', width: `${width}px`, height: `${height}px`}">{{test}}</div>
  </div>
</template>
<script>

import axiosAsyncAwaitMissmatch from './axios/axiosAsyncAwaitMissmatch/axiosAsyncAwaitMissmatch'


export default {
  components :{
    'AxiosAsyncAwaitMissmatch' : axiosAsyncAwaitMissmatch
  },
  props: {

  },
  data(){
    return{
      width: 0,
      height: 0,
      test: 'testLetter'
    }
  },
  mounted() {
    console.log('TestUnit : ', this.$refs.axiosAsyncAwaitMissmatch);
    this.width = this.$refs.axiosAsyncAwaitMissmatch.width;
    this.height = this.$refs.axiosAsyncAwaitMissmatch.height;

    console.log('mounted TestUnit');
  },
  updated() {
    console.log('updated TestUnit');
  },
  methods: {

  }
}
</script>
<style scoped>

</style>
