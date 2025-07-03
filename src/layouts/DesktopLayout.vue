<template>
    <div class="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-200 via-pink-300 to-pink-100">
        
        <!-- Decorative Wallpaper Layer -->
        <img
            src="/images/white-cat.gif"
            alt="glitter"
            class="absolute bottom-6 right-0 w-24 z-10"
        />
        <img
            src="/images/heart-cat.gif"
            alt="sticker"
            class="absolute bottom-10 left-90 w-20 z-10"
        />

        <!-- Main Desktop View -->
        <router-view :openWindow="windowStore.openWindow" />

        <!-- Render Open & Visible Windows -->
        <Suspense>
            <component
                v-for="win in windowStore.visibleWindows"
                :key="win.name"
                :is="windowStore.getComponent(win.name)"
                :baseZ="win.z"
                :updateZ="() => windowStore.bringToFront(win.name)"
                @close="windowStore.closeWindow(win.name)"
                @minimize="windowStore.toggleWindow(win.name)"
            />
        </Suspense>

        <!-- Taskbar -->
        <Taskbar
            :windows="windowStore.openWindows"
            @startApp="windowStore.openWindow"
            @toggleWindow="windowStore.toggleWindow"
        />
    </div>
</template>

<script setup>
import Taskbar from '@/components/Taskbar.vue'
import { useWindowStore } from '@/stores/windowStore'

const windowStore = useWindowStore()
</script>