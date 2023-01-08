<template>
  <div class="splash-screen" id="splash-screen">
    <!-- Add your splash screen content here -->
  </div>
</template>

<style>
.splash-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-4);
  z-index: 9999; /* Make sure the splash screen is on top of other elements */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

<script setup>
setTimeout(() => {
  document.getElementById("splash-screen").style.top = "100%";
}, 800);
</script>
