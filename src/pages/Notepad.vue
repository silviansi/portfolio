<template>
    <div
        class="window-container"
        :style="{ ...computedStyle, zIndex: baseZ }"
        ref="windowRef"
        @mousedown="handleMouseDown"
    >
        <!-- Header -->
        <div class="window-header">

            <span class="window-title">📝 Notepad</span>

            <div class="window-controls">
                <MinusIcon class="w-5 h-5 cursor-pointer" @click="$emit('minimize')" />
                <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" @click="toggleMaximize" />
                <XMarkIcon class="w-5 h-5 cursor-pointer" @click="$emit('close')" />
            </div>
        </div>

        <!-- Menu Bar -->
        <div class="flex gap-4 px-4 py-1 bg-pink-200 border-b border-pink-400 text-sm font-bold text-pink-900 select-none">
            <div @click="showDropdown('file')" class="relative cursor-pointer hover:text-pink-600">
                File
                <div v-if="dropdown === 'file'" class="absolute bg-white shadow rounded mt-1 p-2 z-10 w-28 border border-pink-300">
                    <p @click.stop="alertMessage('Starting fresh! ✨ Time to slay again, bestie!')" class="hover:bg-pink-100 px-2 py-1 rounded">New</p>
                    <p @click.stop="alertMessage('Oops! Your glitter file is missing 💫')" class="hover:bg-pink-100 px-2 py-1 rounded">Open</p>
                    <p @click.stop="alertMessage('Saving to dream cloud... ☁️🌸')" class="hover:bg-pink-100 px-2 py-1 rounded">Save</p>
                    <p @click.stop="alertMessage('Sorry bestie, no printer attached 💅')" class="hover:bg-pink-100 px-2 py-1 rounded">Print</p>
                </div>
            </div>
            <div @click="showDropdown('edit')" class="relative cursor-pointer hover:text-pink-600">
                Edit
                <div v-if="dropdown === 'edit'" class="absolute bg-white shadow rounded mt-1 p-2 z-10 w-28 border border-pink-300">
                    <p @click.stop="alertMessage('Can’t undo fabulousness 💖')" class="hover:bg-pink-100 px-2 py-1 rounded">Undo</p>
                    <p @click.stop="alertMessage('Cut like a fashion icon ✂️✨')" class="hover:bg-pink-100 px-2 py-1 rounded">Cut</p>
                    <p @click.stop="alertMessage('Copied to glitter memory 💾🌟')" class="hover:bg-pink-100 px-2 py-1 rounded">Copy</p>
                    <p @click.stop="alertMessage('Pasted with love 💌💗')" class="hover:bg-pink-100 px-2 py-1 rounded">Paste</p>
                </div>
            </div>
            <div @click="showDropdown('help')" class="relative cursor-pointer hover:text-pink-600">
                Help
                <div v-if="dropdown === 'help'" class="absolute bg-white shadow rounded mt-1 p-2 z-10 w-40 border border-pink-300">
                    <p @click.stop="alertMessage('Help is on the way... just ask Ken! 😎')" class="hover:bg-pink-100 px-2 py-1 rounded">Barbie Help</p>
                    <p @click.stop="alertMessage('This Notepad is brought to you by Barbie & Friends 💖')" class="hover:bg-pink-100 px-2 py-1 rounded">About Notepad</p>
                </div>
            </div>
        </div>

        <!-- Notepad Content -->
        <div class="flex-1">
            <textarea
                v-model="text"
                class="w-full h-full resize-none p-2 text-pink-900 font-mono text-sm focus:outline-none"
                placeholder="Start typing your sparkly notes here 💖..."
            ></textarea>
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

const text = ref('')

const windowRef = ref(null)
const isMaximized = ref(false)

const position = reactive({ x: 140, y: 140 })
const size = reactive({ width: 500, height: 300 })

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

onBeforeUnmount(() => {
    stopDrag()
})

const dropdown = ref(null)

const showDropdown = (menu) => {
    dropdown.value = dropdown.value === menu ? null : menu
}

const alertMessage = (msg) => {
    alert(msg)
}

document.addEventListener('click', (e) => {
    if (!windowRef.value?.contains(e.target)) {
        dropdown.value = null
    }
})
</script>