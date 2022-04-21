new Vue({
    el: '#vue-app-one',
    data: {
        output: 'your favourit season'
    },
    methods: {
        outputFn: function(){
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
            this.$refs.test.innerText = this.$refs.input.value;
        }
    }
});
