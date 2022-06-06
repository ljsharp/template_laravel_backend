<script setup>
import { onMounted, ref } from "vue";

defineProps({
  modelValue: String,
});

defineEmits(["update:modelValue"]);

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
  <input
    ref="input"
    class="
      px-3
      py-2
      max-w-full
      focus:ring focus:outline-none
      border-gray-700
      rounded
      w-full
      dark:placeholder-gray-400
      h-12
      border
      bg-white
      dark:bg-gray-800
    "
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
