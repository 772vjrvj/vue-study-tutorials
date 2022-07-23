<template>
  <div id="app">
    <TestUnit></TestUnit>
  </div>
</template>

<script>

import testUnit from './lifeCycle/TestUnit'
// import testUnit from './emit/TestUnit'

export default {
  components :{
    'TestUnit' : testUnit
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  updated() {
  },
  methods: {

  }
}
</script>
<style>

</style>
