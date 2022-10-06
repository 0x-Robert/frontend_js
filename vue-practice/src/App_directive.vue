<template>
  <div>
    <h1>Hello Vue!</h1>
    <h2>Directives</h2>
    <h2 v-once>유저의 이름은 {{ userName }}</h2>
    <button @click="changeName">change name</button>
    <h2 v-pre>{{ userName }}</h2>
    <input v-focus type="text" />
    highlight => <input type="text" v-highlight />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "scalper",
    };
  },
  methods: {
    changeName() {
      console.log("name change");
      this.userName = "code!!!";
    },
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    highlight: {
      mounted(el) {
        console.log({ el });
        el.oninput = () => {
          el.style.background = "salmon";
          el.style.color = "#fff";
        };
      },
    },
  },
};
</script>

<style></style>
