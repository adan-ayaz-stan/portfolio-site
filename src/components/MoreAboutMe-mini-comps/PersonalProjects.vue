<script setup lang="ts">
import projectPersonalProjects from "./projectPersonalProjects.vue";

const projectsData = [
  {
    name: "Kanban Ticketing System",
    tasks: [
      "Plan and design the database structure for the application",
      "Apply authentication and authorization to the application",
      "Build logic to allow users to create projects",
      "Code logic for task creation, task editing and task deletion",
      "Allow users to connect to each other inside the application",
    ],
    technologies: ["NextJS", "React", "Supabase"],
    goal: "Create a real world project to showcase my abilities to work on large applications.",
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
    goal: "Analyzing the challenges faced in building an e-commerce site.",
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
  {
    name: "Authentication Page",
    tasks: [
      "Apply cookies logic",
      "Code authentication logic",
      "Set login page",
      "Hash passwords",
      "Store logins in database",
    ],
    technologies: [
      "NextJS",
      "React",
      "Recoil",
      "Firebase",
      "jsonwebtoken",
      "bcrypt",
      "cookies-next",
      "formik",
    ],
    goal: "Understanding the general procedure of authentication in web applications.",
    link: {
      github: "https://github.com/adan-ayaz-stan/authentication-site",
      hosted: "https://authentication-site.vercel.app/",
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
