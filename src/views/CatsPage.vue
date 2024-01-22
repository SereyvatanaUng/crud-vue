<template>
  <div>
    <h1>Cats for Adoption</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <!-- <th>Name</th>
          <th>Breed</th>
          <th>Species</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Color</th>
          <th>Weight</th>
          <th>Location</th>
          <th>Notes</th> -->
          <th v-for="key in Object.keys(catsData[0])" :key="key">
            {{ key.charAt(0).toUpperCase() + key.slice(1) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cat, index) in catsData" :key="index">
          <td>
            <router-link :to="`/pets/cats/${index}`">
              {{ cat.name }}
            </router-link>
          </td>
          <td>{{ cat.breed }}</td>
          <td>{{ cat.species }}</td>
          <td>{{ cat.gender }}</td>
          <td>{{ cat.age }}</td>
          <td>{{ cat.color }}</td>
          <td>{{ cat.weight }}</td>
          <td>{{ cat.location }}</td>
          <td>{{ cat.notes }}</td>
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
    ...mapState(["catsData"]),
  },
};
</script>
