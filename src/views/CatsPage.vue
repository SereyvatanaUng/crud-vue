<template>
  <div>
    <PetTable species="cats" :pets="catsData" />
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
    return {};
  },
  computed: {
    ...mapState(["catsData"]),
  },
};
</script>
