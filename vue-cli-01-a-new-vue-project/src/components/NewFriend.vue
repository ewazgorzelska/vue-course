<template>
    <form @submit.prevent="submitFriendForm">
        <div class="container">
            <div>
                <label htmlFor="firstName">Friend's first name</label>
                <input
                    name="firstName" 
                    type="text"
                    v-on:input="setFirstName($event)"
                    v-model="firstName"  
                />
            </div>
            <div>
                <label htmlFor="lastName">Friend's last name</label>
                <input
                    name="lastName" 
                    type="text"
                    v-on:input="setLastName($event)"
                    v-model="lastName" 
                />
            </div>
            <div>
                <label htmlFor="phone">Friend's phone no.</label>
                <input
                    name="phone" 
                    type="text"
                    v-on:input="setPhone($event)"
                    v-model="phone"  
                />
            </div>
            <div>
                <label htmlFor="email">Friend's email</label>
                <input
                    name="email" 
                    type="text"
                    v-on:input="setEmail($event)"
                    v-model="email" 
                />
            </div>
        </div>
        <button type="submit">Add new friend</button>
    </form>
</template>

<script>
    export default {
        emits: ['add-new-friend'],
        data() {
            return {             
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                isFavorite: true
            }
        },
        methods: {
            setFirstName (e) {
                this.firstName = e.target.value;
            },
            setLastName (e) {
                this.lastName = e.target.value;
            },
            setPhone (e) {
                this.phone = e.target.value;
            },
            setEmail (e) {
                this.email = e.target.value;
            },
            submitFriendForm () {
                this.$emit('add-new-friend', {
                    name: this.firstName + " " + this.lastName,
                    id: this.firstName,
                    phone: this.phone,
                    email: this.email,
                    isFavorite: this.isFavorite
                })
            }
        }
    }
</script>

<style>
    .container {
        display: grid;
        gap: 25px;
        margin: 0 auto;
    }
    input {
        max-width: 30vw;
    }
</style>