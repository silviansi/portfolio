import { createRouter, createWebHistory } from 'vue-router'
import DesktopLayout from '@/layouts/DesktopLayout.vue'

import Home from '@/pages/Home.vue'
// import AboutPage from '@/pages/AboutPage.vue'
// import PathPage from '@/pages/PathPage.vue'
// import ProjectPage from '@/pages/ProjectPage.vue'
// import ContactPage from '@/pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    component: DesktopLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      // { path: 'about', name: 'About', component: AboutPage },
      // { path: 'path', name: 'Path', component: PathPage },
      // { path: 'project', name: 'Project', component: ProjectPage },
      // { path: 'contact', name: 'Contact', component: ContactPage },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router