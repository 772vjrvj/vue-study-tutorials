<template>
  <div>
    {{ message }}
    <button @click="changeMessage">Click</button>
    {{ updated }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '헬로우',
      updated: '아니오'
    }
  },
  components: {

  },
  computed: {

  },
  methods: {
    changeMessage(){
      this.message = '코지코더';
    }
  },
  watch: {
    message(newVal, oldVal){
      console.log(newVal, oldVal);
      this.updated = '네'
    }
  }
}
</script>

<style>

</style>