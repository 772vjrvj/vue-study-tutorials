<template>
  <div id="app">
    <TestUnit />
  </div>
</template>

<script>

// import testUnit from './lifeCycle/TestUnit'
// import testUnit from './emit/TestUnit'
// import testUnit from './async/TestUnit'
import testUnit from './loading/TestUnit'

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
