<template>
  <nav
    ref="navbar"
    class="fixed w-full h-12 bg-pink-100 border border-black text-black font-['Press_Start_2P'] text-[10px] shadow-md"
  >
    <div class="flex h-8 items-center justify-between px-5 py-1 border-b border-black">
      <!-- Browser buttons -->
      <div class="flex gap-2">
        <div class="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
        <div class="w-3 h-3 bg-yellow-400 rounded-full border border-black"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full border border-black"></div>
      </div>

      <!-- Tab menu -->
      <div class="flex gap-2 mt-2">
        <div
          v-for="item in navItems"
          :key="item.name"
          class="bg-pink-200 border border-b-0 border-black px-2 py-1 rounded-t-md cursor-pointer hover:bg-pink-300 transition"
        >
          <a :href="item.href">{{ item.name.toUpperCase() }}</a>
        </div>
      </div>

      <!-- Search bar -->
      <div class="flex items-center space-x-1 bg-white border border-black px-2 py-[2px]">
        <MagnifyingGlassIcon class="w-3 h-3 text-black" />
        <span>LOOKING FOR ATTENTION !!!</span>
      </div>

      <!-- Minimize/Close -->
      <div class="flex items-center space-x-1">
        <div class="w-5 h-5 border border-black bg-yellow-200 flex items-center justify-center">–</div>
        <div class="w-5 h-5 border border-black bg-red-500 flex items-center justify-center">×</div>
      </div>
    </div>

    <!-- Address Bar -->
    <div class="flex items-center justify-between px-6 py-2 border-b border-black bg-pink-200">
      <div class="flex items-center space-x-2">
        <ArrowPathIcon class="w-4 h-4 text-black" />
        <input
          type="text"
          class="w-[260px] h-5 bg-white border border-black rounded-sm px-2 py-3 text-[10px] font-mono"
          value="https://www.portfolio.com"
          readonly
        />
      </div>
      <!-- Icons replaced -->
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
      </div>
    </div>

    <!-- Mobile Navbar -->
    <div class="sm:hidden fixed top-0 left-0 w-full z-50">
      <!-- Top bar -->
      <div class="flex items-center justify-between bg-pink-100 border border-black h-12 px-4 text-black font-['Press_Start_2P'] text-[10px]">
        <!-- Left: Logo / Title -->
        <div class="flex gap-2">
          <div class="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
          <div class="w-3 h-3 bg-yellow-400 rounded-full border border-black"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full border border-black"></div>
        </div>

        <!-- Right: Hamburger Icon -->
        <button @click="isMenuOpen = !isMenuOpen" class="w-6 h-6 border border-black flex items-center justify-center bg-white">
          <Bars3Icon v-if="!isMenuOpen" class="w-4 h-4 text-black" />
          <XMarkIcon v-else class="w-4 h-4 text-black" />
        </button>
      </div>

      <!-- Dropdown menu -->
      <div v-if="isMenuOpen" class="bg-pink-200 border-x border-b border-black text-[10px]">
        <ul class="flex flex-col text-center divide-y divide-black">
          <li v-for="item in navItems" :key="item.name" class="py-2 hover:bg-pink-300">
            <a :href="item.href">{{ item.name.toUpperCase() }}</a>
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
import { ref } from 'vue'
import {
  MagnifyingGlassIcon,
  ArrowPathIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/solid'

const navbar = ref(null)

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Path', href: '#path' },
  { name: 'Project', href: '#project' },
  { name: 'Contact', href: '#contact' },
]

const isMenuOpen = ref(false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
</style>
