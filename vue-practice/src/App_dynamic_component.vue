<template>
  <div>
    <h1>Hello Vue!</h1>
    <button @click="activetab = 'Menu1'">Menu1</button>
    <button @click="activetab = 'Menu2'">Menu2</button>
    <button @click="activetab = 'Menu3'">Menu3</button>
    <!-- <Menu1 v-if="activeTab === 'Menu1'" />
    <Menu2 v-if="activeTab === 'Menu2'" />
    <Menu3 v-if="activeTab === 'Menu3'" /> -->
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
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
    };
  },
  provide() {
    return {
      name: this.username,
    };
  },
  methods: {},
  directives: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
