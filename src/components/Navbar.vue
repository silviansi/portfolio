<template>
  <div
    class="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-[#101010] backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-2xl px-4 py-2 flex items-center gap-1 transition-all duration-500 hover:shadow-3xl hover:scale-105"
  >
    <!-- Navigation Items -->
    <a 
      v-for="(item, index) in navItems" 
      :key="item.icon"
      :href="item.href" 
      @mouseenter="setActiveItem(index)"
      @mouseleave="clearActiveItem"
      class="relative w-9 h-9 flex items-center justify-center group hover:mr-20 transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:shadow-lg hover:scale-100 transform"
      :class="{ 
        'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 shadow-md scale-105': activeItem === index 
      }"
    >
      <!-- Extended hover area to prevent shaking -->
      <div class="absolute inset-0 w-24 h-9 -right-16"></div>
      
      <!-- Floating tooltip -->
      <div
        class="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 text-xs px-3 py-1.5 rounded-lg shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none z-20 transition-all duration-300 transform"
        :class="{ 'opacity-100 translate-x-0': activeItem === index }"
      >
        {{ item.label }}
        <!-- Tooltip arrow -->
        <div class="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-1.5 h-1.5 bg-gray-900 dark:bg-gray-100 rotate-45"></div>
      </div>

      <!-- Icon with glow effect -->
      <component 
        :is="icons[item.icon]" 
        class="w-5 h-5 transition-all duration-300 relative z-10"
        :class="activeItem === index 
          ? 'text-blue-600 dark:text-blue-400 drop-shadow-lg' 
          : 'text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:drop-shadow-md'"
      />
      
      <!-- Subtle glow background -->
      <div 
        class="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
      ></div>
    </a>

    <!-- Divider -->
    <div class="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-1"></div>

    <!-- Toggle Dark Mode -->
    <button 
      @click="toggleDarkMode()" 
      class="relative group w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 dark:hover:from-amber-900/30 dark:hover:to-orange-900/30 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
    >
      <!-- Icon -->
      <div class="relative transition-transform duration-500" :class="{ 'rotate-180': isDark }">
        <component
          :is="isDark ? SunIcon : MoonIcon"
          class="w-5 h-5 transition-all duration-300"
          :class="isDark ? 'text-amber-500 dark:text-amber-400 drop-shadow-lg' : 'text-gray-600 dark:text-gray-300 group-hover:text-amber-500 dark:group-hover:text-amber-400'"
        />
      </div>

      <!-- Tooltip -->
      <div
        class="absolute -top-10 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 px-2.5 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
      >
        {{ isDark ? 'Switch to Light' : 'Switch to Dark' }}
        <div class="absolute top-full left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 dark:bg-gray-100 rotate-45 -mt-0.5"></div>
      </div>

      <!-- Glow -->
      <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import {
  MoonIcon,
  SunIcon,
  HomeIcon,
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline'

// VueUse: Dark mode toggle
const isDark = useDark()
const toggleDarkMode = useToggle(isDark)

// Active nav item
const activeItem = ref(null)
const setActiveItem = (index) => activeItem.value = index
const clearActiveItem = () => activeItem.value = null

// Nav Items
const navItems = [
  { icon: 'home', label: 'Home', href: '#home' },
  { icon: 'user', label: 'About', href: '#about' },
  { icon: 'academic-cap', label: 'Path', href: '#experience' },
  { icon: 'briefcase', label: 'Projects', href: '#project' },
  { icon: 'envelope', label: 'Contact', href: '#contact' }
]

// Icon mapping
const icons = {
  home: HomeIcon,
  user: UserIcon,
  'academic-cap': AcademicCapIcon,
  briefcase: BriefcaseIcon,
  envelope: EnvelopeIcon,
}
</script>