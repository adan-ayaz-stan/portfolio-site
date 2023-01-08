<script setup>
import Sidebar from "./Sidebar.vue";
import CurtainVue from "./Curtain.vue";
</script>

<template>
  <div class="main-home w-screen sm:h-fit relative py-16 lg:py-4">
    <CurtainVue />

    <div
      class="h-full w-full grid grid-cols-1 md:grid-cols-2 justify-center md:px-20 lg:px-28"
    >
      <!-- Profile -->
      <div
        class="relative w-11/12 sm:w-10/12 md:w-11/12 lg:w-10/12 p-8 mx-auto"
      >
        <img
          src="https://tunis-nextjs.vercel.app/assets/img/hero/dark.jpg"
          alt="profile"
          class="h-full w-full object-cover rounded-3xl shadow-xl"
          loading="lazy"
        />
      </div>

      <!-- Content -->

      <div
        class="main-screen-content w-11/12 mx-auto gap-4 flex flex-col justify-center"
      >
        <div class="flex flex-row items-center lg:flex-row lg:gap-2">
          <h1 class="text-8xl">♠</h1>

          <div class="text-sm lg:text-xl">
            <h1>Steve Miller</h1>
            <h1>Web Developer</h1>
          </div>
        </div>

        <p class="w-full lg:w-5/6 leading-normal lg:leading-loose">
          I'm a Tunisian based web designer & front‑end developer focused on
          crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>

        <button
          class="more-about-me-button w-fit flex flex-row items-center gap-2"
        >
          <p>More about me</p>
          <v-icon name="bi-arrow-right-short" class="arrow-right" scale="2.5" />
        </button>
      </div>
    </div>

    <Sidebar />
  </div>
</template>

<style scoped>
.main-home {
  min-height: 100vh;
  background: linear-gradient(75deg, var(--color-1) 24.9%, var(--color-2) 25%);
  overflow: hidden;
}
@media only screen and (max-width: 810px) {
  .main-home {
    background: var(--color-2);
  }
}

.main-screen-content h1 {
  text-transform: uppercase;
}
.main-screen-content h1:first-child {
  color: var(--color-1);
}

.more-about-me-button {
  position: relative;

  text-transform: uppercase;
  font-family: "Daikon Bold";
  font-size: 0.9em;

  padding: 0;
  padding-left: 1.5em;

  margin: 1.5em;

  background: var(--color-2);

  border: solid 1px var(--color-1);
  border-right: 0;
  border-radius: 999px;

  transition: all ease 0.4s;

  overflow: hidden;
}

/* More button ::before */
.more-about-me-button::before {
  content: "";

  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 100%;

  background: var(--color-1);

  transition: all cubic-bezier(0.69, -0.03, 0.39, 0.97) 0.7s;

  border-radius: 999px;
}
.more-about-me-button:hover::before {
  left: 0;
}

.more-about-me-button p,
.more-about-me-button svg {
  z-index: 1;
}
.more-about-me-button .arrow-right {
  background-color: var(--color-1);
  border-radius: 999px;
}
</style>
