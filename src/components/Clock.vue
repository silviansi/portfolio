<template>
    <div
        class="w-64 h-20 mx-auto bg-pink-300 border-4 border-pink-500 rounded-[2rem] shadow-[4px_4px_0_#db2777] flex flex-col items-center justify-center font-['Press_Start_2P']"
    >
        <!-- Waktu -->
        <div class="text-white text-3xl drop-shadow-[1px_1px_0_#000]">
        {{ hourMinute }}
        <sup class="text-xs ml-1">{{ ampm }}</sup>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const time = ref(new Date())

const updateClock = () => {
    time.value = new Date()
}

let interval = null

onMounted(() => {
    interval = setInterval(updateClock, 1000)
})

onBeforeUnmount(() => {
    clearInterval(interval)
})

const hourMinute = computed(() => {
    const hours = time.value.getHours()
    const minutes = time.value.getMinutes()
    const hour12 = hours % 12 || 12
    const pad = (n) => String(n).padStart(2, '0')
    return `${pad(hour12)}:${pad(minutes)}`
})

const ampm = computed(() => {
    return time.value.getHours() >= 12 ? 'PM' : 'AM'
})
</script>