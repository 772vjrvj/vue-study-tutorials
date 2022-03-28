<template>
  <div>
    <form>
      <label>ID</label>
      <input type="text" :value = "title" @input = "titleUpdate" style = "padding: 20px; border: 1px pink solid">
      <button>Submit</button>
    </form>
  </div>
</template>
 
<script>
export default {
  props : {
    title : {
      type : String,
      required : true
    }
  },
  methods : {
    titleUpdate(e) {
      this.$emit('titleFromChild', e.target.value)
    }
  }

}
</script>