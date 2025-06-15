<template>
  <section
    id="home"
    class="relative min-h-screen px-6 sm:px-16 pt-20 pb-10 bg-pink-50 text-black font-['Press_Start_2P'] overflow-hidden"
  >
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-purple-100 opacity-40 pointer-events-none z-0" />

    <!-- Running Text -->
    <div class="absolute top-6 left-0 right-0 overflow-hidden bg-yellow-100 border-b border-yellow-300 z-30 py-1">
      <div class="whitespace-nowrap animate-marquee text-sm font-['VT323'] text-pink-600">
        💿 Welcome to the Silviaverse // Explore. Design. Repeat. 💿
      </div>
    </div>

    <!-- Folder Icons -->
    <div class="absolute left-2 top-16 flex flex-col gap-6 z-20">
      <img v-for="(icon, i) in folderIcons" :key="i" :src="icon.src" :alt="icon.alt" class="w-8 sm:w-16" />
    </div>

    <!-- Main Content Layout -->
    <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
      <!-- Left: Text Content -->
      <div class="flex-1 text-center mx-auto space-y-4 mt-10">
        <h1 class="text-xl sm:text-xl md:text-2xl text-violet-300 drop-shadow-md animate-fade-in">
          Hi! I'm
        </h1>

        <!-- Name Section -->
        <div class="flex items-center justify-center gap-4 mt-2 mb-4">
          <img src="/images/love-pink.png" alt="Love Left" class="w-6 sm:w-8 md:w-10 animate-love-beat" />
          <h2 class="text-4xl sm:text-5xl md:text-6xl text-pink-300 drop-shadow-lg">Silvia</h2>
          <img src="/images/love-pink.png" alt="Love Right" class="w-6 sm:w-8 md:w-10 animate-love-beat" />
        </div>

        <!-- Quote -->
        <p class="text-xs sm:text-base text-gray-700 dark:text-gray-300 font-mono italic">
          "Designing interfaces is like crafting a story: thoughtful, full of feeling."
        </p>

        <!-- Terminal Style Card -->
        <div class="mx-auto w-[280px] bg-blue-100 text-blue-500 border-2 border-blue-300 rounded-lg shadow-[4px_4px_0_#93c5fd] font-['VT323'] text-sm">
          <div class="flex justify-between items-center bg-blue-200 px-2 py-1 rounded-t-lg border-b-2 border-blue-300">
            <span class="text-xs text-blue-700">🖥️ terminal.exe</span>
            <XMarkIcon class="w-5 h-5 bg-blue-300 text-white border border-white" />
          </div>
          <div class="p-2 space-y-1 leading-relaxed">
            <div><span class="text-blue-400">></span> Full Stack Web Developer</div>
            <div><span class="text-indigo-400">></span> Tech Enthusiast</div>
            <div class="blink-cursor"><span class="text-teal-400">></span> <span class="inline-block w-2" /></div>
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
              style="background-image: url('/images/home-image.png'); background-size: cover; background-position: center;"
            />
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
        <img src="/images/not-found.png" alt="Not Found" class="absolute -bottom-12 left-16 transform -translate-x-1/2 w-40 h-40 z-10" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { MinusIcon, HeartIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const folderIcons = [
  { src: '/images/folder-mail.png', alt: 'mail' },
  { src: '/images/folder-trash.png', alt: 'trash' },
  { src: '/images/folder-files.png', alt: 'files' },
  { src: '/images/folder-save.png', alt: 'save' },
  { src: '/images/folder-internet.png', alt: 'internet' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

@keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes spin-slow-2 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes love-beat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }

.animate-marquee {
  animation: marquee 18s linear infinite;
}

.animate-fade-in { animation: fade-in 1s ease-out forwards; }
.animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
.animate-spin-slow { animation: spin-slow 8s linear infinite; }
.animate-spin-slow-2 { animation: spin-slow-2 1s linear infinite; }
.animate-love-beat { animation: love-beat 1s ease-in-out infinite; }

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