<template>
  <div class="relative min-h-screen">
    <!-- Background Layer -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <!-- Light mode background -->
      <div v-if="!isDark" class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle,rgba(2,0,36,0)_0%,#fafafa_100%)] z-10"></div>
        <div
          class="absolute inset-0 z-0 opacity-40 invert"
          style="background-image: url('/images/grid.svg'); background-size: cover;"
        ></div>
        <div
          class="absolute z-20 w-full max-w-3xl h-full top-20 mx-auto left-0 right-0 blur-[100px] saturate-[1.5] opacity-15"
          :style="lightGradientStyle"
        ></div>
      </div>
      
      <!-- Dark mode galaxy background -->
      <div v-else class="absolute inset-0">
        <div class="absolute inset-0 bg-[#101010] z-10"></div>
          <div
            class="absolute inset-0 z-10 opacity-40"
            style="
              background-image: url('/images/grid.svg'); 
              background-size: cover;
              mask: radial-gradient(ellipse at center, black 50%, transparent 80%);
              -webkit-mask: radial-gradient(ellipse at center, black 50%, transparent 80%);
            "
          ></div>
          <div
            class="absolute z-20 w-full max-w-3xl h-full top-20 mx-auto left-0 right-0 blur-[100px] saturate-[1.5] opacity-15"
            :style="galaxyGradientStyle"
          ></div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="relative z-50 px-6 mx-auto text-gray-700 dark:text-white space-y-10">
      <Intro />
      <Navbar />
      <About />
      <Path />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { useDark } from '@vueuse/core'
import { watchEffect, computed } from 'vue'

import Intro from '@/components/Intro.vue'
import Navbar from '@/components/Navbar.vue'
import About from '@/components/About.vue'
import Path from '@/components/Path.vue'
import Project from '@/components/Project.vue'
import Certificate from '@/components/Certificate.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

// Toggle dark mode state
const isDark = useDark()

// Light mode gradient style
const lightGradientStyle = computed(() => ({
  backgroundImage: [
    'radial-gradient(at 27% 37%, hsla(215,98%,61%,1) 0px, transparent 0%)',
    'radial-gradient(at 97% 21%, hsla(125,98%,72%,1) 0px, transparent 50%)',
    'radial-gradient(at 52% 99%, hsla(354,98%,61%,1) 0px, transparent 50%)',
    'radial-gradient(at 10% 29%, hsla(256,96%,67%,1) 0px, transparent 50%)',
    'radial-gradient(at 97% 96%, hsla(38,60%,74%,1) 0px, transparent 50%)',
    'radial-gradient(at 33% 50%, hsla(222,67%,73%,1) 0px, transparent 50%)',
    'radial-gradient(at 79% 53%, hsla(343,68%,79%,1) 0px, transparent 50%)'
  ].join(', ')
}))

// Galaxy-themed gradient for dark mode
const galaxyGradientStyle = computed(() => ({
  backgroundImage: [
    'radial-gradient(at 27% 37%, hsla(270,80%,50%,1) 0px, transparent 50%)',     // Deep purple
    'radial-gradient(at 97% 21%, hsla(290,90%,60%,1) 0px, transparent 50%)',     // Magenta
    'radial-gradient(at 52% 99%, hsla(240,100%,70%,1) 0px, transparent 50%)',    // Blue-purple
    'radial-gradient(at 10% 29%, hsla(320,85%,65%,1) 0px, transparent 50%)',     // Pink-purple
    'radial-gradient(at 97% 96%, hsla(260,75%,55%,1) 0px, transparent 50%)',     // Violet
    'radial-gradient(at 33% 50%, hsla(280,95%,70%,1) 0px, transparent 50%)',     // Bright purple
    'radial-gradient(at 79% 53%, hsla(300,70%,60%,1) 0px, transparent 50%)'      // Deep magenta
  ].join(', ')
}))

// Generate random star positions and sizes
const getStarStyle = (index) => {
  // This function is no longer used but kept for compatibility
  return {}
}

// Generate cloud positions and sizes  
const getCloudStyle = (index) => {
  // This function is no longer used but kept for compatibility
  return {}
}

// Set data-theme attribute on <html> element
watchEffect(() => {
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.classList.remove('dark')
  }
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>