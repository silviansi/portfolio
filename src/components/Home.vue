<template>
    <section class="min-h-screen bg-neutral-900 text-white flex flex-col justify-center relative px-8">
      <!-- Nama -->
      <h1 class="text-5xl font-bold text-left max-w-2xl">
        Silvia Nanda Syafa Iswahyudi
      </h1>
  
      <!-- Garis -->
      <div class="w-170 border-b-4 border-white mt-4 mb-6"></div>
  
      <!-- Ikon Sosmed -->
      <div class="flex space-x-6 mt-2">
        <a href="https://github.com" target="_blank" aria-label="GitHub">
          <i class="fab fa-github text-2xl hover:text-gray-400 transition"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin text-2xl hover:text-gray-400 transition"></i>
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <i class="fab fa-twitter text-2xl hover:text-gray-400 transition"></i>
        </a>
      </div>
  
      <!-- Arrow ke bawah -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <RouterLink to="/projects">
          <i class="fas fa-chevron-down text-white text-2xl animate-bounce hover:text-gray-400"></i>
        </RouterLink>
      </div>
    </section>
</template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  
  <style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  </style>  