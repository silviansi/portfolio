<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Ocean Background Layer -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <!-- Light mode - Surface Ocean -->
      <div v-if="!isDark" class="absolute inset-0">
        <!-- Base ocean gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-sky-200 via-cyan-300 to-blue-500 z-5"></div>
        
        <!-- Animated waves -->
        <div class="absolute inset-0 z-10">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>
        </div>
        
        <!-- Tech particles floating -->
        <div class="absolute inset-0 z-15">
          <div v-for="n in 20" :key="`particle-${n}`" 
               class="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
               :style="getParticleStyle(n)"></div>
        </div>
        
        <!-- Light tech gradient overlay -->
        <div
          class="absolute z-20 w-full max-w-4xl h-full top-10 mx-auto left-0 right-0 blur-[120px] saturate-[1.8] opacity-20"
          :style="lightOceanGradientStyle"
        ></div>
        
        <!-- Surface shimmer -->
        <div class="absolute inset-0 z-25 bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
      </div>
      
      <!-- Dark mode - Deep Ocean Abyss -->
      <div v-else class="absolute inset-0">
        <!-- Deep ocean base -->
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950 z-5"></div>
        
        <!-- Bioluminescent currents -->
        <div class="absolute inset-0 z-10">
          <div class="current current1"></div>
          <div class="current current2"></div>
          <div class="current current3"></div>
        </div>
        
        <!-- Glowing tech particles -->
        <div class="absolute inset-0 z-15">
          <div v-for="n in 30" :key="`glow-${n}`" 
               class="absolute rounded-full animate-pulse-glow"
               :style="getGlowParticleStyle(n)"></div>
        </div>
        
        <!-- Dark tech gradient overlay -->
        <div
          class="absolute z-20 w-full max-w-4xl h-full top-10 mx-auto left-0 right-0 blur-[140px] saturate-[2] opacity-25"
          :style="darkOceanGradientStyle"
        ></div>
        
        <!-- Depth fade -->
        <div class="absolute inset-0 z-25 bg-gradient-to-b from-transparent via-transparent to-slate-900/30"></div>
      </div>
      
      <!-- Tech grid overlay -->
      <div class="absolute inset-0 z-30 opacity-5 dark:opacity-10">
        <div class="tech-grid"></div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="relative z-50 px-6 mx-auto text-slate-700 dark:text-cyan-50 space-y-10">
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

// Light mode ocean gradient - surface waters with tech elements
const lightOceanGradientStyle = computed(() => ({
  backgroundImage: [
    'radial-gradient(at 20% 30%, hsla(195,100%,75%,0.8) 0px, transparent 60%)',  // Cyan ripple
    'radial-gradient(at 80% 20%, hsla(210,100%,80%,0.7) 0px, transparent 50%)',  // Light blue
    'radial-gradient(at 50% 80%, hsla(185,90%,70%,0.6) 0px, transparent 60%)',   // Aqua
    'radial-gradient(at 10% 70%, hsla(200,95%,85%,0.5) 0px, transparent 50%)',   // Light cyan
    'radial-gradient(at 90% 60%, hsla(220,85%,75%,0.6) 0px, transparent 55%)',   // Tech blue
    'radial-gradient(at 30% 90%, hsla(190,100%,80%,0.7) 0px, transparent 50%)',  // Bright aqua
    'radial-gradient(at 70% 40%, hsla(205,90%,70%,0.5) 0px, transparent 60%)'    // Ocean blue
  ].join(', ')
}))

// Dark mode ocean gradient - deep sea bioluminescence
const darkOceanGradientStyle = computed(() => ({
  backgroundImage: [
    'radial-gradient(at 25% 35%, hsla(180,100%,50%,0.6) 0px, transparent 70%)',  // Electric cyan
    'radial-gradient(at 75% 25%, hsla(200,100%,60%,0.5) 0px, transparent 60%)',  // Deep blue glow
    'radial-gradient(at 45% 75%, hsla(170,90%,55%,0.7) 0px, transparent 65%)',   // Teal bio-light
    'radial-gradient(at 15% 65%, hsla(190,100%,45%,0.4) 0px, transparent 50%)',  // Deep cyan
    'radial-gradient(at 85% 55%, hsla(210,95%,65%,0.6) 0px, transparent 70%)',   // Tech glow
    'radial-gradient(at 35% 85%, hsla(175,100%,50%,0.5) 0px, transparent 60%)',  // Aqua energy
    'radial-gradient(at 65% 45%, hsla(195,90%,55%,0.4) 0px, transparent 65%)'    // Ocean depth
  ].join(', ')
}))

