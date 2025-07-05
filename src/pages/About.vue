<template>
    <div 
        class="window-container" 
        :style="{ ...computedStyle, zIndex: baseZ }"
        ref="windowRef"
        @mousedown="($e) => { startDrag($e); updateZ() }"
    >

        <!-- Header -->
        <div class="window-header">
            <div class="window-controls">
                <div class="window-dot bg-red-400"></div>
                <div class="window-dot bg-yellow-300"></div>
                <div class="window-dot bg-green-400"></div>
            </div>

            <span class="window-title">💻 About Me</span>

            <div class="window-controls">
                <MinusIcon class="w-5 h-5 cursor-pointer" @click="$emit('minimize')" />
                <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" @click="toggleMaximize" />
                <XMarkIcon class="w-5 h-5 cursor-pointer" @click="$emit('close')" />
            </div>
        </div>

        <!-- Content -->
        <div class="p-6 text-black">
            <div class="max-w-4xl mx-auto border border-pink-500 p-6 bg-[#f8f7f2] bg-grain shadow-md rounded-2xl flex flex-col md:flex-row gap-6 items-start">

                <!-- Left Column: Photo + Contact -->
                <div class="flex flex-col items-center gap-4 w-full md:w-1/3">
                    <!-- Photo -->
                    <div class="w-36 h-36 border-2 border-pink-500 rounded-xl overflow-hidden">
                        <img src="/images/silvia-berwarnaa.jpg" alt="Silvia Nanda" class="w-full h-full object-cover" />
                    </div>

                    <!-- Contact Info -->
                    <div class="text-sm w-full text-center md:text-left space-y-1">
                        <p class="font-bold">CONTACT</p>
                        <p>Email: <a href="mailto:silviansi24@gmail.com" class="underline">silviansi24@gmail.com</a></p>
                        <p>Phone: <a href="tel:+6281358811732" class="underline">+62 813-5881-1732</a></p>
                    </div>
                </div>

                <!-- Right Column: ID Info + Description -->
                <div class="text-sm w-full md:w-2/3 space-y-3">
                    <!-- Header -->
                    <div class="flex justify-between items-center text-lg font-bold">
                        <span>ID CARD</span>
                        <span class="text-xs font-mono text-right">JOINED 2025</span>
                    </div>

                    <!-- Info Grid -->
                    <div class="grid grid-cols-2 gap-x-2 gap-y-1">
                        <p><span class="font-bold">NAME:</span> Silvia Nanda Syafa Iswahyudi</p>
                        <p><span class="font-bold">PRONOUNS:</span> She/Her</p>
                        <p><span class="font-bold">ROLE:</span> Web Developer</p>
                        <p><span class="font-bold">LOCATION:</span> Sidoarjo, ID</p>
                    </div>

                    <!-- Short Description -->
                    <div class="mt-4 border-t border-pink-300 pt-2">
                        <p class="text-justify">
                        Hello! I’m <strong>Silvia</strong>, a web developer from Sidoarjo who enjoys building fun, nostalgic, and interactive websites. Let’s make something unique together!
                        </p>
                    </div>
                </div>
            </div>
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
const position = reactive({ x: 100, y: 100 })
const size = reactive({ width: 600, height: 200 })

const computedStyle = computed(() => {
    return isMaximized.value
        ? { top: '0', left: '0', width: '100vw', height: '100vh', zIndex: 50 }
        : { top: position.y + 'px', left: position.x + 'px', width: size.width + 'px', zIndex: 50 }
})

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
.bg-grain::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: repeating-radial-gradient(rgba(0,0,0,0.04) 1px, transparent 2px);
    opacity: 0.2;
    pointer-events: none;
    z-index: 0;
}
</style>