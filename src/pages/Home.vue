<template>
  <section
    id="home"
    class="relative min-h-screen overflow-hidden font-['Press_Start_2P']"
  >

    <!-- Folder Icons -->
    <div class="absolute top-15 left-6 flex flex-col gap-4 z-10 font-[VT323]">
      <button @click="() => openWindow('about')" class="flex flex-col items-center">
        <img src="/images/icon-folder.png" alt="About" class="w-12 hover:scale-110 hover:-rotate-6 transition" />
        <span class="block text-lg text-center text-white">About</span>
      </button>

      <button @click="() => openWindow('path')" class="flex flex-col items-center">
        <img src="/images/icon-folder.png" alt="Path" class="w-12 hover:scale-110 hover:-rotate-6 transition" />
        <span class="block text-lg text-center text-white">Path</span>
      </button>

      <button @click="() => openWindow('project')" class="flex flex-col items-center">
        <img src="/images/icon-folder.png" alt="Projects" class="w-12 hover:scale-110 hover:-rotate-6 transition" />
        <span class="block text-lg text-center text-white">Project</span>
      </button>

      <button @click="alert('Opening Certificate')" class="flex flex-col items-center">
        <img src="/images/icon-folder.png" alt="Certificate" class="w-12 hover:scale-110 hover:-rotate-6 transition" />
        <span class="block text-lg text-center text-white">Certificate</span>
      </button>

      <button @click="alert('Opening Contact')" class="flex flex-col items-center">
        <img src="/images/icon-folder.png" alt="Contact" class="w-12 hover:scale-110 hover:-rotate-6 transition" />
        <span class="block text-lg text-center text-white">Contact</span>
      </button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  openWindow: Function
})
</script>