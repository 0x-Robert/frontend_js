<template>
  <div class="wrapper">
    <div class="container">
      <h2>Detail Page</h2>
      <button @click="closeDetail">close</button>
      <input type="text" v-model="username" />
      <button @click="sendData">send Data</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailPage",
  data() {
    return {
      username: "",
    };
  },
  //prop으로 넘겨받은 값은 수정할 수 없다. 단 prop의 property는 수정할 수 있다.
  methods: {
    closeDetail() {
      //부모로 이벤트 전송
      this.$emit("closeDetail");
    },
    sendData() {
      this.$emit("sendData", this.username);
    },
  },
};
</script>

<style scoped>
.wrapper {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: #fff;
  width: 60%;
}
</style>
