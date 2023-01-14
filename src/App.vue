<script setup>
import HomeScreenVue from "./views/HomeScreen.vue";
import AboutScreenVue from "./views/AboutScreen.vue";
import Sidebar from "./components/Sidebar.vue";

import { useRouterStore } from "./store/routing";
import PortfolioScreen from "./views/PortfolioScreen.vue";

const store = useRouterStore();
</script>

<template>
  <HomeScreenVue v-if="store.route == 'home'" />
  <AboutScreenVue v-if="store.route == 'about'" />
  <PortfolioScreen v-if="store.route == 'portfolio'" />
  <Sidebar />
</template>
