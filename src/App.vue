<script setup>
import HomeScreenVue from "./views/HomeScreen.vue";
import AboutScreenVue from "./views/AboutScreen.vue";
import Sidebar from "./components/Sidebar.vue";

import { useRouterStore } from "./store/routing";

const store = useRouterStore();
</script>

<template>
  <AboutScreenVue v-if="store.route == 'about'" />
  <HomeScreenVue v-else />
  <Sidebar />
</template>
