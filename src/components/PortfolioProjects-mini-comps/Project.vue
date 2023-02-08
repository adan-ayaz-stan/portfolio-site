<script setup lang="ts">
import { ref } from "vue";

const { data, index } = defineProps(["data", "index"]);

const isHovered = ref(false);
</script>

<template>
  <div
    :href="data.link"
    class="block md:hidden flex flex-col gap-4"
    v-motion
    :initial="{
      opacity: 0,
      y: 50,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        delay: 300 * index,
        duration: 500,
        type: 'keyframes',
        ease: 'easeOut',
      },
    }"
  >
    <img
      :src="data.image"
      :alt="data.name"
      :style="{ boxShadow: '5px 5px 5px var(--color-1)' }"
      loading="lazy"
      class="object-cover"
    />
    <div class="w-full flex justify-between uppercase text-sm">
      <a
        :href="data.link"
        class="p-2 rounded-md"
        style="background: var(--color-4)"
        >Hosted Site</a
      >
      <a
        :href="data.github"
        class="p-2 rounded-md"
        style="background: var(--color-4)"
        >Github Repo</a
      >
    </div>
  </div>

  <div
    class="min-h-[200px] max-h-[300px] hidden md:block relative overflow-hidden transition-all duration-700"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :style="{
      boxShadow: isHovered
        ? `${index % 2 == 1 ? '-5' : '5'}px 5px 5px var(--color-1)`
        : '5px 5px 5px var(--color-2)',
    }"
    v-motion
    :initial="{
      x: index % 2 == 1 ? 100 : -100,
      opacity: 0,
    }"
    :visibleOnce="{
      x: 0,
      opacity: 1,
      transition: {
        delay: 300,
        duration: 300,
        type: 'keyframes',
        ease: 'easeIn',
      },
    }"
  >
    <img :src="data.image" :alt="data.name" class="object-cover" />

    <!-- Details -->
    <div
      class="absolute w-full h-full bg-black bg-opacity-80 transition-all duration-500 ease-out flex flex-col items-center justify-center gap-2 p-4"
      :style="{
        top: isHovered ? '0%' : '-100%',
        right: isHovered ? '0%' : '100%',
      }"
    >
      <p
        class="anim-typewriter w-fit text-center uppercase text-xl lg:text-2xl m-0 overflow-hidden whitespace-nowrap"
        style="font-family: 'Daikon Black'"
        v-if="isHovered"
        v-motion
        :initial="{
          opacity: 0,
        }"
        :enter="{
          opacity: 1,
          transition: {
            delay: 400,
            duration: 400,
          },
        }"
      >
        {{ data.name }}
      </p>
      <div class="flex flex-row gap-4">
        <a
          :href="data.github"
          class="text-lg m-0"
          style="font-family: 'Daikon Black'"
          v-if="isHovered"
          v-motion
          :initial="{
            opacity: 0,
            x: -50,
          }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              delay: 500,
              duration: 200,
              type: 'spring',
              stiffness: 700,
              damping: 20,
            },
          }"
          target="_blank"
        >
          Github
        </a>
        <a
          :href="data.link"
          class="text-lg m-0"
          style="font-family: 'Daikon Black'"
          v-if="isHovered"
          v-motion
          :initial="{
            opacity: 0,
            x: 50,
          }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              delay: 700,
              duration: 200,
              type: 'spring',
              stiffness: 700,
              damping: 20,
            },
          }"
          target="_blank"
        >
          Hosted Site
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animation */
.anim-typewriter {
  animation: typewriter 1.5s steps(100) 1s 1 normal both;
}
@keyframes typewriter {
  from {
    width: 0%;
  }
  to {
    width: 100%;
    max-width: fit-content;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
