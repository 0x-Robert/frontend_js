<template>
  <div>
    <GreetingUser
      :username="username"
      :numberOfVisit="numberOfVisit"
      :siteInfo="siteInfo"
    />
    <button @click="changeName">change</button>
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
    return {
      username: "scalper",
      numberOfVisit: undefined,
      siteInfo: undefined,
    };
  },
  methods: {
    changeName() {
      this.username = "yongari";
    },
  },
  directives: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
