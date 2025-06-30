<template>
    <div class="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-200 via-pink-300 to-pink-100">

        <!-- ✨ Layer Kotak-kotak Estetik -->
        <div class="absolute inset-0 z-0">
            <div class="absolute w-40 h-60 top-10 left-10 bg-pink-100/60 rounded-xl"></div>
            <div class="absolute w-24 h-24 top-14 left-60 bg-pink-200/60 rounded-xl backdrop-blur-md"></div>
            <div class="absolute w-28 h-28 top-36 left-36 bg-pink-300/60 rounded-xl"></div>
        </div>
        
        <!-- ✨ Decorative Wallpaper Layer -->
        <img
            src="/images/white-cat.gif"
            alt="glitter"
            class="absolute bottom-6 right-0 w-24 z-10"
        />
        <!-- <img
            src="/images/cute-cat.gif"
            alt="sticker"
            class="absolute top-12 right-10 w-24 rotate-12 z-10"
        /> -->
        <img
            src="/images/heart-cat.gif"
            alt="sticker"
            class="absolute bottom-10 left-90 w-20 z-10"
        />

        <!-- Main Desktop View -->
        <router-view :openWindow="openWindow" />

        <!-- Render Open & Visible Windows -->
        <component
            v-for="win in visibleWindows"
            :key="win.name"
            :is="getComponent(win.name)"
            :baseZ="win.z"
            :updateZ="() => bringToFront(win.name)"
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
import InternetWindow from '@/pages/Internet.vue'
import NotepadWindow from '@/pages/Notepad.vue'
import TerminalWindow from '@/pages/Terminal.vue'

const openWindows = ref([])
const activeZIndex = ref(10)

const bringToFront = (name) => {
    const win = openWindows.value.find((w) => w.name === name)
    if (win) {
        win.z = ++activeZIndex.value
    }
}

const windowMap = {
    about: AboutWindow,
    path: PathWindow,
    project: ProjectWindow,
    internet: InternetWindow,
    notepad: NotepadWindow,
    terminal: TerminalWindow,
}

const getComponent = (name) => windowMap[name] || null

const visibleWindows = computed(() =>
    openWindows.value.filter((w) => !w.minimized)
)

const openWindow = (name, icon = '/images/icon-folder.png') => {
    const existing = openWindows.value.find((w) => w.name === name)
    if (existing) {
        existing.minimized = false
        existing.z = ++activeZIndex.value
    } else {
        openWindows.value.push({
            name,
            label: name.charAt(0).toUpperCase() + name.slice(1),
            icon,
            minimized: false,
            z: ++activeZIndex.value,
        })
    }
}

const closeWindow = (name) => {
    openWindows.value = openWindows.value.filter((w) => w.name !== name)
}

const toggleWindow = (name) => {
    const win = openWindows.value.find((w) => w.name === name)
    if (win) {
        win.minimized = !win.minimized
    }
}
</script>