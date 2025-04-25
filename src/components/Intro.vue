<template>
  <section class="relative min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-8">

    <!-- Glow Background -->
    <div class="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-30"></div>

    <!-- Nama -->
    <h1 class="text-6xl sm:text-5xl font-bold max-w-2xl bg-gradient-to-r from-white via-[#ff4d94] to-white text-transparent bg-clip-text animate-fade-in-up">
      Silvia Nanda Syafa Iswahyudi
    </h1>

    <!-- Subheading -->
    <p class="text-l text-gray-400 mt-2 animate-fade-in-up delay-100">
      Web Developer • Front-End Developer • Tech Enthusiast
    </p>

    <!-- Garis glow -->
    <div class="w-60 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mt-4 mb-6 animate-fade-in-up delay-200"></div>

    <!-- Ikon Sosmed -->
    <div class="flex space-x-6 text-2xl text-white animate-fade-in-up delay-300">
      <a href="https://github.com/silviansi" target="_blank" class="hover:text-[#ff007b] transition">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" class="hover:text-[#ff007b] transition">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://instagram.com" target="_blank" class="hover:text-[#ff007b] transition">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://twitter.com" target="_blank" class="hover:text-[#ff007b] transition">
        <i class="fab fa-twitter"></i>
      </a>
    </div>

    <!-- Arrow ke bawah -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in-up delay-500">
      <a href="#home-section">
        <i class="fas fa-chevron-down text-white text-3xl animate-bounce hover:text-pink-500"></i>
      </a>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-500 {
  animation-delay: 0.5s;
}
</style>