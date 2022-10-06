<template>
  <div>
    <h1>Hello Vue!</h1>
    <h2>5년뒤 :: {{ add(5) }}</h2>
    <h2>10년뒤 :: {{ add(10) }}</h2>
    <h2>15년뒤 :: {{ add(15) }}</h2>
    <h2>20년뒤 :: {{ add(20) }}</h2>
    <h2>동갑의 10명이 있다면 나의 총 합은 {{ multiply(age, 20) }}</h2>
    <h2>{{ getTotalScore(100) }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      age: 30,
    };
  },
  methods: {
    add(num) {
      return this.age + num;
    },
    multiply(num1, num2 = 10) {
      return num1 * num2;
    },
    getTotalScore(num) {
      return this.multiply(num, num);
    },
    // 화살표 함수는 this를 인식하지 못함

    // add: (num) => {
    //   console.log(this);
    //   return this.age + num;
    // }
  },
};
</script>

<style></style>
