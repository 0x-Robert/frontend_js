<template>
  <div>
    <h1>Hello Vue!</h1>
    <button v-on:click="activetab = 'Menu1'">Menu1</button>
    <button v-on:click="activetab = 'Menu2'">Menu2</button>
    <button v-on:click="activetab = 'Menu3'">Menu3</button>
    <button v-on:click="test()">test</button>
    <!-- <Menu1 v-if="activeTab === 'Menu1'" />
    <Menu2 v-if="activeTab === 'Menu2'" />
    <Menu3 v-if="activeTab === 'Menu3'" /> -->
    <!-- <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive> -->

    <Menu1 v-if="activeTab === 'Menu1'" />
    <Menu2 v-if="activeTab === 'Menu2'" />
    <Menu3 v-if="activeTab === 'Menu3'" />
  </div>
</template>

<script>
import Menu1 from "./components/tabItems/Menu1";
import Menu2 from "./components/tabItems/Menu2";
import Menu3 from "./components/tabItems/Menu3";
export default {
  name: "App",
  components: { Menu1, Menu2, Menu3 },
  data() {
    return {
      username: "scalper",
      activeTab: "Menu1",
      status: false,
    };
  },
  provide() {
    return {
      name: this.username,
    };
  },
  methods: {
    test() {
      console.log("test");
    },
  },
  directives: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
