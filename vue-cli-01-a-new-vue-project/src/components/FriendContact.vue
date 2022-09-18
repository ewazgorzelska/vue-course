<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <button @click="toggleFav">Toggle Fav</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ phoneNumber }}</li>
        <li><strong>E-mail:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-favorite'],
  data() {
    return {
        detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
        this.$emit('toggle-favorite', this.id);
    }
  }
};
</script>
