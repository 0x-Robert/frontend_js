<template>
  <div>
    <h1>Hello Composition!</h1>
    <!-- 컴포지션은 데이터의 재사용과 유지보수를 더 편리하게 하려고 사용함 -->
    <h2><TestComponent /></h2>
  </div>
</template>

<script>
import TestComponent from "./components/composition/TestComponent.vue";
export default {
  name: "App",
  components: {
    TestComponent,
  },
  data() {
    return {};
  },
  methods: {},
  directives: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
