<template>
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
    class="headings-personalinformation"
  >
    <h1 class="text-6xl lg:text-9xl tracking-wider">RESUME</h1>
    <h1 class="text-3xl lg:text-6xl">
      About <span style="color: var(--color-1)">Me</span>
    </h1>
  </div>

  <!-- Content -->
  <div
    class="w-full grid grid-cols-1 lg:grid-cols-2 px-6"
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
    <div class="p-4">
      <!-- Personal Infos || Left Side Content -->
      <h2
        class="block text-3xl uppercase mb-2"
        style="font-family: 'Daikon SemiBold'"
      >
        Personal Infos
      </h2>

      <div
        class="w-full grid grid-cols-1 lg:grid-cols-2 auto-rows-auto items-center gap-4 p-4"
      >
        <!--  -->
        <p v-for="item in personalInfo">
          <span style="font-family: 'Daikon Light'">{{ item.label }}: </span>

          <!-- Rendering links  -->
          <a :href="item.link" v-if="item.type == 'link'">{{ item.value }}</a>

          <!--  -->
          <span v-else :style="{ color: item.color ? item.color : '' }">{{
            item.value
          }}</span>
        </p>
      </div>
    </div>

    <!-- History || Right Side Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-4">
      <!--  -->
      <div
        v-for="item in progressInfo"
        class="px-4 py-6 border-solid border-2 border-gray-800 rounded-2xl"
      >
        <h2
          class="text-6xl"
          style="font-family: 'Daikon Bold'; color: var(--color-1)"
        >
          {{ item.value }}<sup>+</sup>
        </h2>
        <p class="uppercase text-lg flex gap-4 items-start px-4">
          <span class="text-5xl" style="color: var(--color-1)">―</span>
          {{ item.label }}
        </p>
      </div>
    </div>
    <!--  -->

    <a
      href="https://mega.nz/file/FIZnGTrC#HzEEzu8dvwo04WWLL-_gjt-oi2VPXW4sG3AJeOkN0bM"
      download
      class="more-about-me-button w-fit flex flex-row items-center gap-2"
    >
      <p>Download CV</p>
      <v-icon name="bi-arrow-right-short" class="arrow-right" scale="2.5" />
    </a>
  </div>
  <!--  -->
</template>

<style scoped>
.headings-personalinformation {
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-family: "URW Geometric Bold";
  padding: 2.5em 0;
}

.headings-personalinformation h1:first-child {
  color: var(--color-4);
}
.headings-personalinformation h1:last-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
</style>

<script setup>
const personalInfo = [
  {
    label: "First Name",
    value: "Adan",
  },
  {
    label: "Last Name",
    value: "Ayaz",
  },
  {
    label: "Age",
    value: "18",
  },

  {
    label: "Freelance",
    value: "Available",
    color: "#39e75f",
  },
  {
    label: "Phone Number",
    value: "+92 325 682 3910",
  },
  {
    label: "Email",
    value: "muhammadking09@gmail.com",
  },
  {
    label: "Twitter",
    link: "https://twitter.com/AdanAyaz1",
    value: "AdanAyaz1",
    type: "link",
  },
  {
    label: "Github",
    link: "https://github.com/adan-ayaz-stan",
    value: "adan-ayaz-stan",
    type: "link",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/adan-ayaz-821025191/",
    value: "Adan Ayaz",
    type: "link",
  },
  {
    label: "Languages",
    value: "English, Urdu",
  },
];

const progressInfo = [
  {
    label: "Years of experience",
    value: 2,
  },
  {
    label: "Completed Projects",
    value: 6,
  },
  {
    label: "Happy Customers",
    value: 2,
  },
  {
    label: "Collaborations Done",
    value: 1,
  },
];
</script>
