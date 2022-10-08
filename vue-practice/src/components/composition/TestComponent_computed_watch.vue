<template>
  <h2>hello composition api</h2>
  <h3>{{ name }}</h3>
  <div>
    price <input type="number" v-model="price" />amount
    <input type="number" v-model="amount" />
    <h3>Total Price :: {{ totalPrice }}</h3>
  </div>
  <hr />
  <div>
    first<input type="text" v-model="home.city" /> last
    <input type="text" v-model="last" />
    <h3>Full Name :: {{ fullName }}</h3>
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from "vue";
export default {
  name: "TestComponent",
  setup() {
    const username = ref("scalper");
    const price = ref(5000);
    const amount = ref(1);
    const totalPrice = computed(() => {
      return price.value + amount.value;
    });
    watch(price, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    const state = reactive({
      first: "Code",
      last: "Scalper",
      home: {
        city: "Seoul",
        type: "Apartment",
      },
    });
    const fullName = computed(function () {
      return `${state.first} ${state.last}`;
    });
    watch(
      () => {
        return state.first;
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    );

    watch(
      () => {
        return { ...state.home };
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { deep: true }
    );
    return {
      username,
      price,
      amount,
      totalPrice,
      ...toRefs(state),
      fullName,
      Code,
    };
  },
};
</script>

<style></style>
