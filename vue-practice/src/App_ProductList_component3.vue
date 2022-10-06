<template>
  <div>
    <!-- <li v-for="product in products" :key="product.id">{{ product }}</li> -->
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from "./components/ProductList";

export default {
  name: "App",
  components: {
    ProductList,
  },
  data() {
    return {
      products: [
        { id: 0, name: "TV", price: 500000, company: "LG" },
        { id: 1, name: "노트북", price: 500000, company: "samsung" },
        { id: 2, name: "에어컨", price: 500000, company: "apple" },
        { id: 3, name: "냉장고", price: 500000, company: "sony" },
        { id: 4, name: "TV", price: 500000, company: "google" },
      ],
    };
  },
  methods: {},
  directives: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
