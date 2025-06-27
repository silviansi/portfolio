<template>
  <section
    id="home"
    class="relative min-h-screen overflow-hidden"
  >

    <!-- Judul -->
    <h1 class="title-shadow">
      Portfolio
    </h1>

    <!-- Clock -->
    <Clock class="absolute w-64 h-1uto top-15 left-15" />

    <!-- Music -->
    <div class="absolute w-64 h-auto bottom-15 left-15">
      <Music />
    </div>

    <!-- Calendar -->
    <Calendar class="absolute w-64 h-auto top-10 right-10" />

    <!-- Folder Icon -->
    <div class="absolute w-[26rem] h-auto bottom-42 left-115">
      <div class="bg-pink-100/60 rounded-xl p-4 shadow-md text-pink-900 font-[VT323]">
        <div class="grid grid-cols-4 grid-rows-2 gap-4">
          <button
            v-for="folder in folders"
            :key="folder.name"
            @click="() => openWindow(folder.name, folder.icon)"
            class="flex flex-col items-center"
          >
            <img
              :src="folder.icon"
              :alt="folder.label"
              class="w-12 hover:scale-110 transition"
            />
            <span class="block text-center text-sm text-pink-900">{{ folder.label }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- App -->
    <div class="absolute w-[26rem] h-auto bottom-15 left-115">
      <div class="bg-pink-100/60 rounded-xl p-4 shadow-md text-pink-900 font-[VT323]">
        <div class="grid grid-cols-3 gap-4">
          <button
            v-for="app in apps"
            :key="app.name"
            @click="() => openWindow(app.name, app.icon)"
            class="flex flex-col items-center"
          >
            <img
              :src="app.icon"
              :alt="app.label"
              class="w-10 hover:scale-110 transition"
            />
            <span class="block text-center text-sm text-pink-900">{{ app.label }}</span>
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import Clock from '@/components/Clock.vue'
import Music from '@/components/Music.vue'
import Calendar from '@/components/Calendar.vue'

const props = defineProps({
  openWindow: Function
})

const folders = [
  { name: 'about', label: 'About Me', icon: '/images/icon-folder-1.png' },
  { name: 'skills', label: 'Skills', icon: '/images/icon-folder-2.png' },
  { name: 'path', label: 'Path', icon: '/images/icon-folder-3.png' },
  { name: 'project', label: 'Project', icon: '/images/icon-folder-4.png' },
  { name: 'certificate', label: 'Certificate', icon: '/images/icon-folder-5.png' },
  { name: 'contact', label: 'Contact', icon: '/images/icon-folder-6.png' },
  { name: 'cv', label: 'CV', icon: '/images/icon-folder-7.png' },
]

const apps = [
  { name: 'internet', label: 'Internet', icon: '/images/icon-internet.png' },
  { name: 'notepad', label: 'Notepad', icon: '/images/icon-notepad.png' },
  { name: 'terminal', label: 'Terminal', icon: '/images/icon-terminal.jpg' },
]
</script>