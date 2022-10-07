<template>
  <div>
    <h1>Hello teleport!</h1>
    <teleport to="#extra-modal" :disabled="isTeleport">
      <div class="modal">
        this is modal!
        <button @click="isTeleport = !isTeleport">teleport toggle</button>
      </div>
    </teleport>
    <teleport to="#extra-modal">
      <div class="modal2">this is modal2</div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isTeleport: true,
    };
  },
  methods: {},
  directives: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
