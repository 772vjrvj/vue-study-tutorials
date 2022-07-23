<template>
  <div>
    <h1>Welcome to Home</h1>
    <InputField :title = "title" @titleFromChild="titleChange"/>    
    {{ title }}
  </div>  
</template>
<script>
import InputField from '@/components/emit/InputField';
 
export default {
  data() {
    return {
      title : ""
    }
  },
  components : {
    InputField
  },
  methods: {
    titleChange(title) {
      this.title = title
    }
  }
}
</script>
