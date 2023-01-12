<script setup>
import "vue3-circle-progress/dist/circle-progress.css";

const array = [
  {
    name: "Html",
    level: 60,
  },
  {
    name: "Css",
    level: 85,
  },
  {
    name: "JavaScript",
    level: 95,
  },
  {
    name: "TypeScript",
    level: 85,
  },
  {
    name: "React",
    level: 85,
  },
  {
    name: "NextJS",
    level: 85,
  },
  {
    name: "Vue",
    level: 65,
  },
];
</script>

<template>
  <div class="main-skillsinformation pt-12">
    <div class="seperator" />

    <div
      class="h-fit grid grid-cols-2 md:grid-cols-4 auto-rows-auto p-8 py-16 gap-8 text-3xl md:text-4xl"
      style="font-family: 'Daikon Black'"
      v-motion
      :initial="{ y: 100, opacity: 0 }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          type: 'keyframes',
          ease: 'easeOut',
          duration: 600,
          delay: 200,
        },
      }"
    >
      <div
        class="progress-wrapper-circular flex flex-col items-center gap-2"
        v-for="item in array"
      >
        <vue-ellip
          :percent="item.level"
          :size="120"
          :fill-color="'#8448fd'"
          :border-width="8"
          :border-bg-width="8"
          :show-percent="true"
          :transition="2500"
          class="circular-progress"
        />
        <p class="uppercase text-lg" style="font-family: 'Daikon SemiBold'">
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
