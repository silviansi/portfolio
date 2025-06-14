<template>
  <section
    id="home"
    class="relative overflow-hidden min-h-screen px-6 sm:px-16 pt-20 pb-10 text-black font-['Press_Start_2P']"
  >
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-purple-100 opacity-40 pointer-events-none z-0"></div>

    <!-- Folder Icon -->
    <div class="absolute left-2 top-16 flex flex-col gap-6 z-20">
      <img src="/images/folder-mail.png" alt="mail" class="w-8 sm:w-16" />
      <img src="/images/folder-trash.png" alt="trash" class="w-8 sm:w-16" />
      <img src="/images/folder-files.png" alt="files" class="w-8 sm:w-16" />
      <img src="/images/folder-save.png" alt="save" class="w-8 sm:w-16" />
      <img src="/images/folder-internet.png" alt="internet" class="w-8 sm:w-16" />
    </div>
    
    <!-- Layout Grid -->
    <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
      <!-- KIRI: Konten utama -->
      <div class="flex-1 text-center relative ml-5 space-y-4">
        <h1 class="text-xl text-violet-300 sm:text-xl md:text-2xl leading-snug drop-shadow-md animate-fade-in">
          Hi! I'm
        </h1>

        <!-- Gambar Nama -->
        <div class="flex items-center justify-center gap-4 mt-2 mb-4">
          <!-- Love kiri -->
          <img src="/images/love-pink.png" alt="Love Left" class="w-6 sm:w-8 md:w-10 animate-love-beat" />

          <!-- Nama -->
          <h2 class="text-6xl text-pink-300 drop-shadow-lg">Silvia</h2>

          <!-- Love kanan -->
          <img src="/images/love-pink.png" alt="Love Right" class="w-6 sm:w-8 md:w-10 animate-love-beat" />
        </div>

        <!-- Quote -->
        <p class="text-sm sm:text-base md:text-xs mt-8 text-gray-700 dark:text-gray-300 font-mono italic">
          "Designing interfaces is like crafting a story: thoughtful, full of feeling."</p>

        <!-- Bubble Role Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mt-12">
          <span class="retro-tag">💻 Frontend</span>
          <span class="retro-tag">⚙️ Tech Entushiast</span>
          <span class="retro-tag">🌐 Web Dev</span>
          <span class="retro-tag">🎨 UI/UX</span>
        </div>

      </div>

      <!-- KANAN: Dreamy Shape & Window -->
      <div class="relative flex-1 w-full md:w-auto h-full flex items-center justify-center">
        <!-- Shapes -->
        <div class="absolute top-0 left-10 w-10 h-10 bg-blue-300 rounded-full blur-sm animate-bounce-slow z-0"></div>
        <div class="absolute bottom-8 right-0 w-12 h-12 bg-yellow-300 rotate-12 rounded-lg blur-md opacity-80 animate-spin-slow z-0"></div>
        <div class="absolute -top-4 right-1/4 w-8 h-8 border-2 border-pink-400 rounded-full animate-ping z-0"></div>

        <!-- Window Card -->
        <div class="relative z-10 w-[16rem] sm:w-[18rem] md:w-[26rem] bg-white border-[2px] border-black rounded-lg shadow-[8px_8px_0_#000]">
          <!-- Window Header -->
          <div class="flex items-center justify-between bg-purple-200 px-3 py-1 rounded-t-lg border-b-[2px] border-black">
            <div class="text-lg font-bold font-['VT323']">💾 home.exe</div>
            <div class="flex gap-1 text-xs">
              <MinusIcon class="w-5 h-5 bg-white text-black border grid place-items-center"></MinusIcon>
              <HeartIcon class="w-5 h-5 bg-white text-black border grid place-items-center"></HeartIcon>
              <XMarkIcon class="w-5 h-5 bg-white text-black border grid place-items-center"></XMarkIcon>
            </div>
          </div>

          <!-- Window Body with dummy image -->
          <div class="p-1">
            <div
              class="glitch w-full h-50 sm:h-62 md:h-72 border border-black"
              style="background-image: url('/images/home-image.png'); background-size: cover; background-position: center;"
            ></div>
          </div>
        </div>

        <!-- Small Window Card: Loading Spinner -->
        <div class="absolute -bottom-12 right-2 w-36 bg-white border-[2px] border-violet-300 rounded-lg shadow-[4px_4px_0_#d8b4fe] z-20 animate-fade-in">
          <!-- Header -->
          <div class="flex items-center justify-between bg-pink-200 px-2 py-1 rounded-t-lg border-b-[2px] border-violet-300">
            <div class="text-sm font-['VT323']">⏳ loading.exe</div>
            <div class="flex text-xs">
              <button class="w-5 h-5 bg-red-500 text-black border grid place-items-center">✕</button>
            </div>
          </div>

          <!-- Body -->
          <div class="p-3 flex flex-col items-center justify-center gap-2">
            <div class="w-8 h-8 border-4 border-dashed border-pink-400 border-t-transparent rounded-full animate-spin-slow-2"></div>
            <p class="text-[10px] font-bold font-['VT323'] text-center">Initializing...<br />Please wait</p>
          </div>
        </div>

        <!-- Shape Y2K -->
        <img src="/images/not-found.png" alt="Not Found" class="absolute -bottom-12 left-16 transform -translate-x-1/2 w-40 h-40 z-10" />

      </div>
    </div>
  </section>
</template>

<script setup>
import {
  MinusIcon,
  HeartIcon,
  XMarkIcon
} from '@heroicons/vue/24/solid'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
.animate-bounce-slow {
  animation: bounce-slow 3s infinite ease-in-out;
}
.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* Custom scrollbar ala Y2K */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #ffe4fa;
}
::-webkit-scrollbar-thumb {
  background-color: #ff80bf;
  border-radius: 0;
  border: 2px solid black;
}

/* Glitch effect for image */
.glitch {
  position: relative;
  display: inline-block;
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
  pointer-events: none;
  animation: glitchAnim 2s infinite;
}
.glitch::before {
  left: 2px;
  text-shadow: -2px 0 magenta;
}
.glitch::after {
  left: -2px;
  text-shadow: 2px 0 cyan;
}

@keyframes glitchAnim {
  0% { clip-path: inset(0 0 100% 0); }
  10% { clip-path: inset(10% 0 85% 0); }
  20% { clip-path: inset(80% 0 0 0); }
  30% { clip-path: inset(40% 0 40% 0); }
  40% { clip-path: inset(60% 0 20% 0); }
  50% { clip-path: inset(30% 0 60% 0); }
  60% { clip-path: inset(10% 0 80% 0); }
  70% { clip-path: inset(20% 0 60% 0); }
  80% { clip-path: inset(0 0 100% 0); }
  100% { clip-path: inset(0 0 100% 0); }
}

@keyframes spin-slow-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin-slow-2 {
  animation: spin-slow-2 1s linear infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes slow-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

.animate-slow-pulse {
  animation: slow-pulse 4s ease-in-out infinite;
}

@keyframes love-beat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-love-beat {
  animation: love-beat 1s ease-in-out infinite;
}

.retro-tag {
  background: #fefefe;
  border: 2px solid #fecdd3;
  padding: 2px 10px;
  font-family: 'VT323', monospace;
  font-size: 14px;
  box-shadow: 2px 2px 0px #aaa;
  transition: all 0.2s ease;
  cursor: default;
}

.retro-tag:hover {
  background: #ffdeff;
  box-shadow: 2px 2px 0px #000;
  transform: translateY(-2px);
}
</style>
