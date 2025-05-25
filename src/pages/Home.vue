<template>
    <main id="home-section" class="bg-white">
        <Intro />
        
        <!-- Navbar -->
        <Navbar />

        <!-- About -->
        <About />

        <!-- Projects -->
        <Project />

        <!-- Certificate-->
        <Certificate />

        <!-- Contact -->
        <Contact />

        <!-- Footer -->
        <Footer />
    
    </main>
</template>

<script setup>
import Intro from '@/components/Intro.vue'
import Navbar from '@/components/Navbar.vue'
import About from '@/components/About.vue'
import Project from '@/components/Project.vue'
import Certificate from '@/components/Certificate.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
</script>