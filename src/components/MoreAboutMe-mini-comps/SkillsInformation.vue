<script setup>
import "vue3-circle-progress/dist/circle-progress.css";

const array = [
  {
    name: "Html",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "Css",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "TypeScript",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  },
  {
    name: "React",
    logo: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
  },
  {
    name: "NextJS",
    logo: "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",
  },
  {
    name: "Vue",
    logo: "https://cdn.iconscout.com/icon/free/png-256/vuejs-3-1175070.png",
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
      <div class="flex flex-col items-center gap-2" v-for="item in array">
        <img
          :src="item.logo"
          alt="logo"
          class="object-cover"
          style="height: 100px; width: 100px"
        />
        <p class="uppercase text-lg" style="font-family: 'Daikon SemiBold'">
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
