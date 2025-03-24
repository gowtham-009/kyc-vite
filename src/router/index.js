// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import main from '@/views/main.vue';

const routes = [
  { path: '/', component: main },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
