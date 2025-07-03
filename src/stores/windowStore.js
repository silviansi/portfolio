import { defineStore } from 'pinia'
import { ref, computed, defineAsyncComponent } from 'vue'

export const useWindowStore = defineStore('window', () => {
    const openWindows = ref([])
    const activeZIndex = ref(10)

    const windowMap = {
        about: defineAsyncComponent(() => import('@/pages/About.vue')),
        skill: defineAsyncComponent(() => import('@/pages/Skill.vue')),
        path: defineAsyncComponent(() => import('@/pages/Path.vue')),
        project: defineAsyncComponent(() => import('@/pages/Project.vue')),
        certificate: defineAsyncComponent(() => import('@/pages/Certificate.vue')),
        contact: defineAsyncComponent(() => import('@/pages/Contact.vue')),
        internet: defineAsyncComponent(() => import('@/pages/Internet.vue')),
        notepad: defineAsyncComponent(() => import('@/pages/Notepad.vue')),
        terminal: defineAsyncComponent(() => import('@/pages/Terminal.vue')),
        }

    const visibleWindows = computed(() =>
        openWindows.value.filter((w) => !w.minimized)
    )

    const getComponent = (name) => windowMap[name] || null

    const bringToFront = (name) => {
        const win = openWindows.value.find((w) => w.name === name)
        if (win) win.z = ++activeZIndex.value
    }

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
        if (win) win.minimized = !win.minimized
    }

    return {
        openWindows,
        visibleWindows,
        getComponent,
        openWindow,
        closeWindow,
        toggleWindow,
        bringToFront,
    }
})