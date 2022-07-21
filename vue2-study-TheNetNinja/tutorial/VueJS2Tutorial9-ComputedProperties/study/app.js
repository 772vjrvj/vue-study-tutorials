new Vue({
  el: '#vue-app',
  data: {
    age:20,
    a: 0,
    b: 0
  },
  /* methods: {
    addToA: function(){
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function(){
      console.log('addToB');
      return this.b + this.age;
    }
  }, */
  computed: {
    addToA: function(){
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function(){
      console.log('addToB');
      return this.b + this.age;
    }
  }
  // computed 캐싱
  // method 항상 호출 method의 로그가 계속 찍히는 걸 볼 수 있다.
})