// Generate floating particle styles for light mode
const getParticleStyle = (index) => {
  const positions = [
    { left: '10%', top: '20%', delay: '0s' },
    { left: '85%', top: '15%', delay: '0.5s' },
    { left: '60%', top: '80%', delay: '1s' },
    { left: '25%', top: '70%', delay: '1.5s' },
    { left: '75%', top: '45%', delay: '2s' },
    { left: '40%', top: '30%', delay: '2.5s' },
    { left: '15%', top: '85%', delay: '3s' },
    { left: '90%', top: '75%', delay: '3.5s' },
    { left: '55%', top: '25%', delay: '4s' },
    { left: '35%', top: '60%', delay: '4.5s' },
    { left: '70%', top: '90%', delay: '5s' },
    { left: '20%', top: '40%', delay: '5.5s' },
    { left: '80%', top: '65%', delay: '6s' },
    { left: '45%', top: '10%', delay: '6.5s' },
    { left: '65%', top: '75%', delay: '7s' },
    { left: '30%', top: '95%', delay: '7.5s' },
    { left: '85%', top: '35%', delay: '8s' },
    { left: '50%', top: '55%', delay: '8.5s' },
    { left: '15%', top: '50%', delay: '9s' },
    { left: '75%', top: '20%', delay: '9.5s' }
  ]
  
  const pos = positions[(index - 1) % positions.length]
  return {
    left: pos.left,
    top: pos.top,
    animationDelay: pos.delay
  }
}

// Generate glowing particle styles for dark mode
const getGlowParticleStyle = (index) => {
  const positions = [
    { left: '12%', top: '18%', size: '2px', glow: 'hsla(180,100%,50%,0.8)' },
    { left: '88%', top: '22%', size: '3px', glow: 'hsla(200,100%,60%,0.6)' },
    { left: '65%', top: '85%', size: '1px', glow: 'hsla(170,90%,55%,0.9)' },
    { left: '23%', top: '72%', size: '4px', glow: 'hsla(190,100%,45%,0.7)' },
    { left: '77%', top: '48%', size: '2px', glow: 'hsla(210,95%,65%,0.8)' },
    { left: '42%', top: '32%', size: '3px', glow: 'hsla(175,100%,50%,0.6)' },
    { left: '18%', top: '88%', size: '1px', glow: 'hsla(195,90%,55%,0.9)' },
    { left: '92%', top: '78%', size: '2px', glow: 'hsla(185,100%,60%,0.7)' },
    { left: '58%', top: '28%', size: '3px', glow: 'hsla(205,95%,50%,0.8)' }
  ]
  
  // Cycle through positions, extending for more particles
  const pos = positions[(index - 1) % positions.length]
  const randomOffset = (index * 37) % 100 // Pseudo-random offset
  
  return {
    left: pos.left,
    top: pos.top,
    width: pos.size,
    height: pos.size,
    backgroundColor: pos.glow,
    boxShadow: `0 0 ${parseInt(pos.size) * 3}px ${pos.glow}, 0 0 ${parseInt(pos.size) * 6}px ${pos.glow}`,
    animationDelay: `${(randomOffset * 0.1) % 4}s`
  }
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
/* Wave animations for light mode */
@keyframes wave-flow {
  0% { transform: translateX(-100%) rotate(0deg); }
  50% { transform: translateX(100%) rotate(180deg); }
  100% { transform: translateX(-100%) rotate(360deg); }
}

.wave {
  position: absolute;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  animation: wave-flow 20s linear infinite;
}

.wave1 {
  top: 10%;
  animation-delay: 0s;
  opacity: 0.3;
}

.wave2 {
  top: 50%;
  animation-delay: -7s;
  opacity: 0.2;
}

.wave3 {
  top: 80%;
  animation-delay: -14s;
  opacity: 0.4;
}

/* Current animations for dark mode */
@keyframes current-flow {
  0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); opacity: 0; }
  25% { opacity: 0.6; }
  75% { opacity: 0.8; }
  100% { transform: translateX(150%) translateY(50%) rotate(90deg); opacity: 0; }
}

.current {
  position: absolute;
  width: 300px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(0,255,255,0.6), rgba(0,200,255,0.4), transparent);
  border-radius: 50%;
  filter: blur(1px);
  animation: current-flow 15s ease-in-out infinite;
}

.current1 {
  top: 20%;
  left: -20%;
  animation-delay: 0s;
  transform: rotate(15deg);
}

.current2 {
  top: 60%;
  left: -30%;
  animation-delay: -5s;
  transform: rotate(-10deg);
  width: 400px;
}

.current3 {
  top: 40%;
  left: -10%;
  animation-delay: -10s;
  transform: rotate(25deg);
  width: 250px;
}

/* Floating particles animation */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  25% { transform: translateY(-20px) rotate(90deg); opacity: 0.8; }
  50% { transform: translateY(-40px) rotate(180deg); opacity: 1; }
  75% { transform: translateY(-20px) rotate(270deg); opacity: 0.8; }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

/* Glowing pulse animation for dark mode */
@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  25% { opacity: 0.8; transform: scale(1.2); }
  50% { opacity: 1; transform: scale(1.5); }
  75% { opacity: 0.6; transform: scale(1.1); }
}

.animate-pulse-glow {
  animation: pulse-glow 6s ease-in-out infinite;
}

/* Tech grid pattern */
.tech-grid {
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-pulse 10s ease-in-out infinite alternate;
}

@keyframes grid-pulse {
  0% { opacity: 0.05; }
  100% { opacity: 0.15; }
}

/* Enhanced scrollbar for ocean theme */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0,150,200,0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, rgba(0,200,255,0.6), rgba(0,150,200,0.8));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, rgba(0,220,255,0.8), rgba(0,170,220,1));
}
</style>