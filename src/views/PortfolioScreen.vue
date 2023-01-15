<script setup>
import PortfolioProjects from "../components/PortfolioProjects.vue";
</script>

<template>
  <div
    class="overflow-x-hidden"
    style="min-height: 100vw; background: var(--color-2)"
  >
    <!-- Headings -->
    <div
      v-motion
      :initial="{ y: 100, opacity: 0 }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          type: 'keyframes',
          ease: 'easeOut',
          duration: 600,
        },
      }"
      class="headings-portfolioscreen"
    >
      <h1 class="text-5xl lg:text-9xl tracking-wider">Works</h1>
      <h1 class="w-full text-3xl lg:text-6xl">
        My <span style="color: var(--color-1)">Portfolio</span>
      </h1>
    </div>

    <!--  -->
    <PortfolioProjects />
  </div>
</template>

<style scoped>
.headings-portfolioscreen {
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-family: "URW Geometric Bold";
  padding: 2.5em 0;
}

.headings-portfolioscreen h1:first-child {
  color: var(--color-4);
}
.headings-portfolioscreen h1:last-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
