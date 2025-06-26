<template>
    <div class="w-[300px] h-[340px] bg-pink-100/60 rounded-xl shadow-md relative flex flex-col items-center justify-between pt-4 pb-6 px-4 font-[VT323] text-pink-500">
        
        <!-- Layar Atas -->
        <div class="bg-pink-300 rounded-xl overflow-hidden w-full h-[130px] p-3 text-white flex flex-col justify-between">
        <!-- Info Track -->
        <div class="flex gap-3 items-center">
            <img
            :src="currentTrack.cover"
            alt="cover"
            class="w-16 h-16 object-cover rounded"
            />
            <div>
            <p class="text-lg font-bold">{{ currentTrack.title }}</p>
            <p class="text-sm text-pink-900">{{ currentTrack.artist }}</p>
            </div>
        </div>

        <!-- Progress Bar -->
        <div class="text-xs flex items-center justify-between mt-2">
            <span>{{ formatTime(currentTime) }}</span>
            <div class="flex-1 mx-2 h-[6px] rounded-full bg-pink-200 overflow-hidden">
            <div
                class="h-full bg-gradient-to-r from-green-300 to-pink-500"
                :style="{ width: progress + '%' }"
            ></div>
            </div>
            <span>{{ formatTime(duration) }}</span>
        </div>
        </div>

        <!-- Tulisan MUSIC -->
        <p class="mt-4 text-xs tracking-widest">MUSIC</p>

        <!-- Kontrol Bawah ala iPod -->
        <div class="w-33 h-33 rounded-full border-2 border-white bg-gradient-to-t from-[#ccc] to-[#eee] shadow-inner flex items-center justify-center relative">
        <!-- Tombol Play -->
        <button @click="togglePlay" class="absolute bottom-2 text-2xl">
            {{ isPlaying ? '⏸' : '▶' }}
        </button>

        <!-- Tombol Prev -->
        <button @click="prevTrack" class="absolute left-2 text-xl">
            ⏮
        </button>

        <!-- Tombol Next -->
        <button @click="nextTrack" class="absolute w-5 h-5 right-2 text-xl">
            ⏭
        </button>
        </div>

        <!-- Audio Element -->
        <audio
        ref="audioRef"
        :src="currentTrack.src"
        @timeupdate="updateTime"
        @loadedmetadata="updateMetadata"
        @ended="nextTrack"
        />
    </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'

const audioRef = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)

const tracks = [
  {
    title: 'Style',
    artist: 'Heart2Heart',
    src: '/music/style.mp3',
    cover: '/images/style-heart2heart.jpg',
  },
  {
    title: 'Pixel Groove',
    artist: 'Retro Beats',
    src: '/music/track2.mp3',
    cover: '/images/cover2.jpg',
  },
  {
    title: 'Lofi Moonlight',
    artist: 'Nostalgic Loops',
    src: '/music/track3.mp3',
    cover: '/images/cover3.jpg',
  },
]

const currentTrackIndex = ref(0)
const currentTrack = ref(tracks[0])

watch(currentTrackIndex, (newIndex) => {
  currentTrack.value = tracks[newIndex]
  play()
})

const play = () => {
  audioRef.value.play()
  isPlaying.value = true
}

const pause = () => {
  audioRef.value.pause()
  isPlaying.value = false
}

const togglePlay = () => {
  isPlaying.value ? pause() : play()
}

const nextTrack = () => {
  currentTrackIndex.value = (currentTrackIndex.value + 1) % tracks.length
}

const prevTrack = () => {
  currentTrackIndex.value =
    (currentTrackIndex.value - 1 + tracks.length) % tracks.length
}

const updateTime = () => {
  currentTime.value = audioRef.value.currentTime
}

const updateMetadata = () => {
  duration.value = audioRef.value.duration
}

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${mins}:${secs}`
}

const progress = computed(() => {
  return duration.value ? (currentTime.value / duration.value) * 100 : 0
})

onMounted(() => {
  // Optional autoplay
})
</script>
