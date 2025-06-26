<template>
    <div class="w-64 bg-pink-100/60 rounded-xl p-4 shadow-md text-pink-900 font-[VT323]">
        <h2 class="text-center text-lg mb-2">{{ monthYear }}</h2>
        <div class="grid grid-cols-7 gap-1 text-sm text-center">
            <span class="font-bold" v-for="day in days" :key="day">{{ day }}</span>
            <span v-for="blank in startOffset" :key="'b-' + blank"></span>
            <span
                v-for="date in daysInMonth"
                :key="'d-' + date"
                :class="[
                'rounded-full w-6 h-6 flex items-center justify-center mx-auto',
                isToday(date) ? 'bg-pink-400 text-white font-bold' : ''
                ]"
            >
                {{ date }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const today = new Date()

const currentYear = today.getFullYear()
const currentMonth = today.getMonth()
const currentDate = today.getDate()

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthYear = computed(() => {
    return today.toLocaleString('default', { month: 'long', year: 'numeric' })
})

const startOffset = computed(() => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay()
    return Array(firstDay).fill(null)
})

const daysInMonth = computed(() => {
    return Array.from(
        { length: new Date(currentYear, currentMonth + 1, 0).getDate() },
        (_, i) => i + 1
    )
})

const isToday = (date) => {
    return (
        date === currentDate &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
    )
}
</script>