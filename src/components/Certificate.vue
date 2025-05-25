<template>
  <section id="certificate" class="py-20 bg-white text-gray-800">
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
          class="bg-pink-50 border border-pink-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
        >
          <img
            :src="cert.src"
            :alt="cert.alt"
            class="rounded-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const certificates = ref([
  { src: "/images/certificate-1.jpg", alt: "Certificate 1" },
  { src: "/images/certificate-2.jpg", alt: "Certificate 2" },
  { src: "/images/certificate-3.png", alt: "Certificate 3" },
  { src: "/images/certificate-4.jpg", alt: "Certificate 4" },
]);
</script>