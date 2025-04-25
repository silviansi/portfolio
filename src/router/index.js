import { createRouter, createWebHistory } from 'vue-router'

// Import komponen yang akan dijadikan halaman
import Home from '@/pages/Home.vue'

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router