export const dateFormat = {
    created() {
        console.log('믹스인');
    },
    data() {
        return {
            mixinData: '나는 믹스인이오!'
        }
    },
    methods: {
        getDateAndTime(date){
            if(date !== null) {
                let hour = this.zeroAdd(date.getHours());
                let minutes = this.zeroAdd(date.getMinutes());
                let fullDate = `${date.getFullYear()}/${this.zeroAdd(date.getMonth() + 1)}/${this.zeroAdd(date.getDate())}`
                return `${fullDate} ${hour}:${minutes}`
            }else{
                return null;
            }
        },
        zeroAdd(data){
        let result;
            if(data >= 10){
                result = data;
            }else{
                result = '0' + data;
            }
        return result;
        }

    }
}
