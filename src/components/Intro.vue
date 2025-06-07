<template>
  <section id="home" class="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
     
    <!-- Name -->
    <h1 ref="title" class="text-5xl sm:text-6xl font-bold tracking-tight z-10 mt-12">
      Silvia Nanda Syafa Iswahyudi
    </h1>
     
    <!-- Subtitle -->
    <p ref="subtitle" class="text-lg sm:text-xl mt-4 font-light uppercase tracking-wide">
      Full Stack Web Developer • Tech Enthusiast
    </p>
     
    <!-- Center line -->
    <div ref="line" class="w-24 h-1 bg-pink-300 my-6 rounded"></div>
     
    <!-- Social Media Icons -->
    <div ref="icons" class="flex space-x-6 text-2xl mt-4 z-10">
      <a v-for="(icon, i) in socialIcons" :key="i" :href="icon.href" target="_blank"
         class="hover:text-pink-500 transition-all duration-300 p-3 rounded-full  hover:scale-110 transform" 
         :aria-label="icon.label">
        <i :class="icon.class" style="font-size: 28px;"></i>
      </a>
    </div>
     
    <!-- Short quote / editorial phrase -->
    <p ref="quote" class="mt-8 text-sm italic max-w-xl">
      "Designing interfaces is like crafting a story: thoughtful, full of feeling."
    </p>
   
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const title = ref(null)
const subtitle = ref(null)
const line = ref(null)
const icons = ref(null)
const quote = ref(null)

const socialIcons = [
  {
    href: 'https://github.com/silviansi',
    label: 'GitHub',
    class: 'fab fa-github'
  },
  {
    href: 'https://linkedin.com/in/silviansi',
    label: 'LinkedIn',
    class: 'fab fa-linkedin'
  },
  {
    href: 'https://instagram.com/silviansi',
    label: 'Instagram',
    class: 'fab fa-instagram'
  }
]

onMounted(() => {
  // Ensure DOM is fully loaded before starting animations
  gsap.delayedCall(0.1, () => {
    // Set initial states
    gsap.set([title.value, subtitle.value, line.value, quote.value], { opacity: 0 })
    gsap.set(title.value, { y: 50, scale: 0.9 })
    gsap.set(subtitle.value, { y: 30, x: -15 })
    gsap.set(line.value, { scaleX: 0, transformOrigin: 'center' })
    gsap.set(quote.value, { y: 30, x: 15 })
    
    // Set initial state for icon links - much more subtle
    if (icons.value && icons.value.children) {
      gsap.set(icons.value.children, { 
        opacity: 0, 
        y: 20, 
        scale: 0.8
      })
    }

    // Create main timeline with smoother easing
    const tl = gsap.timeline({ 
      defaults: { ease: 'power2.out' },
      delay: 0.2
    })

    // Animate title with gentle bounce
    tl.to(title.value, { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      duration: 1,
      ease: 'back.out(1.2)'
    })
    
    // Animate subtitle with slide
    .to(subtitle.value, { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      duration: 0.8,
      ease: 'power2.out'
    }, "-=0.7")
    
    // Animate line with scale
    .to(line.value, { 
      opacity: 1,
      scaleX: 1, 
      duration: 0.6,
      ease: 'power2.out'
    }, "-=0.4")
    
    // Animate icon links with subtle stagger - no rotation
    .to(icons.value.children, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      stagger: {
        amount: 0.3,
        from: "center"
      },
      ease: 'power2.out'
    }, "-=0.2")
    
    // Animate quote with fade and slide
    .to(quote.value, { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      duration: 0.8,
      ease: 'power2.out'
    }, "-=0.3")

    // Add very subtle floating animation for icons after main animation
    gsap.delayedCall(2, () => {
      if (icons.value && icons.value.children) {
        gsap.to(icons.value.children, {
          y: -3,
          duration: 3,
          ease: 'power2.inOut',
          stagger: 0.1,
          yoyo: true,
          repeat: -1
        })
      }
    })

    // Add very subtle pulsing animation for the line
    gsap.delayedCall(2.5, () => {
      gsap.to(line.value, {
        scaleX: 1.05,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      })
    })
  })
})
</script>

<style scoped>
/* Add glow effect to the line */
.w-24.h-1.bg-pink-300 {
  box-shadow: 0 0 10px rgba(244, 114, 182, 0.5);
}

/* Add subtle text shadow to title */
h1 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Add hover glow effect to social icons */
/* .hover\:text-pink-500:hover {
  filter: drop-shadow(0 0 8px rgba(244, 114, 182, 0.6));
} */

/* Smooth cursor animation */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Optional: Add typing effect cursor */
.typing-cursor::after {
  content: '|';
  animation: blink 1s infinite;
  color: #f472b6;
}
</style>