import { ref, watch } from "vue";
export default function (title = "fdw") {
  const titleRef = ref(title);
  watch(
    titleRef,
    (newVal) => {
      document.title = newVal;
    },
    {
      immediate: true,
    }
  );
  return titleRef;
}
