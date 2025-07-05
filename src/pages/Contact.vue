<template>
    <div
        class="window-container flex flex-col"
        :style="{ ...computedStyle, zIndex: baseZ }"
        ref="windowRef"
        @mousedown="(e) => { startDrag(e); updateZ() }"
    >
        <!-- Header -->
        <div class="window-header">
            <div class="window-controls">
                <div class="window-dot bg-red-400"></div>
                <div class="window-dot bg-yellow-300"></div>
                <div class="window-dot bg-green-400"></div>
            </div>
            <span class="window-title">📁 Contact Directory</span>
            <div class="window-controls">
                <MinusIcon class="w-5 h-5 cursor-pointer" @click="$emit('minimize')" />
                <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" @click="toggleMaximize" />
                <XMarkIcon class="w-5 h-5 cursor-pointer" @click="$emit('close')" />
            </div>
        </div>

        <!-- Content: File Explorer -->
        <div class="flex-1 overflow-y-auto bg-gradient-to-br from-pink-50 to-pink-100 p-6 font-mono text-sm text-pink-800">
            <p class="mb-4">📁 <strong>Contact</strong></p>
            <ul class="space-y-3 pl-6">
                <li v-for="item in contacts" :key="item.label" class="flex items-center gap-2">├──
                    <img src="/images/icon-folder.png" alt="file" class="w-5 h-5" />
                    <a :href="item.link" target="_blank" class="hover:underline text-blue-600">
                        {{ item.label }}.url
                    </a>
                </li>
            </ul>
        </div>

        <!-- Footer -->
        <div class="bg-pink-300 px-4 py-2 text-center text-xs text-pink-900">
            💌 Handcrafted with love & glitter ✨
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onBeforeUnmount } from 'vue'
import { MinusIcon, ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/vue/24/solid'

defineProps({
    baseZ: Number,
    updateZ: Function,
})

// Contact Data
const contacts = [
    { label: 'Instagram', link: 'https://instagram.com/silviansi' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/silviansi' },
    { label: 'GitHub', link: 'https://github.com/silviansi' },
    { label: 'Email', link: 'mailto:silviansi03@gmail.com' },
]

// Drag & Maximize Logic
const windowRef = ref(null)
const isMaximized = ref(false)
const position = reactive({ x: 160, y: 140 })
const size = reactive({ width: 480, height: 360 })

const computedStyle = computed(() => {
    return isMaximized.value
        ? { top: '0', left: '0', width: '100vw', height: '100vh' }
        : { top: position.y + 'px', left: position.x + 'px', width: size.width + 'px' }
})

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