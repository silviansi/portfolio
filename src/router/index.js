import { createRouter, createWebHistory } from 'vue-router'

// Import komponen yang akan dijadikan halaman
import Home from '@/components/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router