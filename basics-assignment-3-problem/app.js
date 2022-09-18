const app = Vue.createApp({
    data() {
        return {
            result: 36
        }
    },
    methods: {
        add(value) {
            return this.result = this.result + value;
        }
    },
    computed: {
        outputResult() {
            if (this.result < 37) {
                return "Not there yet";
            } else if (this.result > 37) {
                return "Too much!"
            } else {
                return this.result;
            }
        }
    },
    watch: {
        outputResult() {
           const that = this; 
           setTimeout(() => {
                that.result = 0;
           }, 5000) 
        }
    }
});

app.mount("#assignment");



