<script setup>
const sampleData = [
  {
    label: "Address point",
    value: "Sargodha, Pakistan 40100",
    iconName: "io-map",
  },
  {
    label: "Mail Me",
    value: "muhammadking09@gmail.com",
    iconName: "hi-solid-mail-open",
  },
  {
    label: "Call Me",
    value: "+92 325 682 3910",
    iconName: "fa-phone-square-alt",
  },
];

const linksData = [
  {
    link: "https://www.linkedin.com/in/adan-ayaz-821025191/",
    iconName: "co-linkedin-in",
  },
  {
    link: "https://github.com/adan-ayaz-stan",
    iconName: "la-github-alt",
  },
  {
    link: "https://twitter.com/adanayaz1",
    iconName: "co-twitter",
  },
];
</script>

<template>
  <div
    class="w-10/12 grid grid-cols-1 lg:grid-cols-3 auto-rows-auto gap-6 m-auto"
  >
    <!--  -->
    <div class="col-span-1 flex flex-col gap-2">
      <h2 class="uppercase text-2xl" style="font-family: 'Daikon SemiBold'">
        Don't be shy!
      </h2>
      <p style="font-family: 'Daikon Light'">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>

      <div v-for="item in sampleData" class="flex flex-row gap-3 my-4">
        <v-icon
          :name="item.iconName"
          scale="2.5"
          style="color: var(--color-1)"
        />
        <p>
          <span class="block" style="font-family: 'Daikon Light'">{{
            item.label
          }}</span>
          <span>{{ item.value }}</span>
        </p>
      </div>

      <div class="flex flex-row gap-3">
        <a
          v-for="item in linksData"
          :href="item.link"
          class="rounded-full"
          style="background: var(--color-4)"
        >
          <v-icon
            :name="item.iconName"
            scale="2.35"
            class="p-3 rounded-full hover:bg-purple-400 transition-all duration-400 ease-out"
            style="color: var(--color-3)"
          />
        </a>
      </div>
    </div>

    <!-- Contact Form -->
    <form
      v-motion
      :initial="{ x: 100, opacity: 0 }"
      :enter="{
        x: 0,
        opacity: 1,
        transition: {
          delay: 500,
          duration: 700,
          type: 'keyframes',
          ease: 'easeOut',
        },
      }"
      class="col-span-2 flex flex-col gap-6 pb-16 lg:pb-0"
      action="https://formspree.io/f/xrgvbgnw"
      method="POST"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <input
          type="text"
          name="firstname"
          placeholder="FIRST NAME"
          class="px-5 py-3 rounded-full text-sm"
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder="LAST NAME"
          class="px-5 py-3 rounded-full text-sm"
          required
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="YOUR SUBJECT"
        class="px-5 py-3 rounded-full text-sm"
        required
      />

      <textarea
        name="message"
        placeholder="YOUR MESSAGE"
        class="px-5 py-3 rounded-3xl text-sm resize-y"
        required
        rows="10"
      />

      <button
        class="contact-form-button w-fit flex flex-row items-center gap-2"
        type="submit"
      >
        <p>Send Message</p>
        <v-icon name="co-telegram-plane" class="arrow-right p-2" scale="2.5" />
      </button>
    </form>
    <!-- FORM END -->
  </div>
</template>

<style scoped>
input,
textarea {
  background-color: var(--color-4);
}

input:focus,
textarea:focus {
  outline: none;
  outline: 1px var(--color-1) solid;
}

.contact-form-button {
  position: relative;

  text-transform: uppercase;
  font-family: "Daikon Bold";
  font-size: 0.9em;

  padding: 0;
  padding-left: 1.5em;

  margin: 1em;

  background: var(--color-2);
  color: var(--color-3);

  border: solid 1px var(--color-1);
  border-right: 0;
  border-radius: 999px;

  transition: all ease 0.4s;

  overflow: hidden;
}

/* button ::before */
.contact-form-button::before {
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
.contact-form-button:hover::before {
  left: 0;
}

.contact-form-button p,
.contact-form-button svg {
  z-index: 1;
}
.contact-form-button .arrow-right {
  background-color: var(--color-1);
  border-radius: 999px;
}
</style>
