<template>
  <div>
    <h1>This is Home page</h1>
    <form action="">
      <InputField3 v-model="name"/>
      <br><button>Submit</button>
      {{ name }}
    </form>
  </div>
</template>

<script>
import InputField3 from '@/components/emit/kossieCoder/InputField3'
export default {
  components: { 
    InputField3 
  },
  data(){
    return {
      name: ''
    }
  },
  methods: {
    // updateName(name) {
    //   this.name = name;
    // }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>