<template>
  <div>
    <h1>Hello {{ username }} !! 만나서 반갑습니다.</h1>
    <h1 v-text="`${username} 만나서 반갑습니다.`"></h1>
    <p>안녕하세요 저는 {{ user.name }} 입니다.</p>
    <p>저의 직업은 {{ user.job }} 입니다.</p>
    <p>그리고 저는 올해 {{ user.age }}살 입니다.</p>
    <!-- v-html은 사용할 떄 조심해야함, 특정코드를 삽입해서 사용할 수도 있기 때문에 
    믿을 수 있는 경우(외부에서 가져 올 경우)에만 사용해야 함-->
    <p v-html="button"></p>
    <p v-html="button2"></p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "scalper!!! ",
      year: 2021,
      user: {
        name: "scalper",
        job: "programmer",
        age: 100,
      },
      button: "<button>click!</button>",
      button2: `<button onclick='document.body.style="background: red; transform: rotate(180deg);"'>click!</button>`,
    };
  },
};
</script>

<style></style>
