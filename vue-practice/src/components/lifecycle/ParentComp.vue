<template>
  <h2>Parent Component</h2>
  <input v-model="nickname" ref="inputRef" />
  <button @click="consoleRef">console ref</button>
  <hr />
  <ChildComp v-if="showChild" ref="childComp" />
  <button @click="showChild = false">unmount child</button>
</template>

<script>
import ChildComp from "./ChildComp";
export default {
  name: "parentComp",
  data() {
    return {
      nickname: "",
      showChild: true,
    };
  },
  methods: {
    consoleRef() {
      this.$refs.inputRef.focus();
      this.$refs.inputRef.style.border = "1px solid red";
      console.log(this.$refs.inputRef, "input ref");
      console.log(this.$refs.childComp, "child ref");
      this.$refs.childComp.sayHello();
    },
  },
  components: {
    ChildComp,
  },
  beforeCreate() {
    console.log("parent before create");
  },
  created() {
    console.log("parent created");
  },
  beforeMount() {
    console.log("parent beforemount");
  },
  mounted() {
    console.log("parent mounted");
  },
  beforeUpdate() {
    // console.log("parent beforeupdate");
  },
  updated() {
    // console.log("parent updated");
  },
  beforeUnmount() {
    console.log("parent beforeUnmount");
  },
  unmounted() {
    console.log("parent unmounted");
  },
};
</script>

<style></style>
