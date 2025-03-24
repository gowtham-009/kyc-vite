



<template>
    <div class="flex gap-2">
      <Checkbox v-model="checked" binary />
      <span>Remember me</span>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, watch } from 'vue';
  import Checkbox from 'primevue/checkbox';
  const props = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);
  
  const checked = ref(props.modelValue);
  
  watch(checked, (newVal) => {
    emit('update:modelValue', newVal);
  });
  </script>
  