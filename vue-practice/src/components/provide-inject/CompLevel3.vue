<template>
  <h2>component 3</h2>
  <h3>passed data from app = {{ name }}</h3>
</template>

<script>
export default {
  name: "comp3",
  inject: ["name"],
};
</script>

<style></style>
