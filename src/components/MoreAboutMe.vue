<script setup>
import PersonalInformationVue from "./MoreAboutMe-mini-comps/PersonalInformation.vue";
import SkillsInformationVue from "./MoreAboutMe-mini-comps/SkillsInformation.vue";

import { defineProps } from "vue";
import WorkExperience from "./MoreAboutMe-mini-comps/WorkExperience.vue";

const { custom } = defineProps(["custom"]);

function closeModal(e) {
  custom();
}
</script>

<template>
  <div
    class="main-moreaboutme h-full w-full flex justify-center items-center py-20 md:py-12"
    @click="closeModal(e)"
  >
    <!-- Content -->
    <div
      class="content-moreaboutme relative h-full w-11/12 lg:w-10/12 border-solid border-gray-700 border-2 rounded overflow-scroll py-12 lg:py-0"
      @click.stop=""
    >
      <!-- Close Icon -->
      <div
        class="close-icon-moreaboutme flex justify-center items-center rounded-sm cursor-pointer"
        @click="closeModal()"
      >
        <v-icon name="ri-close-fill" scale="1.5" />
      </div>

      <PersonalInformationVue />
      <SkillsInformationVue />
      <WorkExperience />
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

.close-icon-moreaboutme {
  position: absolute;
  top: 10px;
  right: 10px;

  height: 40px;
  width: 40px;

  background-color: var(--color-1);

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
