<template>
  <div>
    <h1>
      {{ species.charAt(0).toUpperCase() + species.slice(1) }} for Adoption
    </h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="key in Object.keys(pets[0])" :key="key">
            {{ key.charAt(0).toUpperCase() + key.slice(1) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pet, index) in pets" :key="index">
          <td>
            <router-link :to="`/pets/${species}/${index}`">
              {{ pet.name }}
            </router-link>
          </td>
          <td>{{ pet.breed }}</td>
          <td>{{ pet.species }}</td>
          <td>{{ pet.gender }}</td>
          <td>{{ pet.age }}</td>
          <td>{{ pet.color }}</td>
          <td>{{ pet.weight }}</td>
          <td>{{ pet.location }}</td>
          <td>{{ pet.notes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array,
  },
};
</script>
