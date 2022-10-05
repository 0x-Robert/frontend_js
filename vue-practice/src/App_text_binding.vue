<template>
  <div>
    <h1>Hello World</h1>
    <h1 id="title">hello title</h1>
    <h1 v-bind:id="title">hello title</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style></style>
