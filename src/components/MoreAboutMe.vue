<script setup>
import { defineProps } from "vue";

const { custom } = defineProps(["custom"]);

console.log(custom);

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
    label: "Nationality",
    value: "Pakistani",
  },
  {
    label: "Freelance",
    value: "Available",
  },
  {
    label: "Address",
    value: "Sargodha, Punjab",
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
    value: "www.twitter.com/AdanAyaz1",
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

function closeModal(e) {
  custom();
}
</script>

<template>
  <div
    class="main-moreaboutme h-full w-full flex justify-center items-center py-12"
    @click="closeModal(e)"
  >
    <!-- Content -->
    <div
      class="content-moreaboutme relative h-full w-11/12 lg:w-10/12 border-solid border-gray-700 border-2 rounded overflow-scroll py-12 lg:py-0"
      @click.stop=""
    >
      <!-- Close Icon -->
      <div
        class="close-icon-moreaboutme flex justify-center items-center border-2 border-gray-700 rounded-sm cursor-pointer"
        @click="closeModal()"
      >
        <v-icon name="ri-close-fill" scale="1.5" />
      </div>

      <!-- Headings -->
      <div
        v-motion
        :initial="{ y: 100, opacity: 0 }"
        :visibleOnce="{
          y: 0,
          opacity: 1,
          transition: {
            type: 'keyframes',
            ease: 'easeOut',
            duration: 600,
          },
        }"
        class="headings-moreaboutme"
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
        :visibleOnce="{
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
            class="w-full grid grid-cols-1 lg:grid-cols-2 auto-rows-auto items-center gap-4"
          >
            <!--  -->
            <p v-for="item in personalInfo">
              <span style="font-family: 'Daikon Light'">{{ item.label }}:</span>
              {{ item.value }}
            </p>
          </div>
        </div>

        <!-- Right Side Content -->
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

.close-icon-moreaboutme {
  position: absolute;
  top: 10px;
  right: 10px;

  height: 40px;
  width: 40px;

  z-index: 10;

  transition: all ease-out 0.4s;
}
.close-icon-moreaboutme:hover {
  border-color: var(--color-1);
}
@media only screen and (max-width: 810px) {
  .close-icon-moreaboutme {
    right: 50%;
    transform: translate(50%, 0);

    width: 80%;
  }
}
</style>
