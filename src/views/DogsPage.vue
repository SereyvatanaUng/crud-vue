<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <!-- <th>Name</th>
          <th>Breed</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Color</th>
          <th>Weight</th>
          <th>Location</th>
          <th>Notes</th> -->
          <th v-for="key in Object.keys(dogsData[0])" :key="key">
            {{ key.charAt(0).toUpperCase() + key.slice(1) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dog, index) in dogsData" :key="index">
          <td>
            <router-link :to="`/pets/dogs/${index}`">
              {{ dog.name }}
            </router-link>
          </td>
          <td>{{ dog.breed }}</td>
          <td>{{ dog.gender }}</td>
          <td>{{ dog.age }}</td>
          <td>{{ dog.color }}</td>
          <td>{{ dog.weight }}</td>
          <td>{{ dog.location }}</td>
          <td>{{ dog.notes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["dogsData"]),
  },
};
</script>
