<template>
    <Intro />
    
    <main id="home-section" class="bg-black">
        
        <!-- Navbar -->
        <div v-if="showNavbar" class="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-full px-4" data-aos="fade-down">
            <Navbar />
        </div>

        <!-- Introduction -->
        <Introduction />

        <!-- About -->
        <About />

        <!-- Footer -->
        <Footer />
    
    </main>
</template>

<script setup>
import Intro from '@/components/Intro.vue'
import Navbar from '@/components/Navbar.vue'
import Introduction  from '@/components/Introduction.vue'
import About from '@/components/About.vue'
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