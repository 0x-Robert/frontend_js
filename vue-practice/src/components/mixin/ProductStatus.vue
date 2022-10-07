<template>
  <h2>전체 금액 {{ totalMoney }}</h2>
  <button @click="addMoney(100)">100</button>
  <button @click="addMoney(200)">200</button>
  <button @click="addMoney(300)">300</button>
  <button @click="addMoney(400)">400</button>
  <FeeStatus />
</template>

<script>
import moneyMixin from "../../mixins/moneyMixins";
import FeeStatus from "./FeeStatus.vue";
export default {
  name: "productStatus",
  mixins: [moneyMixin],
  components: { FeeStatus },
  data() {
    return { totalMoney: 0 };
  },
  methods: {},
};
</script>

<style></style>
