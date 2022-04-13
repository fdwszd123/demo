<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="addOne">+1</button>
    <button>-1</button>
    <button>{{ doubleCounter }}</button>
    <p class="content"></p>
    <div class="scroll">
      <h2 class="scroll-x">scrollX:{{scrollX}}</h2>
      <h2 class="scroll-y">scrollY:{{scrollY}}</h2>
    </div>
  </div>
</template>

<script>
import { useCounter } from "./hooks/useCounter";
import useTitle from "./hooks/useTitle";
import useScrollPostion from "./hooks/useScrollPostion";
export default {
  setup() {
    const { counter, addOne, doubleCounter } = useCounter();
    const titleRef = useTitle("fantasy");
    setTimeout(function () {
      titleRef.value = "fantasy";
    }, 4000);
    const { scrollX, scrollY } = useScrollPostion();
    return {
      counter,
      addOne,
      scrollX,
      scrollY,
      doubleCounter,
    };
  },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 3000px;
}
.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
