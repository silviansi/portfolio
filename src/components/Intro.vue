<template>
  <section id="home" class="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
     
    <!-- Name -->
    <h1 ref="title" class="text-5xl sm:text-6xl font-bold tracking-tight z-10 mt-12 name-text">
      Silvia Nanda Syafa Iswahyudi
    </h1>
     
    <!-- Subtitle -->
    <p ref="subtitle" class="text-lg sm:text-xl mt-4 font-light uppercase tracking-wide subtitle-text">
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

// Register the SplitText plugin
gsap.registerPlugin(SplitText)

const title = ref(null)
const subtitle = ref(null)
const line = ref(null)
const icons = ref(null)
const quote = ref(null)

// SplitText instances
let titleSplit = null
let subtitleSplit = null
let titleAnimation = null
let subtitleAnimation = null

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

// Function to setup SplitText
const setupSplitText = () => {
  // Revert previous splits if they exist
  if (titleSplit) titleSplit.revert()
  if (subtitleSplit) subtitleSplit.revert()
  if (titleAnimation) titleAnimation.revert()
  if (subtitleAnimation) subtitleAnimation.revert()
  
  // Create new splits
  titleSplit = SplitText.create(title.value, { type: "chars" })
  subtitleSplit = SplitText.create(subtitle.value, { type: "words" })
}

// Animation functions
const animateNameChars = () => {
  if (titleAnimation) titleAnimation.revert()
  titleAnimation = gsap.from(titleSplit.chars, {
    x: 150,
    opacity: 0,
    duration: 0.7, 
    ease: "power4",
    stagger: 0.04
  })
}

const animateSubtitleWords = () => {
  if (subtitleAnimation) subtitleAnimation.revert()
  subtitleAnimation = gsap.from(subtitleSplit.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 0.7, 
    ease: "back",
    stagger: 0.15
  })
}

onMounted(() => {
  // Ensure DOM is fully loaded before starting animations
  gsap.delayedCall(0.1, () => {
    // Setup SplitText
    setupSplitText()
    
    // Set initial states for other elements
    gsap.set([line.value, quote.value], { opacity: 0 })
    gsap.set(line.value, { scaleX: 0, transformOrigin: 'center' })
    gsap.set(quote.value, { y: 30, x: 15 })
    
    // Set initial state for icon links
    if (icons.value && icons.value.children) {
      gsap.set(icons.value.children, { 
        opacity: 0, 
        y: 20, 
        scale: 0.8
      })
    }

    // Create main timeline
    const tl = gsap.timeline({ 
      defaults: { ease: 'power2.out' },
      delay: 0.3
    })

    // Start with name character animation
    tl.add(() => animateNameChars())
    
    // Then animate subtitle words
    .add(() => animateSubtitleWords(), "-=0.2")
    
    // Animate line with scale
    .to(line.value, { 
      opacity: 1,
      scaleX: 1, 
      duration: 0.6,
      ease: 'power2.out'
    }, "-=0.2")
    
    // Animate icon links with subtle stagger
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
    }, "-=0.3")
    
    // Animate quote with fade and slide
    .to(quote.value, { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      duration: 0.8,
      ease: 'power2.out'
    }, "-=0.4")

    // Add subtle floating animation for icons after main animation
    gsap.delayedCall(3, () => {
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

    // Add subtle pulsing animation for the line
    gsap.delayedCall(3.5, () => {
      gsap.to(line.value, {
        scaleX: 1.05,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      })
    })

    // Add hover effects for characters and words after animation completes
    gsap.delayedCall(2, () => {
      if (titleSplit && titleSplit.chars) {
        titleSplit.chars.forEach(char => {
          char.addEventListener('mouseenter', () => {
            gsap.to(char, {
              scale: 1.2,
              color: '#f472b6',
              duration: 0.3,
              ease: 'power2.out'
            })
          })
          
          char.addEventListener('mouseleave', () => {
            gsap.to(char, {
              scale: 1,
              color: 'inherit',
              duration: 0.3,
              ease: 'power2.out'
            })
          })
        })
      }

      if (subtitleSplit && subtitleSplit.words) {
        subtitleSplit.words.forEach(word => {
          word.addEventListener('mouseenter', () => {
            gsap.to(word, {
              scale: 1.1,
              color: '#f472b6',
              rotation: 5,
              duration: 0.3,
              ease: 'power2.out'
            })
          })
          
          word.addEventListener('mouseleave', () => {
            gsap.to(word, {
              scale: 1,
              color: 'inherit',
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out'
            })
          })
        })
      }
    })
  })
})

// Handle window resize
const handleResize = () => {
  setupSplitText()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  // Clean up SplitText instances
  if (titleSplit) titleSplit.revert()
  if (subtitleSplit) subtitleSplit.revert()
  if (titleAnimation) titleAnimation.revert()
  if (subtitleAnimation) subtitleAnimation.revert()
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

/* Style for split characters and words */
.name-text div {
  display: inline-block;
  cursor: pointer;
}

.subtitle-text div {
  display: inline-block;
  margin-right: 0.2em;
  cursor: pointer;
}

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