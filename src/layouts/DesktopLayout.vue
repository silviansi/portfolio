<template>
    <div
        class="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/bg-default-2.png')` }"
    >
        <!-- Main Desktop View -->
        <router-view :openWindow="openWindow" />

        <!-- Render Open & Visible Windows -->
        <component
        v-for="win in visibleWindows"
        :key="win.name"
        :is="getComponent(win.name)"
        @close="closeWindow(win.name)"
        @minimize="toggleWindow(win.name)"
        />

        <!-- Taskbar -->
        <Taskbar
        :windows="openWindows"
        @startApp="openWindow"
        @toggleWindow="toggleWindow"
        />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Taskbar from '@/components/Taskbar.vue'

// Import semua window
import AboutWindow from '@/pages/About.vue'
import PathWindow from '@/pages/Path.vue'
import ProjectWindow from '@/pages/Project.vue'

const openWindows = ref([])

const windowMap = {
    about: AboutWindow,
    path: PathWindow,
    project: ProjectWindow,
}

const getComponent = (name) => windowMap[name] || null

const visibleWindows = computed(() =>
    openWindows.value.filter((w) => !w.minimized)
)

const openWindow = (name) => {
    const existing = openWindows.value.find((w) => w.name === name)
    if (existing) {
        existing.minimized = false // restore if already opened
    } else {
        openWindows.value.push({
        name,
        label: name.charAt(0).toUpperCase() + name.slice(1),
        icon: '/images/icon-folder.png',
        minimized: false,
        })
    }
}

const closeWindow = (name) => {
    openWindows.value = openWindows.value.filter(w => w.name !== name)
}

const toggleWindow = (name) => {
    const win = openWindows.value.find((w) => w.name === name)
    if (win) {
        win.minimized = !win.minimized
    }
    }
</script>