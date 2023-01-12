<script setup>
const projectsData = [
  {
    name: "HOD Cult Site",
    tasks: [
      "Building the landing screen such that login is only available to the user when specific code of letters is active. In other words, a normal passer by cannot login.",
      "Built authentication logic for the sake of learning authentication and cookie handling.",
      "Built a landing screen for register/login",
    ],
    technologies: [""],
    goal: "",
  },
];
</script>

<template>
  <div>
    <div class="seperator" />

    <h1 class="w-full text-center pt-16 pb-8 uppercase">Personal Projects</h1>

    <div class="grid grid-cols-1 auto-rows-auto">
      <!-- Project single component -->
      <div class="border-2 flex flex-row">
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

        <div v-for="item in projectsData" class="flex flex-col gap-2">
          <h2>Project name</h2>

          <div>
            <h2>Tasks Achieved:</h2>

            <ul class="list-disc">
              <li v-for="i in item.tasks">{{ i }}</li>
            </ul>
          </div>

          <p>
            Technologies used:
            <span v-for="i in item.technologies">{{ i }}</span>
          </p>

          <p>
            Goal of the project: <span>{{ item.goal }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
