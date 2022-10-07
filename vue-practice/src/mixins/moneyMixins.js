export default {
  data() {
    return {
      totalMoney: 0,
    };
  },
  mounted() {
    console.log("component using mixin mounted");
  },
  methods: {
    addMoney(price) {
      this.totalMoney += price;
    },
  },
};
