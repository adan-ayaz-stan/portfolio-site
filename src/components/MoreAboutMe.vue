<template>
  <div
    class="main-moreaboutme h-full w-full flex justify-center items-center py-12"
  >
    <!-- Content -->
    <div
      class="content-moreaboutme h-full w-10/12 border-solid border-gray-700 border-2 rounded"
    >
    <!-- Headings -->
      <div class="headings-moreaboutme">
        <h1 class="text-9xl tracking-wider">RESUME</h1>
        <h1 class="text-6xl">
          About <span style="color: var(--color-1)">Me</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-moreaboutme {
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(11, 11, 11, 0.814);

  z-index: 100;
}

.content-moreaboutme {
  background-color: var(--color-2);
}

.headings-moreaboutme {
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-family: "URW Geometric Bold";
  padding: 2.5em 0;
}

.headings-moreaboutme h1:first-child {
  color: var(--color-4);
}
.headings-moreaboutme h1:last-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script setup></script>
