import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiSunFill,
  HiSolidMoon,
  HiSolidHome,
  BiPersonFill,
  BiBriefcaseFill,
  HiSolidMailOpen,
  IoChatbubblesSharp,
  HiArrowSmRight,
  BiArrowRightShort,
  GiCardAceSpades,
} from "oh-vue-icons/icons";

import App from "./App.vue";
import Curtain from "./components/Curtain.vue";

import "./style.css";

addIcons(
  BiSunFill,
  HiSolidMoon,
  HiSolidHome,
  BiPersonFill,
  BiBriefcaseFill,
  HiSolidMailOpen,
  IoChatbubblesSharp,
  HiArrowSmRight,
  BiArrowRightShort,
  GiCardAceSpades
);

createApp(App)
  .use(MotionPlugin)
  .component("v-icon", OhVueIcon)
  .use(Curtain)
  .mount("#app");
