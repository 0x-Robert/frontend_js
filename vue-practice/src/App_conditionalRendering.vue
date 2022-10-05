<template>
  <div>
    <!-- <h2 v-if="showName">My name is {{ user.name }}</h2>
    <h2 v-else>이름을 보여줄 수 없습니다.</h2>
    <h2 v-if="user.age > 20">당신은 성인입니다.</h2>
    <h2 v-else-if="user.age > 14 && user.age < 20">당신은 청소년입니다.</h2>
    <h2 v-else>당신은 어린이입니다.</h2> -->
    <h2 v-if="showName">{{ user.name }} IF</h2>
    <h2 v-show="showName">{{ user.name }} Show</h2>

    <ul>
      <template v-if="question === 'frontend'">
        <li>HTML은 재밌나요?</li>
        <li>CSS는 재밌나요?</li>
        <li>Javascript는 재밌나요?</li>
      </template>

      <template v-else>
        <li>java은 재밌나요?</li>
        <li>python는 재밌나요?</li>
        <li>c#는 재밌나요?</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      question: "back",
      showName: false,
      user: {
        name: "scalper",
        age: 16,
        job: "programmer",
      },
    };
  },
};
</script>

<style>
.text-red {
  color: red;
}
.text-green {
  color: green;
}
.highlight {
  font-weight: bold;
  background: pink;
}

.line-through {
  text-decoration: line-through;
}
</style>
