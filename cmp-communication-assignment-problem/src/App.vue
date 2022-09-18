<template>
  <div class="container">
    <active-user :username="username" :age="age"></active-user>
    <user-data @pass-data="passData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      age: 0,
    };
  },
  methods: {
    passData(enteredUsername, enteredAge) {
      this.username = enteredUsername;
      this.age = enteredAge;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}
</style>
