<template>
  <div class="ml-4 w-[300px] bg-white h-[300px]  border-[1px] rounded-md">
    <client-only>
      <!-- <h2>Calendar</h2> -->
      <!-- <VCalendar v-model="date" /> -->
      <!-- <h2>Date Picker</h2> -->
      <VDatePicker is-expanded v-model="date" :attributes="attrs" />
    </client-only>
  </div>
</template>
<script setup lang="ts">
const date = ref(new Date())

const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'blue',
      fillMode: 'solid'
    },
    dates: new Date()
  }
])


</script>
<style></style>