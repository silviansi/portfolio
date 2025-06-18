<template>
  <section id="certificate" class="py-16 relative max-w-5xl mx-auto px-6">
    <!-- Title -->
    <div class="text-center mb-12 font-['Press_Start_2P']">
      <h2 class="text-3xl sm:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
        Certificates
      </h2>
      <p class="text-sm text-pink-500 italic max-w-2xl mx-auto font-mono">
        A showcase of milestones, achievements, and continuous learning journey
      </p>
    </div>

    <!-- Certificate Grid -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 font-['VT323']">
      <div v-for="(cert, index) in displayCertificates" :key="index">
        <!-- Certificate Card -->
        <div
          v-if="!cert.isGif"
          class="relative group rounded-xl h-90 border-4 border-dashed border-cyan-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 p-4 cursor-pointer"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
          @click="openCertificate(cert)"
        >
          <div class="relative overflow-hidden rounded-md mb-4">
            <img :src="cert.src" :alt="cert.alt" class="w-full h-40 object-cover rounded-md" loading="lazy" />
          </div>
          <h3 class="text-lg font-bold text-purple-700">
            {{ cert.title || `Certificate ${index + 1}` }}
          </h3>
          <p class="text-sm text-gray-800">{{ cert.issuer }}</p>
          <div class="flex items-center justify-between text-xs mt-2">
            <span class="text-blue-600">{{ cert.year }}</span>
          </div>
          <div class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="skill in cert.skills.slice(0, 3)"
              :key="skill"
              class="px-2 py-1 text-xs bg-yellow-100 text-yellow-900 rounded-full border border-yellow-400"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- GIF Card -->
        <div
          v-else
          class="sm:ml-20 mt-0 sm:mt-64 flex items-center justify-center"
        >
          <img :src="cert.src" :alt="cert.alt" class="w-full h-30 object-contain hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>

    <!-- Certificate Modal -->
    <div
      v-if="selectedCertificate"
      class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      @click.self="closeCertificate"
    >
      <div class="relative w-full max-w-xl bg-white rounded-xl overflow-hidden border-4 border-pink-400">
        <button
          @click="closeCertificate"
          class="absolute top-2 right-2 bg-pink-200 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-pink-300"
        >
          &times;
        </button>
        <img
          :src="selectedCertificate.src"
          :alt="selectedCertificate.alt"
          class="w-full h-auto"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const certificates = ref([
  {
    src: "/images/certificate-1.jpg",
    alt: "Certificate 1",
    title: "Web Developer Program",
    issuer: "PT. Hactivate Teknologi Indonesia",
    year: "2023",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    src: "/images/certificate-2.jpg",
    alt: "Certificate 2",
    title: "IT Support",
    issuer: "PT. PG Candi Baru",
    year: "2023",
    skills: ["Laravel", "MySQL", "Bootstrap"],
  },
  {
    src: "/images/certificate-3.png",
    alt: "Certificate 3",
    title: "Full Stack Web Developer",
    issuer: "PT. Arkatama Multi Solusindo",
    year: "2024",
    skills: ["Laravel", "MySQL", "Bootstrap"],
  },
  {
    src: "/images/certificate-4.jpg",
    alt: "Certificate 4",
    title: "Junior Web Developer",
    issuer: "BNSP",
    year: "2024",
    skills: ["Framework", "Clean Code", "Structured Programming"],
  },
  {
    src: "/images/certificate-5.jpg",
    alt: "Certificate 5",
    title: "Lead Computer Operator",
    issuer: "BNSP",
    year: "2024",
    skills: ["MS Word", "MS Excel", "MS PowerPoint"],
  }
]);

const gifCard = {
  isGif: true,
  src: "/images/white-cat.gif",
  alt: "Y2K Fun Gif",
};

const displayCertificates = computed(() => {
  const certs = [...certificates.value];
  if (certs.length % 2 !== 0) {
    certs.push(gifCard);
  }
  return certs;
});

const selectedCertificate = ref(null);

const openCertificate = (cert) => {
  selectedCertificate.value = cert;
};

const closeCertificate = () => {
  selectedCertificate.value = null;
};

const handleMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  event.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 0, 255, 0.1), transparent 80%)`;
};

const handleMouseLeave = (event) => {
  event.currentTarget.style.background = '';
};
</script>

<style scoped>
body {
  font-family: 'VT323', monospace;
}
</style>