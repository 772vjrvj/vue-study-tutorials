<template>
  <div>
    <h1>This is Home page</h1>
    <form action="">
      <InputField1 :name="name" @update-name="updateName"/>
      <br><button>Submit</button>
      {{ name }}
    </form>
  </div>
</template>

<script>
import InputField1 from '@/components/emit/kossieCoder/InputField1'
export default {
  components: { 
    InputField1 
  },
  data(){
    return {
      name: ''
    }
  },
  methods: {
    updateName(name) {
      this.name = name;
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>