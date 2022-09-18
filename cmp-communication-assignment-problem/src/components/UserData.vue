<template>
  <form @submit.prevent="setUserData">
    <input type="text" v-model="enteredUsername" />
    <input type="number" v-model="enteredAge" />
    <button type="submit">submit data</button>
  </form>
</template>

<script>
export default {
emits: ['pass-data'],
  data() {
    return {
      enteredUsername: "",
      enteredAge: 0,
    };
  },
  methods: {
    setUserData() {
      this.$emit('pass-data', this.enteredUsername, this.enteredAge);
    },
  },
};
</script>
