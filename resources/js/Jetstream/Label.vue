<script setup>
defineProps({
  value: String,
});
</script>

<template>
  <label class="block font-bold mb-2">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot /></span>
  </label>
</template>
