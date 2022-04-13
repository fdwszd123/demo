import { ref,computed } from "vue";
const useCounter= function () {
  const counter = ref(0);
  const addOne = () => counter.value++;
  const doubleCounter=computed(()=>counter.value*2)
  return {
    counter,
    addOne,
    doubleCounter
  };
}
export{useCounter}