<template>
  <div class="min-h-screen overflow-x-hidden bg-pink-50 duration-300 relative">
    <!-- Navbar always on top -->
    <Navbar />

    <!-- Main content -->
    <main class="pt-12">
      <Intro />
      <About />
      <Path />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { useDark } from '@vueuse/core'
import { watchEffect } from 'vue'

import Navbar from '@/components/Navbar.vue'
import Intro from '@/components/Intro.vue'
import About from '@/components/About.vue'
import Path from '@/components/Path.vue'
import Project from '@/components/Project.vue'
import Certificate from '@/components/Certificate.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

const isDark = useDark()

watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.removeAttribute('data-theme')
  }
})
</script>