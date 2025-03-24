<template>
    <div>
        <div class="card flex justify-center">
        <InputOtp v-model="phoneotp" :length="6" size="large"/>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const phoneotp=ref(null)
</script>

<style>

</style>