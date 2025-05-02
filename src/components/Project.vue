<template>
  <section id="project" class="py-16 px-8 text-center">
    <h2 class="text-4xl font-extrabold text-white mb-12 tracking-wide">My Projects</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
        class="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-xl hover:shadow-pink-500/30 transition duration-300 hover:scale-[1.03]">

        <!-- Gambar -->
        <div class="overflow-hidden h-60 rounded-t-2xl">
          <img
            :src="project.images[0]"
            :alt="project.name"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
        </div>

        <!-- Tombol Detail (overlay) -->
        <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
          <button
            @click="openModal(project)"
            class="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow hover:brightness-110 transition">
            View Details
          </button>
        </div>

        <!-- Nama Project -->
        <div class="py-4 px-4 text-white">
          <h3 class="text-lg font-semibold tracking-wide">{{ project.name }}</h3>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div v-if="selectedProject" class="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div class="bg-gray-900 text-white rounded-xl p-6 sm:p-8 max-w-lg w-[90%] sm:w-full relative shadow-2xl border border-pink-500 animate-fadeIn">
          <button @click="closeModal" class="absolute top-2 right-3 text-pink-400 hover:text-pink-300 text-3xl">&times;</button>

          <h3 class="text-2xl font-bold mb-4">{{ selectedProject.name }}</h3>

          <!-- Carousel -->
          <div class="relative mb-4">
            <img
              :src="selectedProject.images[activeImage]"
              alt="Project Image"
              class="w-full h-48 object-cover rounded"/>
            <button
              @click="prevImage"
              class="absolute top-1/2 left-2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 shadow">
              ‹
            </button>
            <button
              @click="nextImage"
              class="absolute top-1/2 right-2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 shadow">
              ›
            </button>

            <!-- Indikator Bulat -->
            <div class="flex justify-center mt-2 space-x-2">
              <span
                v-for="(img, idx) in selectedProject.images"
                :key="idx"
                :class="[
                  'w-3 h-3 rounded-full',
                  idx === activeImage ? 'bg-pink-500' : 'bg-pink-300 opacity-50'
                ]"
              ></span>
            </div>
          </div>

          <p class="text-gray-300 mb-4">{{ selectedProject.description }}</p>

          <div class="flex gap-4 justify-center">
            <a
              v-if="selectedProject.demo"
              :href="selectedProject.demo"
              target="_blank"
              class="bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 text-white py-2 px-4 rounded shadow transition">
              Live Demo
            </a>

            <a
              v-if="selectedProject.github"
              :href="selectedProject.github"
              target="_blank"
              class="border border-pink-500 hover:bg-pink-500 text-pink-300 hover:text-white py-2 px-4 rounded transition">
              Github
            </a>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Stunting Detection Web",
          images: [
            "/images/stunting-1.png",
            "/images/stunting-2.png",
            "/images/stunting-3.png",
          ],
          description: "A machine learning-based web app to detect stunting in children using Random Forest model.",
          demo: "",
          github: "https://github.com/silviansi/stunting-detection-web",
        },
        {
          name: "Sistem Pinjaman dan Bagi Hasil Pabrik Gula",
          images: [
            "/images/pinjaman-1.png",
            "/images/pinjaman-2.png",
            "/images/pinjaman-3.png",
          ],
          description: "A web app for managing loans and profit-sharing in sugar factories, built with Laravel & MySQL.",
          demo: "",
          github: "https://github.com/silviansi/laravel_kartu_pinjaman",
        },
        {
          name: "Sistem Informasi Kerja Sama",
          images: [
            "/images/simkerma-1.png",
            "/images/simkerma-2.png",
            "/images/simkerma-3.png",
          ],
          description: "A web app for managing work agreements and contracts, built with Laravel & MySQL.",
          demo: "",
          github: "https://gitlab.com/silviansi/simkerma-itsk",
        },
      ],
      selectedProject: null,
      activeImage: 0,
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.activeImage = 0;
    },
    closeModal() {
      this.selectedProject = null;
    },
    nextImage() {
      if (this.activeImage < this.selectedProject.images.length - 1) {
        this.activeImage++;
      } else {
        this.activeImage = 0;
      }
    },
    prevImage() {
      if (this.activeImage > 0) {
        this.activeImage--;
      } else {
        this.activeImage = this.selectedProject.images.length - 1;
      }
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out;
}
</style>