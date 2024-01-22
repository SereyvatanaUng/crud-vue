import { createStore } from "vuex";

import catsData from "@/data/catsData";
import dogsData from "@/data/dogsData";

export default createStore({
  state: { catsData, dogsData, pets: [...catsData, ...dogsData] },
  getters: {
    animalsCount: (state) => {
      return state.catsData.length + state.dogsData.length;
    },
    getAllCats: (state) => {
      return state.catsData;
    },
    getAllDogs: (state) => {
      return state.dogsData;
    },
  },
  mutations: {
    appendPet: (state, { species, pet }) => {
      // Check if the species array exists, if not, initialize it
      if (!state[species]) {
        state[species] = [];
      }
      console.log(state[species]);
      console.log(pet);
      state[species].push(pet);
    },
  },
  actions: {
    addPet: (context, payload) => {
      context.commit("appendPet", payload);
    },
  },
  modules: {},
});
