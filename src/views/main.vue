<template>
  <div>
    <div v-if="currentDiv === 'div1'" style="border: 2px solid red;">
      <signupform @updateDiv="handleUpdateDiv"/>
    </div>
    <div v-if="currentDiv === 'div2'" style="border: 2px solid red;">
      <otpform/>
    </div>
    <div v-if="currentDiv === 'div3'" style="border: 2px solid red;">

    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import Otpform from '../components/forms/otpform.vue';

const route = useRoute();
const value = ref(route.query.val || 'No value provided');
const currentDiv = ref('div1');

const handleUpdateDiv = (value) => {
  currentDiv.value = value;
  
};


watchEffect(() => {
  if (['div1', 'div2', 'div3'].includes(route.query.val)) {
    currentDiv.value = route.query.val;
  } else {
    currentDiv.value = 'div1';
  }
});
</script>
