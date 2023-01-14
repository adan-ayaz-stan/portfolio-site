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
  RiCloseFill,
  RiPencilRuler2Fill,
  IoMap,
  FaPhoneSquareAlt,
  CoTelegramPlane,
  CoFacebookF,
  CoLinkedinIn,
  LaGithubAlt,
  CoTwitter,
} from "oh-vue-icons/icons";

import App from "./App.vue";
import Curtain from "./components/Curtain.vue";

import "./style.css";
import { createPinia, setActivePinia } from "pinia";

const pinia = createPinia();
setActivePinia(pinia);

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
  RiPencilRuler2Fill,
  IoMap,
  FaPhoneSquareAlt,
  CoTelegramPlane,
  CoFacebookF,
  CoLinkedinIn,
  LaGithubAlt,
  CoTwitter
);

createApp(App)
  .use(pinia)
  .use(MotionPlugin)
  .component("v-icon", OhVueIcon)
  .use(Curtain)
  .mount("#app");
