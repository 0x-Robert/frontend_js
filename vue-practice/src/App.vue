<template>
  <div>
    <GreetingUser username="scalper" />
    <GreetingUser />
    <GreetingUser />
    <GreetingUser />
    <GreetingUser />
  </div>
</template>

<script>
import GreetingUser from "./components/GreetingUser";
export default {
  name: "App",
  components: {
    GreetingUser,
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
