<script setup>
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import homeIcon from "../assets/home-icon.png";

import { useRouterStore } from "../store/routing";

const store = useRouterStore();

store.$subscribe((mutaution, state) => {
  console.log("State changed");
});

const sampleArray = [
  {
    text: "Home",
    iconName: "hi-solid-home",
    activeValue: "home",
  },
  {
    text: "About",
    iconName: "bi-person-fill",
    activeValue: "about",
  },
  {
    text: "Contact",
    iconName: "hi-solid-mail-open",
    activeValue: "contact",
  },
  {
    text: "Portfolio",
    iconName: "bi-briefcase-fill",
    activeValue: "portfolio",
  },
  {
    text: "Tweets",
    iconName: "io-chatbubbles-sharp",
    activeValue: "tweets",
  },
];

const theme = ref("light");

function changeMode() {
  const mode = document.documentElement.getAttribute("data-theme");
  if (mode === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    theme.value = "light";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    theme.value = "dark";
  }
  return mode;
}
</script>

<template>
  <div class="main-side flex flex-col items-end p-4">
    <!-- Icons -->
    <div
      class="icon-mode-change w-fit rounded-full flex items-center justify-center cursor-pointer p-3"
      v-motion
      :initial="{
        opacity: 0,
        x: 20,
      }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: {
          delay: 1100,
          duration: 200,
          type: 'keyframes',
          ease: 'easeOut',
        },
      }"
      @click="changeMode()"
    >
      <v-icon name="hi-solid-moon" scale="1.25" v-if="theme == 'dark'" />
      <v-icon name="bi-sun-fill" scale="1.25" v-else />
    </div>

    <div
      class="sidebar-mains h-fit lg:h-full w-full flex flex-col items-end justify-center gap-6 my-auto"
    >
      <div
        v-for="(items, index) in sampleArray"
        class="icon w-fit rounded-full flex items-center justify-center gap-2 cursor-pointer p-3"
        v-motion
        :initial="{
          opacity: 0,
          x: 20,
        }"
        :enter="{
          opacity: 1,
          x: 0,
          transition: {
            delay: 200 * index + 1000,
            duration: 200,
            type: 'keyframes',
            ease: 'easeOut',
          },
        }"
        :style="{
          backgroundColor:
            items.activeValue == store.route ? 'var(--color-1)' : '',
        }"
        @click="store.setRoute(items.activeValue)"
      >
        <p>
          {{ items.text }}
        </p>
        <v-icon v-bind:name="items.iconName" scale="1.2" />
      </div>
    </div>

    <!--  -->
  </div>
</template>

<style scoped>
.main-side {
  position: fixed;
  top: 0;
  right: 0;

  height: 100%;
  min-width: 50px;

  z-index: 100;
}

.icon {
  color: var(--color-3);
  background-color: var(--color-4);
  transition: all ease 0.3s;
}

.icon-mode-change {
  color: var(--color-3);
  background-color: var(--color-4);
  transition: all ease 0.4s;
  z-index: 500;
}
.icon-mode-change:hover {
  background-color: var(--color-1);
}

.icon:hover {
  background-color: var(--color-1);
  border-radius: 0 999px 999px 0;
}

.icon p {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0%;
  right: 100%;

  height: 100%;
  width: fit-content;

  padding: 10px 15px;

  background-color: var(--color-1);

  text-transform: uppercase;
  font-size: 0.9rem;
  font-family: "Daikon Bold";

  border-radius: 999px;

  opacity: 0;

  clip-path: polygon(
    100% 30%,
    100% 14%,
    100% 0,
    100% 100%,
    100% 87%,
    100% 70%,
    100% 57%,
    100% 44%
  );

  transition: all ease 0.4s;
}

.icon:hover p {
  opacity: 1;
  border-radius: 999px 0 0 999px;
  clip-path: polygon(
    0 0,
    70% 0%,
    100% 0,
    100% 100%,
    70% 100%,
    0 100%,
    0% 70%,
    0% 30%
  );
}

@media only screen and (max-width: 810px) {
  .sidebar-mains {
    position: fixed;
    flex-flow: row;
    justify-content: space-evenly;
    left: 0;
    bottom: 0;

    padding: 8px;

    background: var(--color-2);

    z-index: 500;
  }

  .icon {
    z-index: 500;
  }

  .icon:hover {
    border-radius: 999px;
  }

  .icon p {
    display: none;
  }
}
</style>
