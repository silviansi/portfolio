<template>
    <nav
    class="bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-700 text-white px-6 py-3 rounded-full shadow-lg
           flex items-center justify-center mx-auto max-w-4xl w-full transition-all duration-300"
    :class="{ 'bg-opacity-90 backdrop-blur-md': isScrolled }"
    >
  
      <!-- Navigation Links -->
      <div class="space-x-8 py-2 text-sm font-medium">
        <RouterLink to="#home-section" class="hover:text-pink-800" @click="scrollToSection('#home-section')">Home</RouterLink>
        <RouterLink to="#about-section" class="hover:text-pink-800" @click="scrollToSection('#home-section')">About</RouterLink>
        <RouterLink to="#project-section" class="hover:text-pink-800" @click="scrollToSection('#home-section')">Project</RouterLink>
        <RouterLink to="#contact-section" class="hover:text-pink-800" @click="scrollToSection('#home-section')">Contact</RouterLink>
      </div>
    </nav>
</template>
  
<script setup>
import { RouterLink } from 'vue-router'

const scrollToSection = (id) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
  
<style scoped>
nav {
    backdrop-filter: blur(12px);
}
</style>