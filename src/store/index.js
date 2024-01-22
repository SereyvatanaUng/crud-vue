import { createStore } from "vuex";

import catsData from "@/data/catsData";
import dogsData from "@/data/dogsData";

export default createStore({
  state: {
    catsData,
    dogsData,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
