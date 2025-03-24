<template>
    <div>
      <IftaLabel>
        <InputText 
          id="email" 
          class="w-full" 
          v-model="email" 
          variant="filled" 
          @blur="validateEmail"
        />
        <label for="email">Email ID</label>
      </IftaLabel>
      <p v-if="emailError" class="text-red-500">{{ emailError }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);
  
  const email = ref(props.modelValue || '');
  const emailError = ref('');
  
  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      emailError.value = 'Please enter a valid email address';
    } else {
      emailError.value = '';
    }
  };
  
  // Watch for changes and emit them to parent
  watch(email, (newValue) => {
    emit('update:modelValue', newValue);
  });
  </script>
  
  <style scoped>
  .text-red-500 {
    color: red;
  }
  </style>
  