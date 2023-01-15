<script setup>
import HomeScreenVue from "./views/HomeScreen.vue";
import AboutScreenVue from "./views/AboutScreen.vue";
import Sidebar from "./components/Sidebar.vue";

import { useRouterStore } from "./store/routing";
import PortfolioScreen from "./views/PortfolioScreen.vue";
import ContactScreen from "./views/ContactScreen.vue";
import Curtain from "./components/Curtain.vue";

const store = useRouterStore();
</script>

<template>
  <HomeScreenVue v-if="store.route == 'home'" />
  <AboutScreenVue v-if="store.route == 'about'" />
  <PortfolioScreen v-if="store.route == 'portfolio'" />
  <ContactScreen v-if="store.route == 'contact'" />
  <Sidebar />
</template>
