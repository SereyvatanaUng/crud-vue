<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      animal: {},
    };
  },
  computed: {
    ...mapState(["catsData", "dogsData"]),
  },
  watch: {
    "$route.params": {
      handler() {
        this.fetchAnimal();
      },
      immediate: true,
    },
  },
  methods: {
    fetchAnimal() {
      const animal =
        this[this.$route.params.species + "Data"][this.$route.params.id];
      this.animal = animal;
    },
  },
};
</script>
