const app = Vue.createApp({
    data() {
        return {
            name: "MarchEwa",
            age: 38,
            url: "https://placebear.com/200/200"
        }
    },
    methods: {
        countAge() {
            return this.age + 5;
        },
        getFavNo() {
            return Math.random();
        }
    }
});
app.mount("#assignment");