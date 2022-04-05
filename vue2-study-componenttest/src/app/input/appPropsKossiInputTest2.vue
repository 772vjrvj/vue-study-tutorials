<template>
  <div>
    <h1>This is Home page</h1>
    <form action="">
      <InputField2 :name="name" @update-name="name = $event.target.value"/>
      <br><button>Submit</button>
      {{ name }}
    </form>
  </div>
</template>

<script>
import InputField2 from '@/components/emit/kossieCoder/InputField2'
export default {
  components: { 
    InputField2 
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