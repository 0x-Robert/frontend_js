<template>
  <div>
    <h1>Hello Vue!</h1>
    <ul>
      <template v-for="(city, index) in cities">
        <li :key="index" v-if="city.province === '경상도'">
          {{ city.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cities: [
        { name: "서울", province: "경기도" },
        { name: "대전", province: "충청도" },
        { name: "대구", province: "경상도" },
        { name: "부산", province: "경상도" },
        { name: "인천", province: "경기도" },
        { name: "광주", province: "전라도" },
      ],
    };
  },
};
</script>

<style></style>
