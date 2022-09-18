<template>
    <h2>User's name is: {{ username }}</h2>
    <h3>User's age is: {{ age }}</h3>
</template>

<script>
    export default {
        props: {
            username: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            }
        },
    }
</script>