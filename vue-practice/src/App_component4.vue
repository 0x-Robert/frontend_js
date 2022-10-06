<template>
  <div>
    <h1>Hello Components!</h1>
    <button @click="displayDetail = true">show detail</button>
    <DetailView
      v-if="displayDetail"
      @closeDetail="close"
      @sendData="showData"
    />
  </div>
</template>

<script>
import DetailView from "./components/DetailView";
export default {
  name: "App",
  components: {
    DetailView,
  },
  data() {
    return {
      displayDetail: false,
    };
  },
  methods: {
    close() {
      console.log("event emitted");
      this.displayDetail = false;
    },
    showData(data) {
      console.log(data, "send data");
    },
  },
  directives: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
