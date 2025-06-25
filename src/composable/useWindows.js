import { ref } from 'vue'

const openedWindows = ref([]) // [{ name: 'about', minimized: false }]
const activeWindow = ref(null)

export function useWindows() {
    const openWindow = (name) => {
        const existing = openedWindows.value.find(w => w.name === name)
        if (existing) {
        existing.minimized = false
        } else {
        openedWindows.value.push({ name, minimized: false })
        }
        activeWindow.value = name
    }

    const closeWindow = (name) => {
        openedWindows.value = openedWindows.value.filter(w => w.name !== name)
        if (activeWindow.value === name) activeWindow.value = null
    }

    const toggleMinimize = (name) => {
        const win = openedWindows.value.find(w => w.name === name)
        if (win) {
        win.minimized = !win.minimized
        if (!win.minimized) activeWindow.value = name
        }
    }

    return {
        openedWindows,
        activeWindow,
        openWindow,
        closeWindow,
        toggleMinimize,
    }
}