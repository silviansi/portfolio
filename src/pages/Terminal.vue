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
            <span class="window-title">🖥️ Terminal</span>
            <div class="window-controls">
                <MinusIcon class="w-5 h-5 cursor-pointer" @click="$emit('minimize')" />
                <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" @click="toggleMaximize" />
                <XMarkIcon class="w-5 h-5 cursor-pointer" @click="$emit('close')" />
            </div>
        </div>

        <!-- Terminal Body -->
        <div class="flex-1 bg-black text-green-400 font-mono p-4 overflow-y-auto">
            <div v-for="(line, index) in output" :key="index">{{ line }}</div>
            <div class="flex items-center gap-2">
                <span class="text-pink-400">barbie@dreamhouse:~$</span>
                <input
                    v-model="input"
                    @keyup.enter="runCommand"
                    class="bg-transparent outline-none text-green-300 flex-1"
                    autofocus
                />
            </div>
        </div>

        <!-- Footer -->
        <div class="bg-pink-300 px-4 py-2 text-xs text-center text-pink-900">
            ✨ Terminal emulation for glittery commands only
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
const input = ref('')
const output = ref([
    '✨ Welcome to BerbieOS Terminal!',
    'Type `help` to see what you can do 💅',
])

const runCommand = () => {
    const command = input.value.trim()
    if (!command) return

    output.value.push(`barbie@dreamhouse:~$ ${command}`)

    switch (command.toLowerCase()) {
        case 'help':
        output.value.push('Available commands:')
        output.value.push('✨ help — Show this message')
        output.value.push('✨ whoami — Reveal your Barbie identity')
        output.value.push('✨ sparkle — Add some sparkle to your day')
        break
        case 'whoami':
        output.value.push('👑 You are Bestie Barbie, Queen of the Terminal!')
        break
        case 'sparkle':
        output.value.push('💖 You are glowing, bestie! Shine on!')
        break
        default:
        output.value.push(`🚫 Command not found: ${command}`)
    }

    input.value = ''
}

const isMaximized = ref(false)

const position = reactive({ x: 140, y: 140 })
const size = reactive({ width: 620, height: 400 })

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
</script>