<script setup>
const { data } = defineProps(["data"]);
</script>

<template>
  <div
    class="flex flex-row gap-4 px-4 lg:px-12"
    v-motion
    :initial="{
      y: 50,
      opacity: 0,
    }"
    :visibleOnce="{
      y: 0,
      opacity: 1,
      transition: {
        duration: 700,
      },
    }"
  >
    <div
      class="relative"
      v-motion
      :initial="{
        height: '0%',
      }"
      :visibleOnce="{
        height: '100%',
        transition: {
          delay: 400,
          duration: 700,
        },
      }"
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
        style="background-color: var(--color-1); color: var(--color-3)"
      />
    </div>
    <!--  -->

    <div class="w-full flex flex-col gap-2">
      <h2
        class="uppercase text-lg lg:text-xl pt-3"
        style="font-family: 'Daikon Bold'"
      >
        {{ data.name }}
      </h2>

      <hr
        v-motion
        :initial="{
          background:
            'linear-gradient(90deg, var(--color-1) 0%, var(--color-2) 0.5%)',
        }"
        :visibleOnce="{
          background:
            'linear-gradient(90deg, var(--color-1) 0%, var(--color-2) 87%)',
          transition: {
            delay: 400,
            duration: 700,
          },
        }"
        class="border-none"
        style="height: 2px"
      />

      <div class="pl-2 lg:pl-4">
        <h2 class="underline text-lg">Tasks Achieved:</h2>

        <ul
          class="grid auto-rows-auto grid-cols-1 lg:grid-cols-2 pl-4 text-sm list-inside list-disc"
          style="font-family: 'Daikon Light'"
        >
          <li v-for="i in data.tasks">{{ i }}</li>
        </ul>
      </div>

      <div class="pl-2 lg:pl-4">
        <h2 class="underline text-lg">Technologies used:</h2>
        <ul
          class="grid auto-rows-auto grid-cols-1 lg:grid-cols-2 pl-4 text-sm list-inside list-disc"
          style="font-family: 'Daikon Light'"
        >
          <li v-for="i in data.technologies">{{ i }}</li>
        </ul>
      </div>

      <p class="pt-4">
        <span
          class="uppercase tracking-wider"
          style="font-family: 'Daikon Bold'"
          >Goal of the project:
        </span>
        <span class="text-green-500">{{ data.goal }}</span>
      </p>

      <div class="flex flex-row gap-2 underline pb-8">
        <a :href="data.link.github">Github Repository</a>
        <a :href="data.link.hosted">Hosted Site</a>
      </div>
    </div>
  </div>
</template>
