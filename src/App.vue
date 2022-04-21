<template>
  <div id="app">
    <h2>{{ $name }}</h2>
    <span v-format-time="'YYYY/MM/DD HH-ss-mm'">{{ time }}</span>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const time = "1650008238";
    return {
      time,
    };
  },
  // directives: {
  //   focus: {
  //     mounted(el) {
  //       el.focus();
  //     },
  //   },
  // },
};
</script>

<style></style>
