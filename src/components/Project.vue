<template>
  <section id="project" class="py-16 px-8 bg-white text-gray-800 max-w-6xl mx-auto">
    <h2 class="text-5xl font-extrabold mb-12 tracking-tight border-b-4 border-pink-300 pb-4">
      My Projects
    </h2>

    <div v-for="(project, index) in projects" :key="index" class="mb-16 shadow-lg rounded-2xl border border-pink-200 overflow-hidden">
      <div class="flex flex-col md:flex-row">

        <!-- Carousel in Laptop Screen -->
        <div class="md:w-1/2 flex justify-center items-center bg-pink-50 p-8 relative">
          <div class="laptop-frame relative">
            <div class="screen-image absolute">
              <img
                :src="project.images[activeImage[index]]"
                :alt="project.name + ' screenshot'"
              />
            </div>
          </div>

          <!-- Carousel controls -->
          <button
            @click="prevImage(index)"
            class="absolute left-6 top-1/2 -translate-y-1/2 bg-pink-100 rounded-full p-2 text-pink-500 hover:bg-pink-200 shadow-md"
            aria-label="Previous Image"
          >
            ‹
          </button>
          <button
            @click="nextImage(index)"
            class="absolute right-6 top-1/2 -translate-y-1/2 bg-pink-100 rounded-full p-2 text-pink-500 hover:bg-pink-200 shadow-md"
            aria-label="Next Image"
          >
            ›
          </button>
        </div>

        <!-- Project Info -->
        <div class="md:w-1/2 p-8 flex flex-col justify-between bg-white">
          <div>
            <h3 class="text-3xl font-bold mb-4 border-b border-pink-200 pb-2">
              {{ project.name }}
            </h3>
            <p class="text-gray-700 mb-6 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-4 mb-8">
              <div
                v-for="(tech, i) in project.techStack"
                :key="i"
                class="flex items-center gap-2 bg-pink-50 text-pink-600 border border-pink-300 rounded-full py-1 px-3 text-sm font-medium shadow-sm"
              >
                <img :src="tech.icon" :alt="tech.name + ' icon'" class="w-5 h-5 object-contain"/>
                <span>{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <!-- Links -->
          <div class="flex gap-6 justify-start">
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener"
              class="inline-block bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold py-3 px-6 rounded shadow hover:brightness-110 transition"
            >
              Live Demo
            </a>

            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 border border-pink-500 text-pink-600 font-semibold py-3 px-6 rounded shadow hover:bg-pink-500 hover:text-white transition"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 0C5.372 0 0 5.372 0 12a12 12 0 008.207 11.425c.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.204.085 1.838 1.238 1.838 1.238 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.303.76-1.603-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.63-5.48 5.924.43.37.813 1.102.813 2.222v3.293c0 .32.217.694.825.576A12.002 12.002 0 0024 12c0-6.628-5.373-12-12-12z"
                />
              </svg>
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = [
  {
    name: "FemInsight",
    images: [
      "/images/feminsight-1.png",
      "/images/feminsight-2.png",
      "/images/feminsight-3.png",
      "/images/feminsight-4.png",
      "/images/feminsight-5.png",
      "/images/feminsight-6.png",
    ],
    description: "An educational web application focused on women’s health, including reproductive health, hormonal balance, nutrition, and mental well-being.",
    demo: "https://menstrual-cycle.vercel.app",
    github: "https://github.com/silviansi/feminsight",
    techStack: [
      { name: "Vue.js", icon: "images/vue.png" },
      { name: "Tailwind CSS", icon: "images/tailwind.png" },
    ]
  },
  {
    name: "Stunting Detection Web",
    images: [
      "/images/stunting-1.png",
      "/images/stunting-2.png",
      "/images/stunting-3.png",
    ],
    description:
      "A machine learning-based web app to detect stunting in children using Random Forest model.",
    demo: "",
    github: "https://github.com/silviansi/stunting-detection-web",
    techStack: [
      { name: "Flask", icon: "/images/flask.png" },
      { name: "Python", icon: "/images/python.png" },
      { name: "Scikit-Learn", icon: "/images/scikit-learn.png" },
    ],
  },
  {
    name: "Sistem Pinjaman dan Bagi Hasil Pabrik Gula",
    images: [
      "/images/pinjaman-1.png",
      "/images/pinjaman-2.png",
      "/images/pinjaman-3.png",
    ],
    description:
      "A web app for managing loans and profit-sharing in sugar factories, built with Laravel & MySQL.",
    demo: "",
    github: "https://github.com/silviansi/laravel_kartu_pinjaman",
    techStack: [
      { name: "Laravel", icon: "/images/laravel.png" },
      { name: "MySQL", icon: "/images/mysql.png" },
      { name: "PHP", icon: "/images/php.png" },
      { name: "Bootstrap", icon: "/images/bootstrap.png" }
    ],
  },
  {
    name: "Sistem Informasi Kerja Sama",
    images: [
      "/images/simkerma-1.png",
      "/images/simkerma-2.png",
      "/images/simkerma-3.png",
    ],
    description:
      "A web app for managing work agreements and contracts, built with Laravel & MySQL.",
    demo: "",
    github: "https://gitlab.com/silviansi/simkerma-itsk",
    techStack: [
      { name: "Laravel", icon: "/images/laravel.png" },
      { name: "MySQL", icon: "/images/mysql.png" },
      { name: "PHP", icon: "/images/php.png" },
      { name: "Bootstrap", icon: "/images/bootstrap.png" }
    ],
  },
  {
    name: "Sistem Informasi Laundry",
    images: [
      "/images/iclean-1.png",
      "/images/iclean-2.png",
      "/images/iclean-3.png",
    ],
    description:
      "A laundry management system with user and admin features, built with Javascript.",
    demo: "https://icleann.netlify.app/",
    github: "https://github.com/silviansi/final-project-1-group1",
    techStack: [
      { name: "JavaScript", icon: "/images/javascript.png" },
      { name: "HTML5", icon: "/images/html.png" },
      { name: "CSS3", icon: "/images/css.png" },
    ],
  },
]

const activeImage = ref(projects.map(() => 0))

function nextImage(projectIndex) {
  const imagesCount = projects[projectIndex].images.length
  activeImage.value[projectIndex] =
    (activeImage.value[projectIndex] + 1) % imagesCount
}

function prevImage(projectIndex) {
  const imagesCount = projects[projectIndex].images.length
  activeImage.value[projectIndex] =
    (activeImage.value[projectIndex] - 1 + imagesCount) % imagesCount
}
</script>

<style scoped>
.laptop-frame {
  background-image: url('/images/laptop-frame.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 460px;
  height: 300px;
}

/* Tempat layar berada di belakang */
.screen-image {
  position: absolute;
  top: 16%;
  left: 14%;
  width: 72%;
  height: 63%;
  overflow: hidden;
  border-radius: 2px;
  z-index: 1;
}

.screen-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive */
@media (max-width: 768px) {
  .laptop-frame {
    width: 320px !important;
    height: 210px !important;
  }

  .screen-image {
    top: 16%;
    left: 14%;
    width: 72%;
    height: 63%;
  }
}
</style>