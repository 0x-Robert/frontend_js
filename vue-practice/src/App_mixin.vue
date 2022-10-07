<template>
  <div>
    <h1>Hello Mixins!</h1>
    <!-- 재사용하기 위해 사용함 -->
    <ProductStatus />
  </div>
</template>

<script>
import ProductStatus from "./components/mixin/ProductStatus.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  directives: {},
  computed: {},
  watch: {},
  components: { ProductStatus },
};
</script>

<style></style>
