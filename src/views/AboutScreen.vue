<script setup>
import PersonalInformation from "../components/MoreAboutMe-mini-comps/PersonalInformation.vue";
import SkillsInformation from "../components/MoreAboutMe-mini-comps/SkillsInformation.vue";
import WorkExperience from "../components/MoreAboutMe-mini-comps/WorkExperience.vue";
import PersonalProjects from "../components/MoreAboutMe-mini-comps/PersonalProjects.vue";
</script>

<template>
  <!-- Content -->
  <div
    class="px-2 lg:px-16 py-2 lg:py-16"
    style="background-color: var(--color-2)"
  >
    <PersonalInformation />
    <SkillsInformation />
    <WorkExperience />
    <PersonalProjects />
  </div>
</template>
