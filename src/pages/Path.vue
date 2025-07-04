<template>
    <div
        class="absolute rounded-md overflow-hidden border-[2px] border-pink-400 bg-pink-100 shadow-lg font-[VT323] text-pink-900"
        :style="{ ...computedStyle, zIndex: baseZ }"
        ref="windowRef"
        @mousedown="($e) => { startDrag($e); updateZ() }"
    >
        <!-- Window Header -->
        <div class="window-header">
            <div class="flex gap-2">
                <div class="window-dot bg-red-400"></div>
                <div class="window-dot bg-yellow-300"></div>
                <div class="window-dot bg-green-400"></div>
            </div>

            <span class="window-title">📁 My Path</span>

            <div class="window-controls">
                <MinusIcon class="w-5 h-5 cursor-pointer" @click="$emit('minimize')" />
                <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" @click="toggleMaximize" />
                <XMarkIcon class="w-5 h-5 cursor-pointer" @click="$emit('close')" />
            </div>
        </div>

        <!-- Window Content -->
        <div class="p-6 max-h-[85vh] overflow-y-auto">
            <section class="max-w-5xl mx-auto px-2 grid md:grid-cols-2 gap-10">
                <!-- Internship & Trainings -->
                <div>
                <h2 class="text-2xl font-['Press_Start_2P'] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pb-1 mb-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                    Internship & Trainings
                </h2>
                <div class="space-y-6 border-l-4 border-dashed border-fuchsia-300 pl-4">
                    <div class="experience-item">
                    <h3 class="text-xl font-semibold">Full Stack Web Developer - Trainings</h3>
                    <p class="text-base text-fuchsia-500">PT. Arkatama Multi Solusindo (Feb 2024 – Jul 2024)</p>
                    <p class="mt-1 text-justify">
                        Studied web development using Laravel framework and MySQL database.
                        Worked on a final group project, contributing as a front-end developer.
                    </p>
                    </div>
                    <div class="experience-item">
                    <h3 class="text-xl font-semibold">Full Stack Web Developer - Internship</h3>
                    <p class="text-base text-fuchsia-500">PT. Pabrik Gula Candi Baru (Sep 2023 – Des 2023)</p>
                    <p class="mt-1 text-justify">
                        Designed and implemented a web-based loan and profit-sharing system.
                    </p>
                    </div>
                    <div class="experience-item">
                    <h3 class="text-xl font-semibold">Web Developer Program - Trainings</h3>
                    <p class="text-base text-fuchsia-500">PT. Hacktivate Teknologi Indonesia (Feb 2023 – Jul 2023)</p>
                    <p class="mt-1 text-justify">
                        Built interactive web interfaces and completed a final project using JavaScript.
                    </p>
                    </div>
                </div>
                </div>

                <!-- Education -->
                <div>
                <h2 class="text-2xl font-['Press_Start_2P'] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 pb-1 mb-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                    Education
                </h2>
                <div class="space-y-6 border-l-4 border-dashed border-pink-300 pl-4">
                    <div class="experience-item">
                    <h3 class="text-xl font-semibold">Universitas Negeri Surabaya</h3>
                    <p class="text-base text-pink-500">S1 Teknik Informatika (2020 – 2025)</p>
                    <p class="text-pink-700 text-sm">GPA: 3.81</p>
                    <p class="mt-1 text-justify">
                        Focused on Data Science and Web Development. Built a web-based stunting detection system using Random Forest.
                    </p>
                    </div>
                    <div class="experience-item">
                    <h3 class="text-xl font-semibold">SMA Negeri 1 Krembung</h3>
                    <p class="text-base text-pink-500">Acceleration Science Program (2018 – 2020)</p>
                    <p class="mt-1 text-justify">
                        Completed high school in 2 years through the Acceleration Program.
                    </p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { MinusIcon, ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/vue/24/solid'

defineProps({
    baseZ: Number,
    updateZ: Function,
})

const isMaximized = ref(false)
const windowRef = ref(null)
const position = reactive({ x: 120, y: 100 })
const size = reactive({ width: 800, height: 500 })

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
</script>

<style scoped>
.experience-item {
    transition: transform 0.3s ease;
}

.experience-item:hover {
    transform: translateX(5px);
}
</style>