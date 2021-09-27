<template>
  <div ref="container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import initGame from "@l/game/index.js";

const container = ref(null);
onMounted(() => {
  initGame(container.value);
});
</script>
