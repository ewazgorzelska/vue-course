const app = Vue.createApp({
    data() {
        return {
            output: "",
            confirmedOutput: ""
        }
    },
    methods: {
        showAlert() {
            alert("hey hey!")
        },
        setOutput (e) {
            this.output = e.target.value;
        },
        setconfOutput (e) {
            this.confirmedOutput = e.target.value;
        },
        resetInput () {
            this.confirmedOutput = "";     
        }
    }
});

app.mount("#assignment");