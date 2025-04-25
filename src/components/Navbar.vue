<template>
    <nav
    class="bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-700 text-white px-6 py-3 rounded-full shadow-lg
           flex items-center justify-center mx-auto max-w-4xl w-full transition-all duration-300"
    :class="{ 'bg-opacity-90 backdrop-blur-md': isScrolled }"
    >
  
      <!-- Navigation Links -->
      <div class="space-x-8 py-2 text-sm font-medium">
        <RouterLink to="/home" class="hover:text-pink-800">Home</RouterLink>
        <RouterLink to="/projects" class="hover:text-pink-800">Projects</RouterLink>
        <RouterLink to="/about" class="hover:text-pink-800">About</RouterLink>
        <RouterLink to="/contact" class="hover:text-pink-800">Contact</RouterLink>
      </div>
    </nav>
</template>
  
<script setup>
import { RouterLink } from 'vue-router'
</script>
  
<style scoped>
nav {
    backdrop-filter: blur(12px);
}
</style>