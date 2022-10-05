<template>
  <div>
    <h1>Hello Vue!</h1>
    <h2 class="line-through">line-through</h2>
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

<style>
.line-through {
  text-decoration: line-through;
}
</style>
