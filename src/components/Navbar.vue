<template>
  <nav
    ref="navbar"
    class="fixed z-50 w-full h-10 bg-pink-200 text-black font-['Press_Start_2P'] text-[10px] shadow-md"
  >
    <div class="flex h-8 items-center justify-between px-5 py-1">
      <!-- Browser buttons -->
      <div class="flex gap-2">
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <!-- Tab menu -->
      <div class="flex gap-2">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          @click.prevent="scrollToSection(item)"
          :class="[
            'text-pink-500 px-3 py-1 mt-3 rounded-t-md cursor-pointer flex items-center gap-1 transition-all duration-200',
            item.name === activeTab ? 'bg-pink-100' : 'bg-pink-200'
          ]"
        >
          <component :is="item.icon" class="w-4 h-4 text-pink-500" />
          <span>{{ item.name.toUpperCase() }}</span>
        </a>
      </div>

      <!-- Search bar -->
      <div class="flex items-center space-x-1 bg-white border border-pink-300 px-2 py-[2px]">
        <MagnifyingGlassIcon class="w-3 h-3 text-violet-500" />
        <span class="text-violet-500">LOOKING FOR ATTENTION !!!</span>
      </div>

      <!-- Minimize/Close -->
      <div class="flex items-center space-x-1">
        <MinusIcon class="w-5 h-5 border border-black bg-yellow-100 flex items-center justify-center" />
        <XMarkIcon class="w-5 h-5 border border-black bg-red-300 flex items-center justify-center" />
      </div>
    </div>

    <!-- Address Bar -->
    <div class="flex items-center justify-between px-6 py-2 bg-pink-100">
      <div class="flex items-center space-x-2">
        <ArrowPathIcon class="w-4 h-4 text-pink-500" />
        <input
          type="text"
          class="w-[260px] h-5 bg-white rounded-sm px-2 py-3 text-[10px] font-mono text-pink-500"
          value="https://www.portfolio.com"
          readonly
        />
      </div>

      <!-- Icons sosial media -->
      <div class="flex items-center gap-2">
        <a
          href="https://github.com/silviansi"
          target="_blank"
          class="w-6 h-6 text-black border border-black bg-white p-[2px] flex items-center justify-center"
        >
          <i class="fab fa-github text-[10px]"></i>
        </a>
        <a
          href="https://linkedin.com/in/silviansi"
          target="_blank"
          class="w-6 h-6 text-blue-600 border border-black bg-white p-[2px] flex items-center justify-center"
        >
          <i class="fab fa-linkedin-in text-[10px]"></i>
        </a>

        <!-- Digital Clock -->
        <span class="ml-2 font-mono text-[10px] bg-white px-2 py-1 border border-black">
          {{ timeNow }}
        </span>
      </div>
    </div>

    <!-- Mobile Navbar -->
    <div class="sm:hidden fixed top-0 left-0 w-full z-50">
      <!-- Top bar -->
      <div class="flex items-center justify-between bg-pink-100 h-12 px-4 text-black font-['Press_Start_2P'] text-[10px]">
        <div class="flex gap-2">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <button @click="isMenuOpen = !isMenuOpen" class="w-6 h-6 border border-pink-500 flex items-center justify-center bg-white">
          <Bars3Icon v-if="!isMenuOpen" class="w-4 h-4 text-pink-500" />
          <XMarkIcon v-else class="w-4 h-4 text-red-600" />
        </button>
      </div>

      <!-- Dropdown menu -->
      <div v-if="isMenuOpen" class="bg-pink-200 border-x border-b border-black text-[10px]">
        <ul class="flex flex-col text-center divide-y divide-black">
          <li
            v-for="item in navItems"
            :key="item.name"
            class="py-2 hover:bg-pink-300 text-pink-500"
          >
            <a @click.prevent="scrollToSection(item); isMenuOpen = false" href="#">
              {{ item.name.toUpperCase() }}
            </a>
          </li>
        </ul>
        <div class="flex justify-center gap-4 py-2 border-t border-black">
          <a href="https://github.com/silviansi" target="_blank" class="w-6 h-6 border border-black bg-white flex items-center justify-center">
            <i class="fab fa-github text-[10px]"></i>
          </a>
          <a href="https://linkedin.com/in/silviansi" target="_blank" class="w-6 h-6 border border-black bg-white text-blue-600 flex items-center justify-center">
            <i class="fab fa-linkedin-in text-[10px]"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  MagnifyingGlassIcon,
  ArrowPathIcon,
  MinusIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/solid'
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  FolderIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline'

const navItems = [
  { name: 'Home', href: '#home', icon: HomeIcon },
  { name: 'About', href: '#about', icon: UserIcon },
  { name: 'Path', href: '#path', icon: BriefcaseIcon },
  { name: 'Project', href: '#project', icon: FolderIcon },
  { name: 'Contact', href: '#contact', icon: EnvelopeIcon },
]

const activeTab = ref(navItems[0].name)
const timeNow = ref('')
const isMenuOpen = ref(false)

// Scroll to section smoothly
const scrollToSection = (item) => {
  const target = document.querySelector(item.href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
    activeTab.value = item.name
  }
}

onMounted(() => {
  // Digital clock
  const updateClock = () => {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    timeNow.value = `${hours}:${minutes}:${seconds}`
  }
  updateClock()
  setInterval(updateClock, 1000)

  // Scrollspy with IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id')
        const match = navItems.find(i => i.href === `#${id}`)
        if (match) activeTab.value = match.name
      }
    })
  }, observerOptions)

  navItems.forEach(item => {
    const section = document.querySelector(item.href)
    if (section) observer.observe(section)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
</style>