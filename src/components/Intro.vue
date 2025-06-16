<template>
  <section
    id="home"
    class="relative min-h-screen px-6 pt-20 pb-10 bg-pink-50 text-black font-['Press_Start_2P'] overflow-hidden"
  >

    <!-- Folder Icons -->
    <div class="absolute top-16 left-2 flex flex-col gap-6 z-40">
      <!-- Mail Icon -->
      <button @click="showMail = !showMail">
        <img src="/images/folder-mail.png" alt="mail" class="w-16 sidebar-icon" />
      </button>

      <!-- Trash Icon -->
      <button @click="showTrash = !showTrash">
        <img src="/images/folder-trash.png" alt="trash" class="w-16 sidebar-icon" />
      </button>

      <!-- Files Icon -->
      <button @click="showFiles = !showFiles">
        <img src="/images/folder-files.png" alt="files" class="w-16 sidebar-icon" />
      </button>

      <!-- Folder Save -->
      <button @click="showSave = !showSave">
        <img src="/images/folder-save.png" alt="save" class="w-16 sidebar-icon" />
      </button>

      <!-- Folder Internet -->
      <button @click="showInternet = !showInternet">
        <img src="/images/folder-internet.png" alt="internet" class="w-16 sidebar-icon" />
      </button>
    </div>

    <!-- Folder Window -->
    <!-- Mail Window -->
    <div 
      v-if="showMail"
      class="absolute top-20 left-20 w-[300px] bg-white border-2 border-pink-400 rounded-sm shadow-lg z-30"
    >
      <div class="flex justify-between items-center bg-pink-300 px-2 py-1 text-[10px] font-mono">
        <span class="text-pink-500">mail.exe</span>
        <XMarkIcon @click="showMail = false" class="w-5 h-5 text-pink-500"></XMarkIcon>
      </div>
      <div class="p-3 text-[10px] text-black font-mono">
        <p>You've got mail! 💌</p>
        <p>Sorry. no messsages yet...</p>
      </div>
    </div>

    <!-- Trash Window -->
    <div
      v-if="showTrash"
      class="absolute top-72 left-40 w-[250px] bg-white border-2 border-gray-500 rounded-sm shadow-lg z-50"
    >
      <div class="flex justify-between items-center bg-gray-300 px-2 py-1 text-[10px] font-mono">
        <span class="text-gray-500">trash.exe</span>
        <XMarkIcon @click="showTrash = false" class="w-5 h-5 text-gray-500"></XMarkIcon>
      </div>
      <div class="p-3 text-[10px] text-black font-mono">
        <p>❗ Are you sure you want to delete this... personality?</p>
        <p class="text-red-500 mt-2 font-bold">Access Denied.</p>
      </div>
    </div>

    <!-- Files Window -->
    <div
      v-if="showFiles"
      class="absolute bottom-35 left-94 w-[280px] bg-white border-2 border-yellow-200 rounded-sm shadow-lg z-50"
    >
      <div class="flex justify-between items-center bg-yellow-100 px-2 py-1 text-[10px] font-mono">
        <span class="text-yellow-500">files.exe</span>
        <XMarkIcon @click="showFiles = false" class="w-5 h-5 text-yellow-500"></XMarkIcon>
      </div>
      <div class="p-3 text-[10px] text-black font-mono grid grid-cols-2 gap-2">
        <button
          class="bg-pink-200 border border-black px-2 py-1 hover:bg-pink-300 transition"
          @click="alert('Opening folder: Designs')"
        >
          🎨 Designs
        </button>
        <button
          class="bg-blue-200 border border-black px-2 py-1 hover:bg-blue-300 transition"
          @click="alert('Opening folder: Ideas')"
        >
          💡 Ideas
        </button>
        <button
          class="bg-green-200 border border-black px-2 py-1 hover:bg-green-300 transition"
          @click="alert('Opening folder: Inspirations')"
        >
          📁 Inspirations
        </button>
        <button
          class="bg-purple-200 border border-black px-2 py-1 hover:bg-purple-300 transition"
          @click="alert('Opening folder: Memes')"
        >
          🖼️ Memes
        </button>
      </div>
    </div>

    <!-- Save Window -->
    <div
      v-if="showSave"
      class="absolute bottom-20 left-25 w-[260px] bg-white border-2 border-green-300 rounded-sm shadow-lg z-50"
    >
      <div class="flex justify-between items-center bg-green-200 px-2 py-1 text-[10px] font-mono">
        <span class="text-green-500">save.exe</span>
        <XMarkIcon @click="showSave = false" class="w-5 h-5 text-green-400"></XMarkIcon>
      </div>
      <div class="p-3 text-[10px] text-black font-mono">
        <p>💾 File saved successfully!</p>
        <p>Saved to: <code>Silvia\Brain\Ideas</code></p>
      </div>
    </div>

    <!-- Internet Window -->
    <div
      v-if="showInternet"
      class="absolute top-[150px] left-80 w-[260px] bg-white border-2 border-red-300 rounded-sm shadow-lg z-50"
    >
      <div class="flex justify-between items-center bg-red-200 px-2 py-1 text-[10px] font-mono">
        <span class="text-red-500">internet.exe</span>
        <XMarkIcon @click="showInternet = false" class="w-5 h-5 text-red-500"></XMarkIcon>
      </div>
      <div class="p-3 text-[10px] text-black font-mono">
        <p>🌐 Connecting to www.cute-server.net...</p>
        <p class="text-red-500 mt-2">Connection failed: Error 404 - vibes not found</p>
      </div>
    </div>

    <!-- Main Content Layout -->
    <div class="relative z-10 flex flex-col md:flex-row items-start justify-between gap-10 min-h-full">
      <!-- Left: Text Content -->
      <div class="flex-1 text-center mx-auto space-y-4 mt-10">
        <h1 class="text-xl sm:text-xl md:text-2xl text-indigo-400 text-shadow-lg drop-shadow-md animate-fade-in">
          Hi! I'm
        </h1>

        <!-- Name Section -->
        <div class="flex items-center justify-center gap-4 mt-2 mb-4">
          <img src="/images/love-pink-blue.gif" alt="Love Left" class="w-6 sm:w-8 md:w-10 animate-love-beat" />
          <h2 class="text-4xl sm:text-5xl md:text-6xl text-pink-300 text-shadow-lg drop-shadow-lg">Silvia</h2>
          <img src="/images/love-pink-blue.gif" alt="Love Right" class="w-6 sm:w-8 md:w-10 animate-love-beat" />
        </div>

        <!-- Quote -->
        <p class="text-xs text-gray-700 dark:text-gray-300 font-mono italic">
          "Designing interfaces is like crafting a story: thoughtful, full of feeling."
        </p>

        <!-- Terminal Style Card -->
        <div class="relative mx-auto w-[280px] bg-blue-100 text-blue-500 border-2 border-blue-300 rounded-lg shadow-[4px_4px_0_#93c5fd] font-['VT323'] text-sm">
          <img
            src="/images/cinnamoroll-sanrio.gif"
            alt="Silvia GIF"
            class="absolute top-12 -left-16 w-30 h-30 animate-fade-in hidden sm:block"
          />

          <div class="flex justify-between items-center bg-blue-200 px-2 py-1 rounded-t-lg border-b-2 border-blue-300">
            <span class="text-xs text-blue-700">🖥️ terminal.exe</span>
            <XMarkIcon class="w-5 h-5 bg-blue-300 text-white border border-white" />
          </div>
          <div class="p-2 space-y-1 leading-relaxed">
            <div>
              <span class="text-blue-400">> </span>
              <span>{{ currentText }}</span>
              <span class="blink-cursor">|</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Visual Window -->
      <div class="relative flex-1 w-full md:w-auto h-full flex items-center justify-center">
        <!-- Decorative Shapes -->
        <div class="absolute top-0 left-10 w-10 h-10 bg-blue-300 rounded-full blur-sm animate-bounce-slow z-0"></div>
        <div class="absolute bottom-8 right-0 w-12 h-12 bg-yellow-300 rotate-12 rounded-lg blur-md opacity-80 animate-spin-slow z-0"></div>
        <div class="absolute -top-4 right-1/4 w-8 h-8 border-2 border-pink-400 rounded-full animate-ping z-0"></div>

        <!-- Main Window Card -->
        <div class="relative z-10 w-[16rem] sm:w-[18rem] md:w-[26rem] bg-white border-2 border-black rounded-lg shadow-[8px_8px_0_#000]">
          <div class="flex justify-between items-center bg-purple-200 px-3 py-1 rounded-t-lg border-b-2 border-black">
            <span class="text-lg font-bold font-['VT323']">💾 home.exe</span>
            <div class="flex gap-1 text-xs">
              <MinusIcon class="w-5 h-5 bg-cyan-200 text-white border" />
              <HeartIcon class="w-5 h-5 bg-yellow-200 text-white border border-white" />
              <XMarkIcon class="w-5 h-5 bg-red-300 text-white border border-white" />
            </div>
          </div>
          <div class="p-1">
            <div
              class="glitch w-full h-48 sm:h-60 md:h-72 border border-black"
              style="background-image: url('/images/home-image.png'); background-size: cover; background-position: center;">
            </div>
          </div>
        </div>

        <!-- Small Loading Window -->
        <div class="absolute -bottom-12 right-2 w-36 bg-white border-2 border-violet-300 rounded-lg shadow-[4px_4px_0_#d8b4fe] z-20 animate-fade-in">
          <div class="flex justify-between items-center bg-pink-200 px-2 py-1 rounded-t-lg border-b-2 border-violet-300">
            <span class="text-sm font-['VT323']">⏳ loading.exe</span>
            <XMarkIcon class="w-5 h-5 bg-red-300 text-black border grid place-items-center"></XMarkIcon>
          </div>
          <div class="p-3 flex flex-col items-center gap-2">
            <div class="w-8 h-8 border-4 border-dashed border-pink-400 border-t-transparent rounded-full animate-spin-slow-2"></div>
            <p class="text-[10px] font-bold font-['VT323'] text-center">Initializing...<br />Please wait</p>
          </div>
        </div>

        <!-- Y2K Shape Sticker -->
        <img src="/images/error-windows-xp-unscreen.gif" alt="Error Windows" class="absolute -bottom-10 left-18 transform -translate-x-1/2 w-40 h-40 z-10" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { MinusIcon, HeartIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const showMail = ref(false)
const showTrash = ref(false)
const showFiles = ref(false)
const showSave = ref(false)
const showInternet = ref(false)

// Typing Effect
const typingTexts = [
  'Full Stack Web Developer',
  'Tech Enthusiast',
]

const currentText = ref('')
let currentIndex = 0
let charIndex = 0

function type() {
  if (charIndex < typingTexts[currentIndex].length) {
    currentText.value += typingTexts[currentIndex][charIndex]
    charIndex++
    setTimeout(type, 80)
  } else {
    setTimeout(erase, 1500)
  }
}

function erase() {
  if (charIndex > 0) {
    currentText.value = currentText.value.slice(0, -1)
    charIndex--
    setTimeout(erase, 40)
  } else {
    currentIndex = (currentIndex + 1) % typingTexts.length
    setTimeout(type, 500)
  }
}

onMounted(() => {
  type()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

@keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes spin-slow-2 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

.animate-fade-in { animation: fade-in 1s ease-out forwards; }
.animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
.animate-spin-slow { animation: spin-slow 8s linear infinite; }
.animate-spin-slow-2 { animation: spin-slow-2 1s linear infinite; }
.animate-love-beat { animation: love-beat 1s ease-in-out infinite; }

.sidebar-icon {
  transition: transform 0.2s ease-in-out;
}

.sidebar-icon:hover {
  transform: scale(1.1) rotate(-6deg);
}

.blink-cursor::after {
  content: '_';
  animation: blink 1s infinite;
}

/* Glitch Effect */
.glitch {
  position: relative;
}
.glitch::before,
.glitch::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: inherit;
  mix-blend-mode: screen;
  animation: glitchAnim 2s infinite;
}
.glitch::before { left: 2px; text-shadow: -2px 0 magenta; }
.glitch::after { left: -2px; text-shadow: 2px 0 cyan; }

@keyframes glitchAnim {
  0%, 100% { clip-path: inset(0 0 100% 0); }
  10% { clip-path: inset(10% 0 85% 0); }
  20% { clip-path: inset(80% 0 0 0); }
  30% { clip-path: inset(40% 0 40% 0); }
  40% { clip-path: inset(60% 0 20% 0); }
  50% { clip-path: inset(30% 0 60% 0); }
  60% { clip-path: inset(10% 0 80% 0); }
  70% { clip-path: inset(20% 0 60% 0); }
}

/* Scrollbar Y2K Style */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #ffe4fa;
}
::-webkit-scrollbar-thumb {
  background-color: #ff80bf;
  border: 2px solid black;
  border-radius: 0;
}
</style>