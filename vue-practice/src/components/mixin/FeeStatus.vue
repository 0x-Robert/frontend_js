<template>
  <h2>합산된 요금 {{ totalMoney }}</h2>
  <button @click="addMoney(50)">50</button>
  <button @click="addMoney(100)">100</button>
  <button @click="addMoney(150)">150</button>
  <button @click="addMoney(200)">200</button>
  <SavingStatus />
</template>

<script>
import moneyMixin from "../../mixins/moneyMixins";
import SavingStatus from "./SavingStatus";
export default {
  name: "feeStatus",
  mixins: [moneyMixin],
  components: { SavingStatus },
  data() {
    return {
      totalMoney: 0,
    };
  },
  methods: {},
};
</script>

<style></style>
