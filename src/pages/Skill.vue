<template>
    <div
        class="absolute rounded-md overflow-hidden border-[2px] border-pink-400 bg-pink-100 shadow-lg font-[VT323] text-pink-900 flex flex-col"
        :style="{ ...computedStyle, zIndex: baseZ }"
        ref="windowRef"
        @mousedown="(e) => { startDrag(e); updateZ() }"
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
            <span class="text-lg font-bold">💻 Tech Skills</span>
            <div class="flex gap-2">
                <MinusIcon class="w-5 h-5 cursor-pointer" @click="$emit('minimize')" />
                <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" @click="toggleMaximize" />
                <XMarkIcon class="w-5 h-5 cursor-pointer" @click="$emit('close')" />
            </div>
        </div>

        <!-- Content -->
        <div class="flex-1 bg-gradient-to-br from-pink-50 to-pink-200 overflow-y-auto p-6 space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div
                v-for="skill in skills"
                :key="skill.name"
                class="bg-white border border-pink-300 rounded-lg p-4 flex flex-col items-center justify-center shadow hover:shadow-lg hover:bg-pink-50 transition"
                >
                <img :src="skill.icon" alt="" class="w-12 h-12 mb-2" />
                <p class="text-sm text-center">{{ skill.name }}</p>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="bg-pink-300 px-4 py-2 text-sm text-center">
            <p class="text-xs">Stay fabulous and always keep coding ✨</p>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { MinusIcon, ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/vue/24/solid'

defineProps({
    baseZ: Number,
    updateZ: Function,
})

const isMaximized = ref(false)
const windowRef = ref(null)

const position = reactive({ x: 150, y: 150 })
const size = reactive({ width: 600, height: 400 })

const computedStyle = computed(() =>
    isMaximized.value
        ? {
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
        }
        : {
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: `${size.width}px`,
            height: `${size.height}px`,
        }
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

onBeforeUnmount(() => {
    stopDrag()
})

const skills = ref([
    { name: 'HTML', icon: '/images/skills/html.png' },
    { name: 'CSS', icon: '/images/skills/css.png' },
    { name: 'JavaScript', icon: '/images/skills/javascript.png' },
    { name: 'Laravel', icon: '/images/skills/laravel.png' },
    { name: 'PHP', icon: '/images/skills/php.png' },
    { name: 'MySQL', icon: '/images/skills/mysql.png' },
    { name: 'Python', icon: '/images/skills/python.png' },
    { name: 'Flask', icon: '/images/skills/flask.png' },
    { name: 'Vue.js', icon: '/images/skills/vue.png' },
    { name: 'Tailwind CSS', icon: '/images/skills/tailwind.png' },
    { name: 'Bootstrap', icon: '/images/skills/bootstrap.png' },
    { name: 'GitHub', icon: '/images/skills/github.png' },
    { name: 'Figma', icon: '/images/skills/figma.png' },
    { name: 'Word', icon: '/images/skills/word.png' },
    { name: 'Excel', icon: '/images/skills/excel.png' },
    { name: 'PowerPoint', icon: '/images/skills/powerpoint.png' },
])
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
