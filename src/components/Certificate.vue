<template>
  <section id="certificate" class="py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-10">
        <h2 class="text-5xl font-bold uppercase border-b-2 border-gray-300 inline-block pb-2">
          Certificates
        </h2>
        <p class="text-gray-500 mt-2 italic">A showcase of milestones and achievements.</p>
      </div>

      <!-- Certificate Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(cert, index) in certificates"
          :key="index"
          class="relative flex justify-center items-center bg-pink-300/20 dark:bg-purple-900/20 backdrop-blur-sm border border-pink-300/30 dark:border-purple-500/30 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden certificate-card"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
        >
          <!-- Animated glow effect -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none glow-effect"
            :style="glowStyle"
          ></div>
          
          <!-- Card content -->
          <div class="relative z-10">
            <img
              :src="cert.src"
              :alt="cert.alt"
              class="rounded-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const certificates = ref([
  { src: "/images/certificate-1.jpg", alt: "Certificate 1" },
  { src: "/images/certificate-2.jpg", alt: "Certificate 2" },
  { src: "/images/certificate-3.png", alt: "Certificate 3" },
  { src: "/images/certificate-4.jpg", alt: "Certificate 4" },
  { src: "/images/certificate-5.jpg", alt: "Certificate 5" },
]);

// Mouse position tracking
const mouseX = ref(0);
const mouseY = ref(0);

// Computed style for the glow effect
const glowStyle = ref({});

// Check if dark mode is active
const isDarkMode = () => {
  return document.documentElement.classList.contains('dark');
};

// Update glow colors based on theme
const updateGlowColors = (x = '50%', y = '50%') => {
  const isDark = isDarkMode();
  
  if (isDark) {
    // Dark mode - purple glow
    return {
      background: `radial-gradient(circle 200px at ${x} ${y}, rgba(255, 255, 255, 0.3) 0%, rgba(147, 51, 234, 0.2) 30%, transparent 70%)`,
    };
  } else {
    // Light mode - pink glow
    return {
      background: `radial-gradient(circle 200px at ${x} ${y}, rgba(255, 255, 255, 0.4) 0%, rgba(244, 114, 182, 0.3) 30%, transparent 70%)`,
    };
  }
};

// Handle mouse movement
const handleMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  mouseX.value = x;
  mouseY.value = y;
  
  // Update glow position with theme-aware colors
  glowStyle.value = updateGlowColors(`${x}px`, `${y}px`);
};

// Handle mouse leave
const handleMouseLeave = () => {
  glowStyle.value = updateGlowColors();
};

onMounted(() => {
  // Set initial glow style
  glowStyle.value = updateGlowColors();
  
  // Watch for theme changes (if you have theme switching functionality)
  const observer = new MutationObserver(() => {
    glowStyle.value = updateGlowColors();
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });
});
</script>

<style scoped>
/* CSS custom properties for theme-aware colors */
:root {
  --glow-color-primary: rgba(244, 114, 182, 0.3); /* Pink for light mode */
  --glow-color-secondary: rgba(255, 255, 255, 0.4);
}

:root.dark {
  --glow-color-primary: rgba(147, 51, 234, 0.2); /* Purple for dark mode */
  --glow-color-secondary: rgba(255, 255, 255, 0.3);
}

/* Alternative CSS-only approach (backup) */
.certificate-card .glow-effect {
  --glow-primary: rgba(244, 114, 182, 0.3);
  --glow-secondary: rgba(255, 255, 255, 0.4);
}

.dark .certificate-card .glow-effect {
  --glow-primary: rgba(147, 51, 234, 0.2);
  --glow-secondary: rgba(255, 255, 255, 0.3);
}

/* Additional hover effects */
.group:hover {
  transform: translateY(-2px);
}

.group:hover .relative {
  backdrop-filter: blur(8px);
}

/* Enhanced certificate card hover effect */
.certificate-card:hover {
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.1),
    0 0 20px var(--glow-color-primary, rgba(244, 114, 182, 0.2));
}

.dark .certificate-card:hover {
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(147, 51, 234, 0.3);
}
</style>