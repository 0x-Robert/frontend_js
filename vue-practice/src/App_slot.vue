<template>
  <div>
    <h1>Hello slot!</h1>
    <CardView>
      <template v-slot:header>
        <H3>Random Image</H3>
      </template>
      <template v-slot:body>
        <img src="https://placeimg.com/200/100/any" alt="" />
      </template>
      <template v-slot:footer>
        <small>thank you</small>
      </template>
    </CardView>

    <!-- <CardView>
      <img src="https://placeimg.com/100/50/any" alt="random" />
    </CardView>
    <CardView>
      <ul>
        <li>짬뽕</li>
        <li>짜장면</li>
      </ul>
    </CardView> -->
  </div>
</template>

<script>
import CardView from "./components/slot/CardView.vue";
export default {
  name: "App",
  components: {
    CardView,
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
