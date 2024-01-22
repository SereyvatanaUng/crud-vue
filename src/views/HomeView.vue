<template>
  <div class="home">
    <h1>
      {{ getAllCats.length }}
    </h1>
    <h1>{{ animalsCount }}</h1>
    <button @click="togglePetForm" class="btn btn-primary mb-5">
      Add new pet
    </button>

    <!-- Form -->
    <form
      v-if="showPetForm"
      @submit.prevent="handleSubmit"
      class="d-flex flex-column gap-3"
    >
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Name"
          v-model="formData.name"
          required
        />
        <label for="floatingInput">Name</label>
      </div>
      <select
        class="form-select form-select-lg"
        aria-label="Species"
        v-model="formData.species"
        required
      >
        <option value="catsData">Cat</option>
        <option value="dogsData">Dog</option>
      </select>
      <div class="form-floating">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="Age"
          v-model="formData.age"
          required
        />
        <label for="floatingInput">Age</label>
      </div>

      <!-- Button -->
      <div class="d-flex justify-content-evenly">
        <button type="submit" class="btn btn-success w-25">Submit</button>
        <button
          type="button"
          class="btn btn-danger w-25"
          @click="togglePetForm"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      showPetForm: false,
      formData: { name: "", age: 0, species: null },
    };
  },
  computed: {
    ...mapGetters(["animalsCount", "getAllCats"]),
  },
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, name, age } = this.formData;
      const payload = {
        species,
        pet: { name, age },
      };
      this.addPet(payload);
      this.showPetForm = false; // Close the form after submission
    },
  },
};
</script>
