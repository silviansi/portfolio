<template>
    <section id="about" class="bg-white text-gray-800">

        <section class="py-20 px-6 max-w-4xl mx-auto">
            <div class="text-center mb-10" data-aos="fade-up">
                <h2 class="text-5xl font-bold text-gray-900 uppercase tracking-wide border-b pb-4 inline-block">
                    Hello, I'm Silvia
                </h2>
            </div>

            <article class="relative bg-white p-6 text-justify text-gray-800 leading-relaxed shadow-md border border-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
            >
                <p class="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-pink-500">
                    As a passionate and detail-oriented Web Developer, I specialize in creating seamless and user-friendly web experiences. With a deep understanding of front-end technologies like HTML, CSS, and JavaScript, as well as a strong foundation in back-end development, I strive to build dynamic, responsive websites and applications. My goal is to leverage my technical skills and creative mindset to deliver innovative solutions that cater to users' needs and ensure an enjoyable browsing experience. Let's collaborate to bring your digital ideas to life!
                </p>
            </article>
        </section>

        <div class="max-w-6xl mx-auto px-6">

        <!-- SKILLS -->
        <section class="mb-10 py-20">
            <div class="text-center mb-10">
                <h2 class="text-5xl font-bold uppercase border-b-2 border-gray-300 inline-block pb-2">
                    Technical Skills
                </h2>
                <p class="text-gray-500 mt-2 italic">A snapshot of tools I master</p>
            </div>

            <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                <div
                    v-for="(skill, index) in skills"
                    :key="index"
                    class="p-4 bg-white border border-gray-200 shadow-sm rounded-lg flex justify-center items-center hover:shadow-md transition"
                >
                    <img :src="skill.image" alt="Skill" class="w-12 h-12 object-contain" />
                </div>
            </div>
        </section>

        <!-- EXPERIENCE & EDUCATION -->
        <section class="py-20 bg-white text-gray-800">
            <div class="max-w-6xl mx-auto px-3 grid md:grid-cols-2 gap-16">

            <!-- Internship & Trainings -->
            <div>
                <h2 class="text-3xl font-bold uppercase border-b-4 border-fuchsia-500 inline-block pb-1 mb-8">
                    Internship & Trainings
                </h2>
            <div class="space-y-10 border-l-2 border-gray-300 pl-6">

                <div class="relative">
                    <h3 class="text-xl font-semibold mb-1">Full Stack Web Developer - Trainings</h3>
                    <p class="text-sm text-fuchsia-700 font-medium">PT. Arkatama Multi Solusindo (Feb 2024 – Jul 2024)</p>
                    <p class="text-sm text-justify mt-2">
                        Studied web development using Laravel framework and MySQL database.
                        Worked on a final group project, contributing as a front-end developer, responsible for implementing responsive user interfaces and ensuring seamless user experience.
                    </p>
                </div>

                <div class="relative">
                    <h3 class="text-xl font-semibold mb-1">Full Stack Web Developer - Internship</h3>
                    <p class="text-sm text-fuchsia-700 font-medium">PT. Pabrik Gula Candi Baru (Sep 2023 – Des 2023)</p>
                    <p class="text-sm text-justify mt-2">
                        Assisted in merging multiple Excel data files and preparing presentation materials.
                        Designed and implemented a web-based loan and profit-sharing system, from wireframe to web development, focusing on usability and functionality.
                    </p>
                </div>

                <div class="relative">
                    <h3 class="text-xl font-semibold mb-1">Web Developer Program - Trainings</h3>
                    <p class="text-sm text-fuchsia-700 font-medium">PT. Hacktivate Teknologi Indonesia (Feb 2023 – Jul 2023)</p>
                    <p class="text-sm text-justify mt-2">
                        Learned full-stack web development fundamentals from scratch, including HTML, CSS, and JavaScript.
                        Built several interactive web interfaces and completed a final project using pure JavaScript without any frameworks, focusing on clean code and responsive design.
                    </p>
                </div>

            </div>
            </div>

            <!-- Education -->
            <div>
                <h2 class="text-3xl font-bold uppercase border-b-4 border-pink-500 inline-block pb-1 mb-8">
                    Education
                </h2>
                
                <div class="space-y-10 border-l-2 border-gray-300 pl-6">

                    <div class="relative">
                        <h3 class="text-xl font-semibold mb-1">Universitas Negeri Surabaya</h3>
                        <p class="text-sm text-pink-700 font-medium">S1 Teknik Informatika (2020 – 2025)</p>
                        <p class="text-sm text-pink-900 font-medium">GPA: 3.81</p>
                        <p class="text-sm text-justify mt-2">
                            Focused on Data Science and Web Development, with in-depth study of programming, data analysis, and statistical modeling.
                            Completed a thesis project on building a web-based stunting detection system for toddlers using the Random Forest algorithm, combining health data insights with predictive modeling techniques.
                        </p>
                    </div>

                    <div class="relative">
                        <h3 class="text-xl font-semibold mb-1">SMA Negeri 1 Krembung</h3>
                        <p class="text-sm text-pink-700 font-medium">Acceleration Science Program (2018 – 2020)</p>
                        <p class="text-sm text-justify mt-2">
                            Completed high school education in just 2 years through the Acceleration Program, designed for students with outstanding academic performance and high learning capacity. 
                            Gained a solid foundation in science and mathematics with a strong emphasis on discipline, critical thinking, and time management.
                        </p>
                    </div>

                </div>
            </div>

            </div>
        </section>


    </div>
    </section>
</template>

<script setup>
const skills = [
  { image: '/images/html.png' },
  { image: '/images/css.png' },
  { image: '/images/javascript.png' },
  { image: '/images/bootstrap.png' },
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
