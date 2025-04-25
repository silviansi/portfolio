<template>
  <router-view />
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
    offset: 50,
  })
})
</script>