const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            isVisible: true,
            bgColor: "",
        }
    },
    methods: {
        setUserInput() {
            this.userInput = event.target.value;
        },
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        setBgColor() {
            this.bgColor = event.target.value;
        }
    }
});

app.mount("#assignment");