new Vue({
  el: '#vue-app',
  data: {
    age : 25
  },
  methods: {
    add: function(){
      this.age++;
    },
    substract: function(){
      this.age--;
    }
  },
})
