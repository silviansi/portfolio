<template>
    <Intro />
    
    <main id="home-section" class="bg-black">
        
        <!-- Navbar -->
        <div v-if="showNavbar" class="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-full px-4" data-aos="fade-down">
            <Navbar />
        </div>
  
        <!-- Konten Halaman Utama -->
        <section class="py-16">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-8 text-white">Proyek Saya</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="" alt="Proyek 1" class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-4">Proyek 1</h3>
                            <p class="text-gray-600">Deskripsi singkat tentang proyek 1. Teknologi yang digunakan: Vue.js, Tailwind CSS.</p>
                        </div>
                    </div>
                    <!-- Proyek lainnya bisa ditambahkan di sini -->
                </div>
            </div>
        </section>

        <!-- Footer -->
        <Footer />
    
    </main>
</template>

<script setup>
import Intro from '@/components/Intro.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'

// Membuat reactive variable untuk menampilkan navbar
const showNavbar = ref(false)

const handleScroll = () => {
    const homeSection = document.getElementById('home-section')
    const offsetTop = homeSection.offsetTop

    // Menampilkan navbar jika sudah scroll ke bawah
    showNavbar.value = window.scrollY >= offsetTop - 100
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}
</style>