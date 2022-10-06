<template>
  <div>
    <h1>Hello Vue!</h1>
    <CompLevel1 :username="username" />
  </div>
</template>

<script>
import CompLevel1 from "./components/provide-inject/CompLevel1";
export default {
  name: "App",
  components: { CompLevel1 },
  data() {
    return {
      username: "scalper",
    };
  },
  provide() {
    return {
      name: this.username,
    };
  },
  methods: {},
  directives: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
