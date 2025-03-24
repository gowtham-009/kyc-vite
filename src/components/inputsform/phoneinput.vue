<template>
    <div>
        <IftaLabel>
            <InputText id="phone" class="w-full" v-model="phone"   @keypress="allowOnlyNumbers" variant="filled" />
            <label for="phone">Phone no*</label>
        </IftaLabel>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
  
  const props = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);
  
  const phone = ref(props.modelValue || '');
  
  const allowOnlyNumbers = (e) => {
    if (!/^\d$/.test(e.key) || phone.value.length >= 10) {
      e.preventDefault();
    }
  };
 
  watch(phone, (newValue) => {
    emit('update:modelValue', newValue);
  });
</script>

<style></style>