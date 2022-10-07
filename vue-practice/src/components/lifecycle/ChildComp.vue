<template>
  <h2>Child Component</h2>
  <input type="text" v-model="username" />
</template>

<script>
export default {
  name: "childComp",
  data() {
    return {
      username: "",
    };
  },
  beforeCreate() {
    console.log("child before create");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child beforemount");
  },
  mounted() {
    console.log("child mounted");
  },
  beforeUpdate() {
    console.log("child beforeupdate");
  },
  updated() {
    console.log("child updated");
  },
  beforeUnmount() {
    console.log("child beforeUnmount");
  },
  unmounted() {
    console.log("child unmounted");
  },
};
</script>

<style></style>
