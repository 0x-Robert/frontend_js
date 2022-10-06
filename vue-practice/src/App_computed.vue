<template>
  <div>
    <h1>Computed</h1>
    <!-- 주기적으로 계산할 필요가 없는 것들은 coumputed로 하면 된다. method는 값이 변할 때마다 업데이트하므로 성능에 영향을 줄 수 있음 -->
    <h2>{{ address }}</h2>
    <h2>
      내가 받은 점수의 합 {{ grade.math + grade.kor + grade.eng + grade.sci }}
    </h2>
    <h2>내가 받은 점수의 합(computed) {{ totalScore }}</h2>
    <h2>내가 받은 점수의 합(methods) {{ totalScore }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "scalper",
      address1: "성남시",
      address2: "분당구",
      address3: "정자로",
      grade: {
        math: 70,
        kor: 90,
        eng: 50,
        sci: 55,
      },
    };
  },
  methods: {
    getTotalScore() {
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
    },
  },
  computed: {
    address() {
      return `${this.address1} - ${this.address2} - ${this.address3}`;
    },
    totalScore() {
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
    },
  },
};
</script>

<style></style>
