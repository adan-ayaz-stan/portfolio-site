<script setup lang="ts">
import projectPersonalProjects from "./projectPersonalProjects.vue";

const projectsData = [
  {
    name: "Conference App Nuxt",
    tasks: [
      "Plan and design the database structure for the application",
      "Apply authentication to the application",
      "Build logic to allow users to create conferences",
      "Allow users to interact with the conference and alter it's state",
    ],
    technologies: [
      "Nuxt 3",
      "pinia",
      "aos",
      "trpc",
      "prisma",
      "zod",
      "formkit",
      "Supabase",
    ],
    link: {
      github: "https://github.com/adan-ayaz-stan/conference-app-nuxt",
      hosted: "https://conference-nuxt.vercel.app/",
    },
  },
  {
    name: "Nuxt Chat Application",
    tasks: [
      "Plan and design the database structure for the application",
      "Apply authentication to the application",
      "Build logic to allow users to create chat sessions",
      "Allow users to chat with each other through messages",
    ],
    technologies: [
      "Nuxt 3",
      "formkit",
      "Supabase",
      "Tailwind CSS"
    ],
    link: {
      github: "https://github.com/adan-ayaz-stan/nuxt-chat-application",
      hosted: "https://nuxt-chat-application.vercel.app/",
    },
  },
  {
    name: "Kanban Ticketing System",
    tasks: [
      "Plan and design the database structure for the application",
      "Apply authentication and authorization to the application",
      "Build logic to allow users to create projects",
      "Code logic for task creation, task editing and task deletion",
      "Allow users to connect to each other inside the application",
    ],
    technologies: ["NextJS", "React", "React Query", "Supabase"],
    link: {
      github: "https://github.com/adan-ayaz-stan/kanban-ticketing-system",
      hosted: "https://kanban-ticketing-system.vercel.app/",
    },
  },
  {
    name: "The Bottle Haus Project",
    tasks: [
      "Fetching data from MongoDB database + rendering",
      "Applied filtering in the shopping route",
      "Applied dynamic routes for products",
      "Built a global shopping cart and it's logic",
    ],
    technologies: [
      "NextJS",
      "React",
      "Recoil",
      "Prisma",
      "Swiper",
      "react-hook-form",
    ],
    link: {
      github: "https://github.com/adan-ayaz-stan/the-bottle-haus-project",
      hosted: "https://adan-ayaz-project-03.vercel.app/",
    },
  },
  {
    name: "Drove Animated Site",
    tasks: [
      "Built a landing page",
      "Built a splash screen",
      "Animated parts of the application using Framer Motion",
    ],
    technologies: [
      "NextJS",
      "React",
      "Recoil",
      "Framer Motion",
      "Swiper",
      "react-scroll-parallax",
      "react-animated-cursor",
    ],
    goal: "Showcase my ability to create visually engaging and interactive user experiences.",
    link: {
      github: "https://github.com/adan-ayaz-stan/drove-animated-site",
      hosted: "http://drove-animated-site.vercel.app/",
    },
  },
];
</script>

<template>
  <div class="pb-16">
    <div class="seperator" />

    <h1
      class="w-full text-center pt-16 pb-8 uppercase"
      v-motion
      :initial="{ y: 60, opacity: 0 }"
      :visibleOnce="{
        y: 0,
        opacity: 1,
        transition: {
          duration: 700,
          type: 'keyframes',
          ease: 'easeOut',
        },
      }"
    >
      Personal Projects
    </h1>

    <div class="grid grid-cols-1 auto-rows-auto">
      <!-- Project single component -->
      <projectPersonalProjects v-for="item in projectsData" :data="item" />
    </div>
  </div>
</template>

<style scoped></style>
