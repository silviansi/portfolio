<template>
    <div
        class="window-container flex flex-col"
        :style="{ ...computedStyle, zIndex: baseZ }"
        ref="windowRef"
        @mousedown="handleMouseDown"
    >
        <!-- Header -->
        <div class="window-header">

            <span class="window-title">💻 Project Folder</span>

            <div class="window-controls">
                <MinusIcon class="w-5 h-5 cursor-pointer" @click="$emit('minimize')" />
                <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" @click="toggleMaximize" />
                <XMarkIcon class="w-5 h-5 cursor-pointer" @click="$emit('close')" />
            </div>
        </div>

        <!-- Content -->
        <div class="flex-1 overflow-y-auto p-4 bg-gradient-to-br from-pink-50 to-pink-200 space-y-4">
        <div v-for="project in projects" :key="project.id" class="bg-white rounded-lg shadow border border-pink-200 p-4 space-y-2">
            <div class="flex items-center gap-3">
            <img :src="project.images[0]" class="w-20 h-14 object-cover rounded border border-pink-200" />
            <div>
                <h3 class="text-pink-600 font-bold text-lg">{{ project.name }}</h3>
                <p class="text-sm text-pink-700">{{ project.description }}</p>
            </div>
            </div>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
            <span
                v-for="(tech, i) in project.techStack"
                :key="i"
                class="flex items-center gap-1 bg-yellow-100 text-yellow-900 text-xs px-2 py-1 rounded-full border border-yellow-300 shadow-sm"
            >
                <img :src="tech.icon" class="w-4 h-4 object-contain" />
                {{ tech.name }}
            </span>
            </div>

            <!-- Links -->
            <div class="flex gap-3 mt-2">
            <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold transition"
            >
                ✨ Live Demo
            </a>
            <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="text-purple-600 border border-purple-400 px-3 py-1 rounded-full text-xs font-semibold hover:bg-purple-100"
            >
                GitHub
            </a>
            </div>
        </div>
        </div>

        <!-- Footer -->
        <div class="bg-pink-300 text-center text-sm py-2">
        💻 Barbie Dev Studio — All Projects with Sparkles ✨
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { MinusIcon, ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const { baseZ, updateZ } = defineProps({
    baseZ: Number,
    updateZ: Function,
})

const handleMouseDown = (e) => {
    startDrag(e)
    updateZ()
}

const windowRef = ref(null)
const isMaximized = ref(false)

const position = reactive({ x: 100, y: 100 })
const size = reactive({ width: 680, height: 540 })

const computedStyle = computed(() =>
    isMaximized.value
        ? { top: '0', left: '0', width: '100vw', height: '100vh' }
        : { top: `${position.y}px`, left: `${position.x}px`, width: `${size.width}px`, height: `${size.height}px` }
)

let dragging = false
let offsetX = 0
let offsetY = 0

const startDrag = (e) => {
    if (isMaximized.value) return
    dragging = true
    offsetX = e.clientX - position.x
    offsetY = e.clientY - position.y
    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', stopDrag)
}

const onDrag = (e) => {
    if (!dragging) return
    position.x = e.clientX - offsetX
    position.y = e.clientY - offsetY
}

const stopDrag = () => {
    dragging = false
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
}

const toggleMaximize = () => {
    isMaximized.value = !isMaximized.value
}

// Projects
const projects = ref([
    {
        id: 0,
        name: "Calculator App",
        images: ["/images/calculator.png"],
        description: "A simple calculator desktop app built with Electron.js.",
        demo: "",
        github: "https://github.com/silviansi/electronjs-calculator",
        techStack: [
            { name: "Electron.js", icon: "/images/skills/electronjs.png" },
            { name: "JavaScript", icon: "/images/skills/javascript.png" },
            { name: "HTML5", icon: "/images/skills/html.png" },
            { name: "CSS3", icon: "/images/skills/css.png" },
        ],
    },
    {
        id: 1,
        name: "FemInsight",
        images: ["/images/feminsight.png"],
        description: "Educational web on women's health and hormones.",
        demo: "https://menstrual-cycle.vercel.app",
        github: "https://github.com/silviansi/feminsight",
        techStack: [
            { name: "Vue.js", icon: "images/skills/vue.png" },
            { name: "Tailwind CSS", icon: "images/skills/tailwind.png" },
        ],
    },
    {
        id: 2,
        name: "Photobooth Web",
        images: ["/images/photobooth-1.png"],
        description: "Take cute selfies with your webcam 💕📸",
        demo: "https://photobooth-web.vercel.app/",
        github: "https://github.com/silviansi/photobooth",
        techStack: [
            { name: "Vue.js", icon: "images/skills/vue.png" },
            { name: "Tailwind CSS", icon: "images/skills/tailwind.png" },
        ],
    },
    {
        id: 3,
        name: "Stunting Detection",
        images: ["/images/stunting-1.png"],
        description: "ML web to detect stunting in kids using Random Forest.",
        demo: "",
        github: "https://github.com/silviansi/stunting-detection-web",
        techStack: [
            { name: "Flask", icon: "/images/skills/flask.png" },
            { name: "Python", icon: "/images/skills/python.png" },
            { name: "Scikit-Learn", icon: "/images/skills/scikit-learn.png" },
        ],
    },
    {
        id: 4,
        name: "Sistem Pinjaman dan Bagi Hasil Pabrik Gula",
        category: "Website",
        images: [
            "/images/pinjaman-1.png"
        ],
        description: "A web app for managing loans and profit-sharing in sugar factories.",
        demo: "",
        github: "https://github.com/silviansi/laravel_kartu_pinjaman",
        techStack: [
            { name: "Laravel", icon: "/images/skills/laravel.png" },
            { name: "MySQL", icon: "/images/skills/mysql.png" },
            { name: "PHP", icon: "/images/skills/php.png" },
            { name: "Bootstrap", icon: "/images/skills/bootstrap.png" }
        ],
    },
    {
        id: 5,
        name: "Sistem Informasi Kerja Sama",
        category: "Website",
        images: ["/images/simkerma-1.png"],
        description: "A web app for managing work agreements and contracts.",
        demo: "",
        github: "https://gitlab.com/silviansi/simkerma-itsk",
        techStack: [
            { name: "Laravel", icon: "/images/skills/laravel.png" },
            { name: "MySQL", icon: "/images/skills/mysql.png" },
            { name: "PHP", icon: "/images/skills/php.png" },
            { name: "Bootstrap", icon: "/images/skills/bootstrap.png" }
        ],
    },
    {
        id: 6,
        name: "Sistem Informasi Laundry",
        category: "Website",
        images: ["/images/iclean-1.png"],
        description: "A laundry management system with user and admin features.",
        demo: "https://icleann.netlify.app/",
        github: "https://github.com/silviansi/final-project-1-group1",
        techStack: [
            { name: "JavaScript", icon: "/images/skills/javascript.png" },
            { name: "HTML5", icon: "/images/skills/html.png" },
            { name: "CSS3", icon: "/images/skills/css.png" },
        ],
    },
    {
        id: 7,
        name: "eKos",
        images: ["/images/ekos-1.png"],
        description: "Boarding house management web using Laravel.",
        demo: "",
        github: "https://github.com/silviansi/ekos",
        techStack: [
            { name: "PHP", icon: "/images/skills/php.png" },
            { name: "MySQL", icon: "/images/skills/mysql.png" },
            { name: "Bootstrap", icon: "/images/skills/bootstrap.png" }
        ],
    },
])
</script>