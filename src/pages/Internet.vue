<template>
  <div
    class="window-container flex flex-col"
    :style="{ ...computedStyle, zIndex: baseZ }"
    ref="windowRef"
    @mousedown="handleMouseDown"
  >
    <!-- Fake Browser Header -->
    <div class="window-header">

      <span class="window-title">🌐 Internet Explorer 2000</span>

      <div class="window-controls">
        <MinusIcon class="w-5 h-5 cursor-pointer" title="Minimize" @click="$emit('minimize')" />
        <ArrowsPointingOutIcon class="w-5 h-5 cursor-pointer" title="Maximize" @click="toggleMaximize" />
        <XMarkIcon class="w-5 h-5 cursor-pointer" title="Close" @click="$emit('close')" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-gradient-to-br from-pink-50 to-pink-200 overflow-y-auto p-4 space-y-4">
      <!-- Fake Berbie Search -->
      <div class="bg-white p-4 rounded shadow text-sm flex items-center gap-2">
        <img src="/images/icon-internet.png" alt="search" class="w-6 h-6" />
        <span class="font-bold text-lg text-pink-600">Berbie Search</span>
        <input
          type="text"
          placeholder="Search for sparkle..."
          v-model="searchQuery"
          class="flex-1 px-2 py-1 border border-pink-300 rounded text-pink-800 bg-pink-50 focus:outline-none"
        />
        <button
          @click="handleSearch"
          class="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition"
        >
          Search
        </button>
      </div>

      <!-- Barbie Blog -->
      <div class="bg-white p-4 rounded shadow text-sm">
        <h2 class="text-lg font-bold text-pink-500">💅 Barbie's Daily Sparkle</h2>
        <p>
          Hey bestie! 💖 Today I decorated my dream closet with glittery heels and sparkly sunglasses.
          Remember: life’s too short to wear boring outfits ✨
        </p>
      </div>

      <!-- Barbie Moodboard -->
      <div class="bg-white p-4 rounded shadow text-sm">
        <h2 class="text-lg font-bold text-pink-500">🎀 Moodboard of the Day</h2>
        <div class="grid grid-cols-3 gap-2">
          <img src="/images/barbie-1.jpg" alt="barbie1" class="rounded object-cover h-24 w-full" />
          <img src="/images/barbie-2.jpg" alt="barbie2" class="rounded object-cover h-24 w-full" />
          <img src="/images/barbie-3.jpg" alt="barbie3" class="rounded object-cover h-24 w-full" />
        </div>
        <p class="mt-2 text-pink-700 italic">Think pink. Dream big. Sparkle always.</p>
      </div>

      <!-- Barbie Tip -->
      <div class="bg-white p-4 rounded shadow text-sm">
        <h2 class="text-lg font-bold text-pink-500">💄 Glam Tip</h2>
        <p>
          Barbie tip: A touch of pink lip gloss and a kind smile is the ultimate accessory 💋
        </p>
      </div>

      <!-- Barbie Ad -->
      <div class="bg-white p-3 rounded shadow text-xs text-center italic text-pink-700">
        ✨ Limited Edition Glitter Scooter available now! Tap here to shop the sparkle 🛴💗
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-pink-300 px-4 py-2 text-sm text-center">
      <p>© 2000 Barbie Inc. All rights reserved.</p>
      <p class="text-xs">This is a fake browser window for fun!</p>
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

const position = reactive({ x: 120, y: 120 })
const size = reactive({ width: 600, height: 400 })

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

const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim() === '') {
    alert('🌸 Oopsie! Try searching for sparkles or unicorns!')
  } else {
    alert(`✨ Sorry bestie, Berbie only searches for glitter, dreams & cuteness overload!\nYou searched: "${searchQuery.value}" 💅`)
  }
}
</script>