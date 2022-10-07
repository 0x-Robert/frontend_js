<template>
  <div>
    <h1>Hello LifeCycle !</h1>
    <ParentComp />
  </div>
</template>

<script>
import ParentComp from "./components/lifecycle/ParentComp";

export default {
  name: "App",
  components: { ParentComp },
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
