<template>
    <div class="text-pink-900 font-['Press_Start_2P'] text-xl md:text-2xl lg:text-4xl text-center ml-5">
        {{ hourMinute }}
        <sup class="text-sm align-super -ml-5">{{ ampm }}</sup>
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