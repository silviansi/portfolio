<template>
    <div
        class="absolute rounded-md overflow-hidden border-[2px] border-pink-400 bg-white text-black shadow-xl font-['VT323'] flex flex-col z-[999]"
        :style="computedStyle"
        ref="windowRef"
        @mousedown="updateZ"
    >

        <!-- Header -->
        <div
            class="bg-pink-300 px-4 py-2 flex items-center justify-between cursor-move select-none"
            @mousedown="startDrag"
        >
            <div class="flex gap-2">
                <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            <span class="text-lg font-bold">📜 My Certificates</span>

            <div class="flex gap-2">
                <MinusIcon class="w-5 h-5 cursor-pointer" @click="$emit('minimize')" />
                <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" @click="toggleMaximize" />
                <XMarkIcon class="w-5 h-5 cursor-pointer" @click="$emit('close')" />
            </div>
        </div>

        <!-- Certificate Grid -->
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
import { MinusIcon, ArrowsPointingOutIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

defineProps({
    baseZ: Number,
    updateZ: Function,
})

const windowRef = ref(null)
const position = reactive({ x: 100, y: 100 })
const size = reactive({ width: 960, height: 580 })
const isDragging = ref(false)
let offsetX = 0
let offsetY = 0

const computedStyle = computed(() => ({
    top: `${position.y}px`,
    left: `${position.x}px`,
    width: `${size.width}px`,
    height: `${size.height}px`,
}))

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

<style scoped>
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-thumb {
    background-color: #f472b6;
    border-radius: 3px;
}
</style>