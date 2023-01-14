<script setup>
const sampleData = [
  {
    label: "Address point",
    value: "123 Street New York City, United States of America 750054",
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
</script>

<template>
  <div class="w-10/12 grid grid-cols-3 auto-rows-auto m-auto">
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
    </div>
    <div class="col-span-2">Form</div>
  </div>
</template>
