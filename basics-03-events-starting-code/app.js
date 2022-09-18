const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(e, lastname) {
      this.name = e.target.value + lastname;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
