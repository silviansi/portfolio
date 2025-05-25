<template>
  <header class="w-full border-b border-gray-200 shadow-sm bg-white fixed top-0 z-50">
    <nav class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      
      <!-- Logo: Three pastel pink circles -->
      <div class="flex items-center space-x-2">
        <span class="w-3 h-3 rounded-full bg-pink-300"></span>
        <span class="w-3 h-3 rounded-full bg-pink-400"></span>
        <span class="w-3 h-3 rounded-full bg-pink-500"></span>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 text-sm font-medium text-gray-700 uppercase">
        <li><a href="#home-section" @click.prevent="scrollToSection('#home-section')" class="hover:text-pink-500">Home</a></li>
        <li><a href="#about" class="hover:text-pink-500">About</a></li>
        <li><a href="#project" class="hover:text-pink-500">Project</a></li>
        <li><a href="#contact" class="hover:text-pink-500">Contact</a></li>
      </ul>

      <!-- Mobile Hamburger -->
      <button @click="toggleMenu" class="md:hidden text-gray-800 focus:outline-none">
        <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
      </button>
    </nav>

    <!-- Mobile Menu Dropdown -->
    <transition name="fade">
      <ul v-if="menuOpen" class="md:hidden bg-white px-4 pb-4 text-sm font-medium text-gray-700 space-y-3">
        <li><a href="#home-section" @click.prevent="handleMobileClick('#home-section')" class="block hover:text-pink-500">Home</a></li>
        <li><a href="#about-section" @click.prevent="handleMobileClick('#about-section')" class="block hover:text-pink-500">About</a></li>
        <li><a href="#project-section" @click.prevent="handleMobileClick('#project-section')" class="block hover:text-pink-500">Project</a></li>
        <li><a href="#contact-section" @click.prevent="handleMobileClick('#contact-section')" class="block hover:text-pink-500">Contact</a></li>
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const scrollToSection = (id) => {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleMobileClick = (id) => {
  scrollToSection(id)
  menuOpen.value = false
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>