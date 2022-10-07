<template>
  <h2>handsome? {{ isHandsome }}</h2>
  <h3>{{ name }}</h3>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "TestComponent",
  setup() {
    let isHandsome = ref(false);
    const state = reactive({
      name: "scalper",
      age: 50,
      job: "programmer",
    });

    return {
      isHandsome,
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
