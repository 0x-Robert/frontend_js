<template>
  <h2>Hello {{ username }}</h2>
</template>

<script>
export default {
  name: "GreetingUser",
  props: {
    username: String,
  },
};
</script>

<style scoped></style>
