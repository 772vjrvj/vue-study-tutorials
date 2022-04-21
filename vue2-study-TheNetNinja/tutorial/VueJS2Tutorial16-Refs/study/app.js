new Vue({
    el: '#vue-app-one',
    data: {
        output: 'Your favourite food'
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs);
            console.log(this.$refs.test);
            console.log(this.$refs.test.innerText);
            //잘봐라 위에..
            this.output = this.$refs.input.value;
            this.$refs.test.innerText = this.$refs.input.value;
        }
    }
});
