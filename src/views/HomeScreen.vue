<script setup>
import MoreAboutMe from "../components/MoreAboutMe.vue";
import { ref } from "vue";

const showModal = ref(false);

function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <div class="main-home w-screen sm:h-fit relative py-16 lg:py-0">
    <Transition name="fade">
      <MoreAboutMe v-if="showModal" :custom="closeModal" />
    </Transition>

    <div
      class="h-screen w-full flex flex-col md:flex-row items-center justify-center"
    >
      <!-- Profile -->
      <div class="relative w-9/12 lg:w-1/2 flex items-center justify-end">
        <img
          src="https://i.ibb.co/N62Vx41/IMG-20230109-183541.jpg"
          alt="profile"
          style="max-width: 400px"
          class="rounded-3xl shadow-xl w-full object-contain mx-auto"
          loading="lazy"
        />
      </div>

      <!-- Content -->

      <div
        class="main-screen-content w-full lg:w-1/2 mx-auto gap-4 flex flex-col justify-center p-4"
      >
        <div class="flex flex-row items-center lg:flex-row lg:gap-2">
          <!--  -->

          <!--  -->

          <!-- FLIP CARD -->
          <div class="flip-card">
            <div
              class="flip-card-inner"
              v-motion
              :initial="{ rotateY: 0 }"
              :enter="{
                rotateY: 360,
                transition: {
                  duration: 10000,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  type: 'keyframes',
                  ease: 'linear',
                },
              }"
            >
              <div class="flip-card-front">
                <v-icon name="gi-card-ace-spades" scale="5.5" />
              </div>
              <div class="flip-card-back">
                <v-icon name="gi-card-king-spades" scale="5.5" />
              </div>
            </div>
          </div>

          <div class="text-sm lg:text-xl">
            <h1>Adan Ayaz</h1>
            <h1>Web Developer</h1>
          </div>
        </div>

        <p
          class="w-full lg:w-5/6 text-center lg:text-left px-4 lg:px-0 leading-normal lg:leading-loose"
        >
          I'm a front-end developer and web designer from Asia that focuses on
          creating aesthetically pleasing and intuitive user interfaces. I'm
          passionate about creating top-notch software that makes the lives of
          those around me better.
        </p>

        <button
          class="more-about-me-button w-fit flex flex-row items-center gap-2"
          @click="showModal = true"
        >
          <p>More about me</p>
          <v-icon name="bi-arrow-right-short" class="arrow-right" scale="2.5" />
        </button>
      </div>
    </div>
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

  color: var(--color-3);
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

/* Tranisitons */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* FLIP CARD */
.flip-card {
  background-color: transparent;
  width: 100px;
  height: 100px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: var(--color-2);
  color: var(--color-1);
}

.flip-card-back {
  background-color: var(--color-2);
  color: var(--color-1);
  transform: rotateY(180deg);
}
</style>
