import VueEllipseProgress from "vue3-circle-progress";
import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
// import VueEllipseProgress from "vue-ellipse-progress";

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
  RiCloseFill,
  RiPencilRuler2Fill,
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
  GiCardAceSpades,
  RiCloseFill,
  RiPencilRuler2Fill
);

createApp(App)
  .use(MotionPlugin)
  .component("v-icon", OhVueIcon)
  .component("vue-ellip", VueEllipseProgress)
  .use(Curtain)
  .mount("#app");
