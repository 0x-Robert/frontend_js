<template>
  <div>
    <h1>Hello HTTP Request!</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/http/TodoList";
export default {
  name: "App",
  components: {
    TodoList,
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
