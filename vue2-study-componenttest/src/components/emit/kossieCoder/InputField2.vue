<template>
  <div>
    <label for="">Name</label>
    <input 
      type="text" 
      :value="name"
      style="padding: 30px; border: 2px solid"
      @input="$emit('update-name', $event)"
    >
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    // updateName(e) {
    //   console.log(e.target.value);
    //   this.$emit('update-name', e.target.value);
    // }
  }
}
</script>