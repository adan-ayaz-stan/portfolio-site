// stores/counter.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useRouterStore = defineStore("route", () => {
  const route = ref("home");
  function setRoute(path) {
    route.value = path;
  }

  return { route, setRoute };
});
