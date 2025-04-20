<template>
  <main class="min-h-screen bg-darkbg text-black font-grotesk">
    <header v-if="$route.path !== '/'" class="p-6 text-center">
      <h1 class="text-4xl font-bold text-techy">My Portfolio</h1>
      <nav class="mt-4 space-x-4">
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>

    <router-view />
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>