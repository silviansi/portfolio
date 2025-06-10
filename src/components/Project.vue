<template>
  <section id="project" class="py-16 px-8 max-w-5xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-5xl font-bold uppercase border-b-2 border-gray-300 inline-block pb-2">
        My <span class="text-pink-300 dark:text-purple-300">Projects</span>
      </h2>
      <p class="text-gray-500 mt-2 italic">A showcase of my work, demonstrating my skills and creativity.</p>
      
      <!-- Filter Buttons -->
      <div class="flex justify-center gap-4 mt-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="setActiveFilter(category)"
          :class="[
            'px-5 py-2 rounded-full font-semibold transition-all duration-300 border-2',
            activeFilter === category
              ? 'bg-gradient-to-b from-pink-400 to-pink-600 dark:from-purple-300 dark:to-purple-500 text-white border-pink-500 dark:border-purple-500 shadow-lg'
              : 'bg-white dark:bg-gray-800 text-pink-600 dark:text-purple-400 border-pink-300 dark:border-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/30'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id" 
        class="bg-white dark:bg-purple-900/20 shadow-lg rounded-2xl border border-pink-200 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105"
      >
        <!-- Project Image -->
        <div class="aspect-video overflow-hidden bg-pink-50 dark:bg-purple-100">
          <img
            :src="project.images[0]"
            :alt="project.name + ' screenshot'"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Project Info -->
        <div class="p-4">
          <h3 class="text-2xl font-bold mb-3 border-b border-pink-200 pb-2">
            {{ project.name }}
          </h3>
          <p class="text-gray-700 dark:text-gray-50 mb-4 leading-relaxed text-sm">
            {{ project.description }}
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-6">
            <div
              v-for="(tech, i) in project.techStack"
              :key="i"
              class="flex items-center gap-2 bg-pink-50 dark:bg-purple-200 text-pink-600 border border-pink-300 rounded-full py-1 px-3 text-xs font-medium shadow-sm"
            >
              <img :src="tech.icon" :alt="tech.name + ' icon'" class="w-4 h-4 object-contain"/>
              <span>{{ tech.name }}</span>
            </div>
          </div>

          <!-- Links -->
          <div class="flex gap-3 justify-start">
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener"
              class="inline-block bg-gradient-to-b from-pink-400 to-pink-600 dark:from-purple-300 dark:to-purple-500 text-white font-semibold py-2 px-4 rounded text-sm shadow hover:brightness-110 transition"
            >
              Live Demo
            </a>

            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 border border-pink-500 dark:border-purple-500 text-pink-600 dark:text-purple-600 font-semibold py-2 px-4 rounded text-sm shadow hover:bg-pink-500 dark:hover:bg-purple-400 hover:text-white transition"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
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

    <!-- No projects message -->
    <div v-if="filteredProjects.length === 0" class="text-center py-16">
      <p class="text-gray-500 text-lg">No projects found for the selected category.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const projects = [
  {
    id: 0,
    name: "Calculator App",
    category: "Desktop App",
    images: [
      "/images/calculator.png",
    ],
    description:
      "A simple calculator desktop application built with Electron.js.",
    demo: "",
    github: "https://github.com/silviansi/electronjs-calculator",
    techStack: [
      { name: "Electron.js", icon: "/images/electronjs.png" },
      { name: "JavaScript", icon: "/images/javascript.png" },
      { name: "HTML5", icon: "/images/html.png" },
      { name: "CSS3", icon: "/images/css.png" },
    ],
  },
  {
    id: 1,
    name: "FemInsight",
    category: "Website",
    images: [
      "/images/feminsight.png"
    ],
    description: "An educational web application focused on women's health, including reproductive health, hormonal balance, nutrition, and mental well-being.",
    demo: "https://menstrual-cycle.vercel.app",
    github: "https://github.com/silviansi/feminsight",
    techStack: [
      { name: "Vue.js", icon: "images/vue.png" },
      { name: "Tailwind CSS", icon: "images/tailwind.png" },
    ]
  },
  {
    id: 2,
    name: "Photobooth Web",
    category: "Website",
    images: [
      "/images/photobooth-1.png",
    ],
    description:
      "A web app for capturing photos using webcam, built with Vue.js and Tailwind CSS.",
    demo: "https://photobooth-web.vercel.app/",
    github: "https://github.com/silviansi/photobooth",
    techStack: [
      { name: "Vue.js", icon: "images/vue.png" },
      { name: "Tailwind CSS", icon: "images/tailwind.png" },
    ]
  },
  {
    id: 3,
    name: "Stunting Detection Web",
    category: "Website",
    images: [
      "/images/stunting-1.png"
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
    id: 4,
    name: "Sistem Pinjaman dan Bagi Hasil Pabrik Gula",
    category: "Website",
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
    id: 5,
    name: "Sistem Informasi Kerja Sama",
    category: "Website",
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
    id: 6,
    name: "Sistem Informasi Laundry",
    category: "Website",
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
  {
    id: 7,
    name: "eKos",
    category: "Website",
    images: [
      "/images/ekos-1.png",
      "/images/ekos-2.png",
    ],
    description:
      "A web app for managing boarding houses, built with Laravel & MySQL.",
    github: "https://github.com/silviansi/ekos",
    techStack: [
      { name: "PHP", icon: "/images/php.png" },
      { name: "MySQL", icon: "/images/mysql.png" },
      { name: "Bootstrap", icon: "/images/bootstrap.png" }
    ],
  },
]

const categories = ['All', 'Website', 'Desktop App']
const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})

function setActiveFilter(category) {
  activeFilter.value = category
}
</script>