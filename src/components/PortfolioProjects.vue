<script setup lang="ts">
import { ref } from "vue";
import droveAnimatedImage from "../assets/images/drove-animated-site.png";
import theBottleHausImage from "../assets/images/the-bottle-haus.png";
import kanbanTicketingSystemImage from "../assets/images/kanban-ticketing-system.png";
import nuxtChatImage from "../assets/images/nuxt-chat.png";
import conferenceNuxtImage from "../assets/images/conference-nuxt.png";

import Project from "./PortfolioProjects-mini-comps/Project.vue";

const searchRouteData = [
  {
    name: "All",
    category: "",
  },
  {
    name: "Logo",
    category: "logo",
  },
  {
    name: "Graphic Design",
    category: "graphic",
  },
  {
    name: "Animations",
    category: "animations",
  },
];

interface project {
  name: String;
  link: String;
  github: String;
  image: String;
}

const projectsData: project[] = [
  {
    name: "Nuxt Conference App",
    link: "https://conference-nuxt.vercel.app",
    github: "https://github.com/adan-ayaz-stan/conference-app-nuxt",
    image: conferenceNuxtImage,
  },
  {
    name: "Nuxt Chat Application",
    link: "https://nuxt-chat-application.vercel.app",
    github: "https://github.com/adan-ayaz-stan/nuxt-chat-application",
    image: nuxtChatImage,
  },
  {
    name: "Kanban Ticketing System",
    link: "https://kanban-ticketing-system.vercel.app",
    github: "https://github.com/adan-ayaz-stan/kanban-ticketing-system",
    image: kanbanTicketingSystemImage,
  },
  {
    name: "The Bottle Haus Project",
    link: "https://adan-ayaz-project-03.vercel.app/",
    github: "https://github.com/adan-ayaz-stan/the-bottle-haus-project",
    image: theBottleHausImage,
  },
  {
    name: "Drove Animated Site",
    link: "https://drove-animated-site.vercel.app/",
    github: "https://github.com/adan-ayaz-stan/drove-animated-site",
    image: droveAnimatedImage,
  },
];

const selectedCategory = ref("");
</script>

<template>
  <div class="flex flex-col items-center">
    <!-- Top Bar -->
    <div class="flex flex-row justify-center items-center gap-2 lg:gap-4">
      <div
        v-for="item in searchRouteData"
        @click="selectedCategory = item.category"
        class="uppercase cursor-pointer hover:text-purple-500 hover:transition-all duration-200"
        :style="{
          color: selectedCategory == item.category ? 'var(--color-1)' : '',
        }"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- Portfolio Projects -->
    <div
      class="w-full grid auto-rows-auto grid-cols-1 lg:grid-cols-2 gap-8 p-4 pb-20 lg:p-12 lg:px-20"
    >
      <!--  -->
      <!-- Single Project Component -->
      <Project
        v-for="(item, index) in projectsData"
        :data="item"
        :index="index"
        :key="Math.random() * 1000"
      />
    </div>
  </div>
</template>
