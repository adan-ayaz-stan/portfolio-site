<script setup lang="ts">
const projectsData = [
  {
    name: "HOD Cult Site",
    tasks: [
      "Build Landing Page",
      "Code landing page logic",
      "Apply cookies logic",
      "Apply form validation",
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
  },
  {
    name: "The Bottle Haus Project",
    tasks: [
      "Built pages in several routes in NextJS",
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
  },
];
</script>

<template>
  <div>
    <div class="seperator" />

    <h1 class="w-full text-center pt-16 pb-8 uppercase">Personal Projects</h1>

    <div class="grid grid-cols-1 auto-rows-auto">
      <!-- Project single component -->
      <div v-for="item in projectsData" class="flex flex-row gap-4 px-12">
        <div
          class="relative"
          style="
            background: linear-gradient(
              90deg,
              var(--color-2) 48%,
              var(--color-4) 49%,
              var(--color-2) 50%
            );
          "
        >
          <v-icon
            name="ri-pencil-ruler-2-fill"
            scale="2.5"
            class="rounded-full p-2"
            style="background-color: var(--color-1)"
          />
        </div>
        <!--  -->

        <div class="w-full flex flex-col gap-2">
          <h2
            class="uppercase text-lg lg:text-xl pt-3"
            style="font-family: 'Daikon Bold'"
          >
            {{ item.name }}
          </h2>

          <hr
            class="border-none"
            style="
              height: 1px;
              background: linear-gradient(
                90deg,
                var(--color-1) 0%,
                var(--color-2) 87%
              );
            "
          />

          <div class="pl-4">
            <h2 class="underline text-lg">Tasks Achieved:</h2>

            <ul
              class="grid auto-rows-auto grid-cols-2 pl-4 text-sm list-inside list-disc"
              style="font-family: 'Daikon Light'"
            >
              <li v-for="i in item.tasks">{{ i }}</li>
            </ul>
          </div>

          <div class="pl-4">
            <h2 class="underline text-lg">Technologies used:</h2>
            <ul
              class="grid auto-rows-auto grid-cols-2 pl-4 text-sm list-inside list-disc"
              style="font-family: 'Daikon Light'"
            >
              <li v-for="i in item.technologies">{{ i }}</li>
            </ul>
          </div>

          <p class="py-4 pb-8">
            <span
              class="uppercase tracking-wider"
              style="font-family: 'Daikon Bold'"
              >Goal of the project:
            </span>
            <span class="text-green-500">{{ item.goal }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
