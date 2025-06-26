<template>
  <section
    id="home"
    class="relative min-h-screen overflow-hidden"
  >

    <!-- Music -->
    <div class="absolute w-64 h-auto bottom-15 left-15">
      <Music />
    </div>

    <!-- Calendar -->
    <div class="absolute w-64 h-auto top-10 right-10">
      <Calendar />
    </div>

    <!-- Folder Icon -->
    <div class="absolute w-[26rem] h-auto bottom-15 left-115">
      <div class="bg-pink-100/60 rounded-xl p-4 shadow-md text-pink-900 font-[VT323]">
        <div class="grid grid-cols-4 grid-rows-2 gap-4">
          <button
            v-for="folder in folders"
            :key="folder.name"
            @click="() => openWindow(folder.name)"
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

    <!-- Folder Icons -->
    <!-- <div class="absolute top-14 left-6 grid grid-flow-col grid-rows-5 gap-x-8 gap-y-6 z-10 font-[VT323]">
      <button v-for="folder in folders" :key="folder.name" @click="() => openWindow(folder.name)" class="flex flex-col items-center">
        <img :src="folder.icon" :alt="folder.label" class="w-12 hover:scale-110 transition" />
        <span class="block text-center text-white">{{ folder.label }}</span>
      </button>
    </div> -->

  </section>
</template>

<script setup>
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
</script>