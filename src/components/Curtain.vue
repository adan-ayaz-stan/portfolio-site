<template>
  <div
    class="splash-screen"
    id="splash-screen"
    v-motion
    :initial="{
      top: '0%',
    }"
    :enter="{
      top: '100%',
      transition: {
        delay: 100,
        duration: 600,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    }"
  >
    <!-- Add your splash screen content here -->
  </div>
</template>

<style>
.splash-screen {
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-4);
  z-index: 9999; /* Make sure the splash screen is on top of other elements */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  transition: all ease-out 0.4s;
}
</style>

<script setup></script>
