<template>
    <div
        class="window-container"
        :style="{ ...computedStyle, zIndex: baseZ }"
        ref="windowRef"
        @mousedown="handleMouseDown"
    >
        <!-- Header -->
        <div class="window-header">
            <span class="window-title">📁 My Path</span>

            <div class="window-controls">
                <MinusIcon class="w-5 h-5 cursor-pointer" title="Minimize" @click="$emit('minimize')" />
                <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" title="Maximize" @click="toggleMaximize" />
                <XMarkIcon class="w-5 h-5 cursor-pointer" title="Close" @click="$emit('close')" />
            </div>
        </div>

        <!-- Content -->
        <div class="p-6 max-h-[85vh] overflow-y-auto">
            <section class="max-w-5xl mx-auto px-2 grid md:grid-cols-2 gap-10">
                <!-- Internship & Trainings -->
                <div>
                    <h2 class="text-xl font-['Press_Start_2P'] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pb-1 mb-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                        Internship & Trainings
                    </h2>
                    <div class="space-y-6">
                        <div
                            class="experience-item"
                            v-for="(item, i) in experiences"
                            :key="i"
                        > 
                            <h3 class="text-xl font-semibold">├── {{ item.title }}</h3>
                            <p class="text-base text-fuchsia-500">{{ item.company }} ({{ item.duration }})</p>
                            <p class="mt-1 text-justify">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>

                <!-- Education -->
                <div>
                <h2 class="text-xl font-['Press_Start_2P'] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pb-1 mb-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                    Education
                </h2>
                <div class="space-y-6">
                    <div
                        class="experience-item"
                        v-for="(edu, i) in educations"
                        :key="i"
                    >
                        <h3 class="text-xl font-semibold">├── {{ edu.school }}</h3>
                        <p class="text-base text-pink-500">{{ edu.major }}</p>
                        <p v-if="edu.gpa" class="text-pink-700 text-sm">GPA: {{ edu.gpa }}</p>
                        <p class="mt-1 text-justify">{{ edu.desc }}</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onBeforeUnmount } from 'vue'
import { MinusIcon, ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const { baseZ, updateZ } = defineProps({
    baseZ: Number,
    updateZ: Function,
})

const handleMouseDown = (e) => {
    startDrag(e)
    updateZ()
}

// Data for Internship & Trainings
const experiences = [
    {
        title: 'Full Stack Web Developer - Trainings',
        company: 'PT. Arkatama Multi Solusindo',
        duration: 'Feb 2024 – Jul 2024',
        desc: 'Studied web development using Laravel framework and MySQL database. Worked on a final group project, contributing as a front-end developer, responsible for implementing responsive user interfaces and ensuring seamless user experience.',
    },
    {
        title: 'Full Stack Web Developer - Internship',
        company: 'PT. Pabrik Gula Candi Baru',
        duration: 'Sep 2023 – Des 2023',
        desc: 'Assisted in merging multiple Excel data files and preparing presentation materials. Designed and implemented a web-based loan and profit-sharing system, from wireframe to web development, focusing on usability and functionality.',
    },
    {
        title: 'Web Developer Program - Trainings',
        company: 'PT. Hacktivate Teknologi Indonesia',
        duration: 'Feb 2023 – Jul 2023',
        desc: 'Learned full-stack web development fundamentals from scratch, including HTML, CSS, and JavaScript. Built several interactive web interfaces and completed a final project using pure JavaScript without any frameworks, focusing on clean code and responsive design.',
    }
]

// Data for Education
const educations = [
    {
        school: 'Universitas Negeri Surabaya',
        major: 'S1 Teknik Informatika',
        gpa: '3.81',
        desc: 'Focused on Data Science and Web Development, with in-depth study of programming, data analysis, and statistical modeling. Completed a thesis project on building a web-based stunting detection system for toddlers using the Random Forest algorithm, combining health data insights with predictive modeling techniques.',
    },
    {
        school: 'SMA Negeri 1 Krembung',
        major: 'Acceleration Science Program',
        desc: 'Completed high school education in just 2 years through the Acceleration Program, designed for students with outstanding academic performance and high learning capacity. Gained a solid foundation in science and mathematics with a strong emphasis on discipline, critical thinking, and time management.',
    }
]

// Window behavioe state
const isMaximized = ref(false)
const windowRef = ref(null)
const position = reactive({ x: 120, y: 100 })
const size = reactive({ width: 800, height: 500 })

// Compute style based on maximized state
const computedStyle = computed(() =>
    isMaximized.value
        ? { top: '0', left: '0', width: '100vw', height: '100vh' }
        : { top: `${position.y}px`, left: `${position.x}px`, width: `${size.width}px`, height: `${size.height}px` }
)

// Drag logic
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

onBeforeUnmount(() => {
    stopDrag()
})
</script>

<style scoped>
.experience-item {
    transition: transform 0.3s ease;
}

.experience-item:hover {
    transform: translateX(5px);
}
</style>