<script setup lang="ts">
import { ref } from "vue";
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
    name: "Authentication Site",
    link: "https://authentication-site.vercel.app/",
    github: "https://github.com/adan-ayaz-stan/authentication-site",
    image:
      "https://i.ibb.co/6NgHZsR/Screenshot-2023-01-17-at-20-11-55-Create-Next-App.png",
  },
  {
    name: "The Bottle Haus Project",
    link: "https://adan-ayaz-project-03.vercel.app/",
    github: "https://github.com/adan-ayaz-stan/the-bottle-haus-project",
    image:
      "https://i.ibb.co/kh3Wz5G/Screenshot-2023-01-14-at-16-03-43-The-Bottle-Haus-Home.png",
  },
  {
    name: "Drove Animated Site",
    link: "https://drove-animated-site.vercel.app/",
    github: "https://github.com/adan-ayaz-stan/drove-animated-site",
    image:
      "https://i.ibb.co/Gxr9Fbb/Screenshot-2023-01-14-at-16-06-57-Drove-Home.png",
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
