<template>
  <div>
    <span>{{ props.label }}</span>
    <span>{{ props.id }}</span>
    <span>:</span>
    <span>{{ currTime }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps({
  id: {
    type: [String, Number],
    default: () => Date.now(),
  },
  label: {
    type: String,
    default: "定时器",
  },
});
const currTime = ref(0);
onMounted(() => {
  const timer = setInterval(() => currTime.value++, 1000);
  onUnmounted(() => clearInterval(timer));
});
</script>
