<template>
  <div>
    <h1>Welcome to Home</h1>
    <inputField :title = "title" @titleFromChild="titleChange"/>    
    {{ title }}
  </div>  
</template>
<script>
import inputField from '@/components/emit/inputField';
 
export default {
  data() {
    return {
      title : ""
    }
  },
  components : {
    inputField
  },
  methods: {
    titleChange(title) {
      this.title = title
    }
  }
}
</script>
