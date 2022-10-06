<template>
  <div>
    <!-- IME(input method editor) 문제로 한글은 한글자씩 밀리는 걸 볼 수 있음 
    자판에 있는 글쇠 보다 수가 많은 문자를 조합하여 입력해주는 시스템-->

    {{ user }}
    <form>
      <div>
        <label for="name">이름</label>
        <input type="text" id="name" v-model="user.name" @input="setValue" />
      </div>
      <div>
        <label for="age" age>나이</label>
        <input type="number" id="age" v-model="user.age" />
      </div>
      <div>
        <label for="city">사는 곳</label>
        <select id="city" v-model="user.city">
          <option value="seoul">서울</option>
          <option value="daejeon">대전</option>
          <option value="daegu">대구</option>
          <option value="busan">부산</option>
          <option value="gwangju">광주</option>
        </select>
      </div>
      <div>
        <label for="favorite-food">좋아하는 음식</label>
        <select id="favorite-food" multiple v-model="user.favorite">
          <option
            v-for="option in foodOption"
            :value="option.code"
            :key="option.code"
          >
            {{ option.label }}
          </option>
        </select>
      </div>

      <div>
        <label for="job">직업</label>
        프로그래머
        <input type="checkbox" value="programmer" v-model="user.job" />
        가수<input type="checkbox" value="singer" v-model="user.job" />
        교사<input type="checkbox" value="teacher" v-model="user.job" />
      </div>
      <div>
        <label for="sex">성별</label>
        남자<input type="radio" value="male" v-model="user.gender" /> 여자<input
          type="radio"
          value="female"
          v-model="user.gender"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        name: "",
        age: 0,
        city: "seoul",
        favorite: [],
        job: [],
        gender: "",
      },
      foodOption: [
        { label: "짜장면", code: "JJ" },
        { label: "짬뽕", code: "JB" },
        { label: "탕수육", code: "TS" },
      ],
      methods: {
        setValue(e) {
          console.log(e.target.value);
          this.user.name = e.target.value;
        },
      },
    };
  },
};
</script>

<style></style>
