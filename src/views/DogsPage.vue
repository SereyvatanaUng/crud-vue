<template>
  <div>
    <PetTable species="dogs" :pets="dogsData" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PetTable from "@/components/PetTable.vue";

export default {
  components: {
    PetTable,
  },
  data() {
    return {
      currentSpeciesTable: "pet-table", // Change to the actual name you choose for the PetTable component
    };
  },
  computed: {
    ...mapState(["dogsData"]),
  },
};
</script>
