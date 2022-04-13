<script>
import { ref, h } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const increment = () => {
      counter.value++;
    };
    return () => {
      return (
        <div>
          <h2>当前计数{counter.value}</h2>
          <button onClick={increment}>+1</button>
        </div>
      );
    };
  },
};
</script>

<style></style>
