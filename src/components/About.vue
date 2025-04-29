<template>
    <section id="about-section" class="py-16 text-white">
        <div class="container mx-auto px-4">

            <!-- Skills Section -->
            <div class="mb-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                <div class="absolute w-86 h-86 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
                
                <div class="flex flex-col md:flex-row min-h-[300px] gap-10">
                    <div class="md:w-1/3 flex flex-col items-center justify-center text-center">
                        <h3 class="text-5xl font-bold mb-4">Skills</h3>
                    </div>
                </div>

                <div class="md:w-2/3 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
                    <div
                        v-for="(skill, index) in skills"
                        :key="index"
                        data-aos="fade-up"
                        class="transition duration-300 transform hover:scale-105
                                p-4 rounded-xl flex items-center justify-center 
                                bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-md 
                                hover:shadow-[0_0_15px_3px_rgba(236,72,153,0.6)]">
                        <img :src="skill.image" alt="Skill logo" class="w-10 max-h-10 object-contain" />
                    </div>
                </div>    
            </div>

            <!-- Experience Section -->
            <div class="py-8">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12">Internship & Trainings</h2>

                <div class="relative border-l-2 border-fuchsia-500 ml-6">
                <div class="mb-12 ml-6 relative">
                    <div class="absolute -left-9 top-0 w-6 h-6 bg-fuchsia-500 rounded-full border-4 border-white"></div>
                    <h3 class="text-2xl font-semibold text-gray-400">Full Stack Web Developer - Trainings</h3>
                    <p class="text-blue-400 font-medium">PT. Arkatama Multi Solusindo (Feb 2024–Jul 2024)</p>
                    <p class="text-gray-600 mt-2">
                    Mengembangkan dan mengoptimasi API menggunakan Laravel, serta membangun sistem informasi kerja sama.
                    </p>
                </div>

                <div class="mb-12 ml-6 relative">
                    <div class="absolute -left-9 top-0 w-6 h-6 bg-fuchsia-500 rounded-full border-4 border-white"></div>
                    <h3 class="text-2xl font-semibold text-gray-400">Full Stack Web Developer - Internship</h3>
                    <p class="text-blue-400 font-medium">PT. Pabrik Gula Candi Baru (Sep 2023–Des 2023)</p>
                    <p class="text-gray-600 mt-2">
                    Mengembangkan dan mengoptimasi API menggunakan Laravel, serta membangun sistem informasi kerja sama.
                    </p>
                </div>

                <div class="ml-6 relative">
                    <div class="absolute -left-9 top-0 w-6 h-6 bg-fuchsia-500 rounded-full border-4 border-white"></div>
                    <h3 class="text-2xl font-semibold text-gray-400">Web Developer - Trainings</h3>
                    <p class="text-blue-400 font-medium">PT. Hacktivate Teknologi Indonesia (Feb 2023–Jul 2023)</p>
                    <p class="text-gray-600 mt-2">
                    Mempelajari pengembangan web menggunakan HTML, CSS, JavaScript, dan membuat proyek akhir berbasis React dan Node.js.
                    </p>
                </div>
                </div>
            </div>
            </div>

            <!-- Education Section -->
            <div class="py-8">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12">Education</h2>

                <div class="relative border-l-2 border-pink-500 ml-6">
                <div class="mb-12 ml-6 relative">
                    <div class="absolute -left-9 top-0 w-6 h-6 bg-pink-500 rounded-full border-4 border-white"></div>
                    <h3 class="text-2xl font-semibold text-gray-400">Universitas Negeri Surabaya</h3>
                    <p class="text-pink-400 font-medium">S1 Teknik Informatika (2020–2025)</p>
                </div>

                <div class="ml-6 relative">
                    <div class="absolute -left-9 top-0 w-6 h-6 bg-pink-500 rounded-full border-4 border-white"></div>
                    <h3 class="text-2xl font-semibold text-gray-400">SMA Negeri 1 Krembung</h3>
                    <p class="text-pink-400 font-medium">Acceleration Science Program (2018–2020)</p>
                </div>
                </div>
            </div>
            </div>

        </div>
    </section>
</template>

<script setup>
const skills = [
    { image: '/images/html.png' },
    { image: '/images/css.png' },
    { image: '/images/bootstrap.png' },
    { image: '/images/javascript.png' },
    { image: '/images/php.png' },
    { image: '/images/laravel.png' },
    { image: '/images/python.png' },
    { image: '/images/vue.png' },
    { image: '/images/tailwind.png' },
    { image: '/images/mysql.png' },
    { image: '/images/github.png' },
    { image: '/images/gitlab.png' },
    { image: '/images/figma.png' }
]
</script>