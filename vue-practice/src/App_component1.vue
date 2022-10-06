<template>
  <div>
    <GreetingUser
      :username="username"
      :numberOfVisit="numberOfVisit"
      :siteInfo="siteInfo"
    />
    <GreetingUser username="dooli" />
    <GreetingUser username="test " />
    <GreetingUser username="abc" />
    <GreetingUser />
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
      siteInfo: {
        name: "vue practice",
        teacher: "scalper",
        subject: "frontend",
      },
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
