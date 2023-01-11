<script setup>
const workExperienceData = [
  {
    position: "Web Developer",
    company: "MobTick",
    responsibilities: [
      "Responsible for website development, converting mockups into usable web presence with NextJS/ReactJS.",
      "Worked with NextJS and Firebase Firestore to develop a functioning web application.",
      "Multi-tasked across the role of front-end developer and database management since the provided database structure was dysfunctional.",
      "Engaged with client to plan and optimize site issues and queries.",
    ],
    period: {
      start: "06/2022",
      end: "07/2022",
    },
  },
  {
    position: "Freelance Web Developer",
    company: "Freelance Client",
    responsibilities: [
      "Built the requested component for a web app, converting the provided design and functioning logic into usable web presence with HTML5/CSS3 and JavaScript.",
      "Built the complex functioning component in HTML and Vanilla JavaScript for suitable integration into client's ASP.NET application using jQuery.",
      "Carried out an efficient workflow, delivering the requested code according to client's provided deadline of 3 days.",
    ],
    period: {
      start: "04/2022",
      end: "04/2022",
    },
  },
];
</script>

<template>
  <div>
    <div class="seperator" />

    <div
      class="grid grid-cols-1 lg:grid-cols-2 py-16 px-0 lg:px-8 gap-4"
      v-motion
      :initial="{ y: 100, opacity: 0 }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1500,
          duration: 700,
          type: 'keyframes',
          ease: 'easeOut',
        },
      }"
    >
      <!-- Single Work experience component -->

      <div class="flex flex-row p-4 gap-4" v-for="item in workExperienceData">
        <div
          class="relative"
          style="
            background: linear-gradient(
              90deg,
              var(--color-2) 48%,
              var(--color-4) 49%,
              var(--color-2) 50%
            );
          "
        >
          <v-icon
            name="bi-briefcase-fill"
            scale="2.5"
            class="rounded-full p-2"
            style="background-color: var(--color-1)"
          />
        </div>

        <div class="flex flex-col gap-2">
          <p
            class="w-fit text-sm rounded-full px-3 py-1 mx-4"
            style="background-color: var(--color-4)"
          >
            {{ item.period.start }} - {{ item.period.end }}
          </p>

          <h2
            class="uppercase text-lg lg:text-xl"
            style="font-family: 'Daikon SemiBold'"
          >
            {{ item.position }} ―
            <span class="text-md lg:text-lg">{{ item.company }}</span>
          </h2>

          <ul
            class="flex flex-col gap-2 list-disc"
            style="font-family: 'Daikon Light'"
          >
            <li
              v-for="li in item.responsibilities"
              class="text-sm lg:text-md"
              v-motion
              :initial="{ y: 100, opacity: 0 }"
              :visibleOnce="{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 700,
                  type: 'keyframes',
                  ease: 'easeOut',
                },
              }"
            >
              {{ li }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.seperator {
  width: 100%;
  height: 2px;

  background: radial-gradient(circle, var(--color-1) 0%, var(--color-2) 80%);
}
</style>
