<template>
    <div class="relative min-h-screen">
        <!-- Background tetap diam -->
        <div class="fixed inset-0 z-0 pointer-events-none">
        <!-- Radial putih -->
        <div class="absolute inset-0 bg-[radial-gradient(circle,rgba(2,0,36,0)_0%,#fafafa_100%)] z-10"></div>

        <!-- Grid -->
        <div
            class="absolute inset-0 z-0 opacity-40 invert"
            style="background-image: url('/images/grid.svg'); background-size: cover;"
        ></div>

        <!-- Gradient warna blur -->
        <div
            class="absolute z-20 w-full max-w-3xl h-full top-20 mx-auto left-0 right-0 blur-[100px] saturate-[1.5] opacity-15"
            :style="{
            backgroundImage: `
                radial-gradient(at 27% 37%, hsla(215,98%,61%,1) 0px, transparent 0%),
                radial-gradient(at 97% 21%, hsla(125,98%,72%,1) 0px, transparent 50%),
                radial-gradient(at 52% 99%, hsla(354,98%,61%,1) 0px, transparent 50%),
                radial-gradient(at 10% 29%, hsla(256,96%,67%,1) 0px, transparent 50%),
                radial-gradient(at 97% 96%, hsla(38,60%,74%,1) 0px, transparent 50%),
                radial-gradient(at 33% 50%, hsla(222,67%,73%,1) 0px, transparent 50%),
                radial-gradient(at 79% 53%, hsla(343,68%,79%,1) 0px, transparent 50%)
            `
            }"
        ></div>
        </div>

        <!-- Konten scrollable -->
        <div class="relative z-50 px-6 mx-auto text-center text-gray-700 space-y-10">
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

        </div>
    </div>
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