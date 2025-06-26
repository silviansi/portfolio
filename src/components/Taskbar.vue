<template>
  <div
    class="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-r from-pink-300 via-pink-100 to-purple-200 border-t border-pink-500 flex items-center justify-between px-3 z-50 font-['VT323'] text-[15px] shadow-inner"
  >
    <!-- START BUTTON -->
    <button
      @click.stop="toggleStartMenu"
      class="flex items-center gap-2 px-3 py-1 font-bold bg-[#fce4ec] border border-[#c7a5b6] shadow-[inset_-2px_-2px_0_#ffffff,inset_2px_2px_0_#a8728d] active:shadow-none active:translate-y-[1px]"
    >
      <img src="/images/icon-windows.png" alt="Start Icon" class="w-4 h-4" />
      Start
    </button>

    <!-- TASKBAR ITEMS -->
    <div class="flex gap-2 ml-3">
      <button
        v-for="win in windows"
        :key="win.name"
        @click="toggleWindow(win.name)"
        class="flex items-center gap-2 px-2 py-1 bg-[#fce4ec] border border-[#c7a5b6] shadow-[inset_-2px_-2px_0_#ffffff,inset_2px_2px_0_#a8728d] hover:brightness-110 transition"
      >
        <img :src="win.icon" alt="" class="w-4 h-4" />
        <span>{{ win.label }}</span>
      </button>
    </div>

    <!-- SYSTEM TRAY -->
    <div class="flex items-center gap-2 ml-auto">
      <div
        class="flex items-center gap-2 bg-[#fce4ec] border border-[#c7a5b6] shadow-[inset_-2px_-2px_0_#ffffff,inset_2px_2px_0_#a8728d] px-3 py-1 font-bold"
      >
        <img src="/images/icon-calendar.png" class="w-4 h-4" title="Calendar" />
        <img src="/images/icon-sound.png" class="w-4 h-4" title="Volume" />
        <div class="ml-2 text-black">{{ time }}</div>
      </div>
    </div>

    <!-- START MENU -->
    <div
      v-if="isStartOpen"
      ref="dropdownRef"
      class="absolute bottom-10 left-4 w-52 bg-[#fce4ec] border border-[#c7a5b6] shadow-[inset_-2px_-2px_0_#ffffff,inset_2px_2px_0_#a8728d] z-50"
    >
      <ul class="divide-y divide-[#e8c7d6]">
        <li
          v-for="item in menuItems"
          :key="item.name"
          @click="startApp(item.name)"
          class="px-3 py-[6px] hover:bg-[#f8d7e5] cursor-pointer flex items-center gap-2 transition"
        >
          <i :class="item.icon" class="w-4 text-pink-500"></i>
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  windows: Array, // array of open windows
})

const emit = defineEmits(['startApp', 'toggleWindow'])

const isStartOpen = ref(false)
const time = ref('')
const dropdownRef = ref(null)

const toggleStartMenu = () => {
  isStartOpen.value = !isStartOpen.value
}

const updateTime = () => {
  const now = new Date()
  let hours = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12
  time.value = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isStartOpen.value = false
  }
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})

const menuItems = [
  { name: 'about', label: 'About Me', icon: 'fa fa-user' },
  { name: 'path', label: 'Path', icon: 'fa fa-briefcase' },
  { name: 'project', label: 'Project', icon: 'fa fa-folder' },
  { name: 'certificate', label: 'Certificate', icon: 'fa fa-certificate' },
  { name: 'contact', label: 'Contact', icon: 'fa fa-envelope' },
]

const startApp = (name) => {
  emit('startApp', name)
  isStartOpen.value = false
}

const toggleWindow = (name) => {
  emit('toggleWindow', name)
}
</script>
