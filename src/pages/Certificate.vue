<template>
    <div
        class="window-container flex flex-col z-20"
        :style="computedStyle"
        ref="windowRef"
        @mousedown="handleMouseDown"
    >

        <!-- Header -->
        <div class="window-header">

            <span class="window-title">📜 My Certificates</span>

            <div class="window-controls">
                <MinusIcon class="w-5 h-5 cursor-pointer" title="Minimize" @click="$emit('minimize')" />
                <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" title="Maximize" @click="toggleMaximize" />
                <XMarkIcon class="w-5 h-5 cursor-pointer" title="Close" @click="$emit('close')" />
            </div>
        </div>

        <!-- Content -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4 overflow-y-auto bg-pink-50 flex-1">
            <div
                v-for="(cert, index) in certificates"
                :key="index"
                class="border-2 border-dashed border-pink-300 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
                @click="selected = cert"
            >
                <img :src="cert.src" :alt="cert.title" class="h-40 object-cover rounded-md mb-2 w-full" />
                <h3 class="text-lg font-bold text-pink-700">{{ cert.title }}</h3>
                <p class="text-sm">{{ cert.issuer }} &bull; {{ cert.year }}</p>
                <div class="flex flex-wrap gap-2 mt-2">
                    <span
                        v-for="(skill, i) in cert.skills"
                        :key="i"
                        class="text-xs bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-full px-2 py-0.5"
                    >
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Floating Preview (if selected) -->
        <div
            v-if="selected"
            class="absolute bottom-4 right-4 bg-white border-2 border-pink-400 rounded-lg shadow-lg p-2 w-72"
        >
            <div class="flex justify-between items-center mb-2">
                <strong class="text-pink-700 text-sm">{{ selected.title }}</strong>
                <button @click="selected = null" class="text-xs text-pink-500 hover:text-red-600">✖</button>
            </div>
            <img :src="selected.src" :alt="selected.title" class="rounded w-full" />
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

const windowRef = ref(null)
const isMaximized = ref(false)

const position = reactive({ x: 100, y: 100 })
const size = reactive({ width: 960, height: 500 })

const computedStyle = computed(() =>
    isMaximized.value
        ? { top: '0', left: '0', width: '100vw', height: '100vh' }
        : { top: `${position.y}px`, left: `${position.x}px`, width: `${size.width}px`, height: `${size.height}px` }
)

const isDragging = ref(false)
let offsetX = 0
let offsetY = 0

const startDrag = (e) => {
    isDragging.value = true
    offsetX = e.clientX - position.x
    offsetY = e.clientY - position.y
    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', stopDrag)
}

const onDrag = (e) => {
    if (!isDragging.value) return
    position.x = e.clientX - offsetX
    position.y = e.clientY - offsetY
}

const stopDrag = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
}

const toggleMaximize = () => {
    isMaximized.value = !isMaximized.value
}

onBeforeUnmount(() => {
    stopDrag()
})

const selected = ref(null)

const certificates = [
    {
        src: "/images/certificate-1.jpg",
        title: "Web Developer Program",
        issuer: "PT. Hactivate Teknologi Indonesia",
        year: "2023",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        src: "/images/certificate-2.jpg",
        title: "IT Support",
        issuer: "PT. PG Candi Baru",
        year: "2023",
        skills: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
        src: "/images/certificate-3.png",
        title: "Full Stack Web Developer",
        issuer: "PT. Arkatama Multi Solusindo",
        year: "2024",
        skills: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
        src: "/images/certificate-4.jpg",
        title: "Junior Web Developer",
        issuer: "BNSP",
        year: "2024",
        skills: ["Framework", "Clean Code", "Structured Programming"],
    },
    {
        src: "/images/certificate-5.jpg",
        title: "Lead Computer Operator",
        issuer: "BNSP",
        year: "2024",
        skills: ["MS Word", "MS Excel", "MS PowerPoint"],
    },
]
</script>