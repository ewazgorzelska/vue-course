const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            userInput: "",
            isListVisible: true,
        }
    },
    computed: {
        buttonCaption() {
            return this.isListVisible ? "Hide" : "Show";
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.userInput);
            this.userInput = "";
        },
        toggleList() {
            this.isListVisible = !this.isListVisible;
        }
    }
});

app.mount('#assignment')