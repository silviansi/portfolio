<template>
    <!-- EXPERIENCE & EDUCATION -->
    <section class="py-20 max-w-5xl mx-auto px-3 grid md:grid-cols-2 gap-16 font-['VT323'] text-black dark:text-white" id="path">

        <!-- Internship & Trainings -->
        <div>
            <h2 class="text-2xl font-['Press_Start_2P'] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 inline-block pb-1 mb-8 drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                Internship & Trainings
            </h2>
            <div class="space-y-10 border-l-4 border-dashed border-fuchsia-300 pl-6">
                <div class="relative experience-item">
                    <h3 class="text-xl font-semibold mb-1">Full Stack Web Developer - Trainings</h3>
                    <p class="text-base text-fuchsia-500 dark:text-indigo-300 font-medium">PT. Arkatama Multi Solusindo (Feb 2024 – Jul 2024)</p>
                    <p class="text-base text-justify mt-2">
                        Studied web development using Laravel framework and MySQL database.
                        Worked on a final group project, contributing as a front-end developer, responsible for implementing responsive user interfaces and ensuring seamless user experience.
                    </p>
                </div>

                <div class="relative experience-item">
                    <h3 class="text-xl font-semibold mb-1">Full Stack Web Developer - Internship</h3>
                    <p class="text-base text-fuchsia-500 dark:text-indigo-300 font-medium">PT. Pabrik Gula Candi Baru (Sep 2023 – Des 2023)</p>
                    <p class="text-base text-justify mt-2">
                        Assisted in merging multiple Excel data files and preparing presentation materials.
                        Designed and implemented a web-based loan and profit-sharing system, from wireframe to web development, focusing on usability and functionality.
                    </p>
                </div>

                <div class="relative experience-item">
                    <h3 class="text-xl font-semibold mb-1">Web Developer Program - Trainings</h3>
                    <p class="text-base text-fuchsia-500 dark:text-indigo-300 font-medium">PT. Hacktivate Teknologi Indonesia (Feb 2023 – Jul 2023)</p>
                    <p class="text-base text-justify mt-2">
                        Learned full-stack web development fundamentals from scratch, including HTML, CSS, and JavaScript.
                        Built several interactive web interfaces and completed a final project using pure JavaScript without any frameworks, focusing on clean code and responsive design.
                    </p>
                </div>
            </div>
        </div>

        <!-- Education -->
        <div>
            <h2 class="text-3xl font-['Press_Start_2P'] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 inline-block pb-1 mb-8 drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                Education
            </h2>
            <div class="space-y-10 border-l-4 border-dashed border-pink-300 pl-6">
                <div class="relative experience-item">
                    <h3 class="text-xl font-semibold mb-1">Universitas Negeri Surabaya</h3>
                    <p class="text-base text-pink-500 dark:text-pink-300 font-medium">S1 Teknik Informatika (2020 – 2025)</p>
                    <p class="text-base text-pink-700 dark:text-pink-400 font-medium">GPA: 3.81</p>
                    <p class="text-base text-justify mt-2">
                        Focused on Data Science and Web Development, with in-depth study of programming, data analysis, and statistical modeling.
                        Completed a thesis project on building a web-based stunting detection system for toddlers using the Random Forest algorithm, combining health data insights with predictive modeling techniques.
                    </p>
                </div>

                <div class="relative experience-item">
                    <h3 class="text-xl font-semibold mb-1">SMA Negeri 1 Krembung</h3>
                    <p class="text-base text-pink-500 dark:text-pink-300 font-medium">Acceleration Science Program (2018 – 2020)</p>
                    <p class="text-base text-justify mt-2">
                        Completed high school education in just 2 years through the Acceleration Program, designed for students with outstanding academic performance and high learning capacity. 
                        Gained a solid foundation in science and mathematics with a strong emphasis on discipline, critical thinking, and time management.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// GSAP and ScrollTrigger removed as requested
</script>

<style scoped>
.experience-item {
    transition: all 0.3s ease;
}
.experience-item:hover {
    transform: translateX(5px);
}   
</style>
