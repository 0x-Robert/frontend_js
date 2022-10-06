<template>
  <h2 v-bind="$attrs">Hello {{ username }}</h2>
  <h3>오늘이 {{ numberOfVisit }} 번째 방문입니다.</h3>
  <h3>
    사이트 이름은 {{ siteInfo.name }}이고 선생님은 {{ siteInfo.teacher }}이고
    과목은 {{ siteInfo.subject }} 입니다.
  </h3>
</template>

<script>
export default {
  name: "GreetingUser",
  inheritAttrs: false,
  props: {
    username: String,
    numberOfVisit: {
      type: Number,
      default: 0,
    },
    siteInfo: {
      type: Object,
      default: () => {
        return { name: "-", teacher: "-", subject: "-" };
      },
    },
  },
};
</script>

<style scoped></style>
