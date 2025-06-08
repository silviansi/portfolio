<template>
    <!-- EXPERIENCE & EDUCATION -->
    <section ref="experienceSection" class="py-20 max-w-5xl mx-auto px-3 grid md:grid-cols-2 gap-16" id="experience">
        
        <!-- Internship & Trainings -->
        <div ref="internshipSection">
            <h2 ref="internshipTitle" class="text-3xl font-bold uppercase border-b-4 border-fuchsia-500 inline-block pb-1 mb-8">
                Internship & Trainings
            </h2>
            <div class="space-y-10 border-l-2 border-gray-300 pl-6">

                <div ref="internshipItems" class="relative experience-item">
                    <h3 class="text-xl font-semibold mb-1">Full Stack Web Developer - Trainings</h3>
                    <p class="text-sm text-fuchsia-500 dark:text-indigo-300 font-medium">PT. Arkatama Multi Solusindo (Feb 2024 – Jul 2024)</p>
                    <p class="text-sm text-justify mt-2">
                        Studied web development using Laravel framework and MySQL database.
                        Worked on a final group project, contributing as a front-end developer, responsible for implementing responsive user interfaces and ensuring seamless user experience.
                    </p>
                </div>

                <div ref="internshipItems" class="relative experience-item">
                    <h3 class="text-xl font-semibold mb-1">Full Stack Web Developer - Internship</h3>
                    <p class="text-sm text-fuchsia-500 dark:text-indigo-300 font-medium">PT. Pabrik Gula Candi Baru (Sep 2023 – Des 2023)</p>
                    <p class="text-sm text-justify mt-2">
                        Assisted in merging multiple Excel data files and preparing presentation materials.
                        Designed and implemented a web-based loan and profit-sharing system, from wireframe to web development, focusing on usability and functionality.
                    </p>
                </div>

                <div ref="internshipItems" class="relative experience-item">
                    <h3 class="text-xl font-semibold mb-1">Web Developer Program - Trainings</h3>
                    <p class="text-sm text-fuchsia-500 dark:text-indigo-300 font-medium">PT. Hacktivate Teknologi Indonesia (Feb 2023 – Jul 2023)</p>
                    <p class="text-sm text-justify mt-2">
                        Learned full-stack web development fundamentals from scratch, including HTML, CSS, and JavaScript.
                        Built several interactive web interfaces and completed a final project using pure JavaScript without any frameworks, focusing on clean code and responsive design.
                    </p>
                </div>

            </div>
        </div>

        <!-- Education -->
        <div ref="educationSection">
            <h2 ref="educationTitle" class="text-3xl font-bold uppercase border-b-4 border-pink-500 inline-block pb-1 mb-8">
                Education
            </h2>
                
            <div class="space-y-10 border-l-2 border-gray-300 pl-6">

                <div ref="educationItems" class="relative experience-item">
                    <h3 class="text-xl font-semibold mb-1">Universitas Negeri Surabaya</h3>
                    <p class="text-sm text-pink-500 dark:text-pink-300 font-medium">S1 Teknik Informatika (2020 – 2025)</p>
                    <p class="text-sm text-pink-700 dark:text-pink-400 font-medium">GPA: 3.81</p>
                    <p class="text-sm text-justify mt-2">
                        Focused on Data Science and Web Development, with in-depth study of programming, data analysis, and statistical modeling.
                        Completed a thesis project on building a web-based stunting detection system for toddlers using the Random Forest algorithm, combining health data insights with predictive modeling techniques.
                    </p>
                </div>

                <div ref="educationItems" class="relative experience-item">
                    <h3 class="text-xl font-semibold mb-1">SMA Negeri 1 Krembung</h3>
                    <p class="text-sm text-pink-500 dark:text-pink-300 font-medium">Acceleration Science Program (2018 – 2020)</p>
                    <p class="text-sm text-justify mt-2">
                        Completed high school education in just 2 years through the Acceleration Program, designed for students with outstanding academic performance and high learning capacity. 
                        Gained a solid foundation in science and mathematics with a strong emphasis on discipline, critical thinking, and time management.
                    </p>
                </div>

            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Template refs
const experienceSection = ref(null);
const internshipSection = ref(null);
const internshipTitle = ref(null);
const internshipItems = ref([]);
const educationSection = ref(null);
const educationTitle = ref(null);
const educationItems = ref([]);

onMounted(async () => {
    await nextTick();

    // Set initial state for internship items
    gsap.set(internshipTitle.value, { opacity: 0, y: 50 });
    gsap.set(educationTitle.value, { opacity: 0, y: 50 });
    if (internshipItems.value.length > 0) {
        gsap.set(internshipItems.value, { opacity: 0, y: 40 });
    }
    if (educationItems.value.length > 0) {
        gsap.set(educationItems.value, { opacity: 0, y: 40 });
    }

    // Internship section animations
    gsap.fromTo(internshipTitle.value,
        { opacity: 0, y: 50 },
        {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: internshipSection.value,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
        }
    );

    if (internshipItems.value.length > 0) {
        gsap.fromTo(internshipItems.value,
        { 
            opacity: 0, 
            y: 40
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
            trigger: internshipSection.value,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
            }
        }
        );
    }

    // Education section animations
    gsap.fromTo(educationTitle.value,
        { opacity: 0, y: 50 },
        {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: educationSection.value,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
        }
    );

    if (educationItems.value.length > 0) {
        gsap.fromTo(educationItems.value,
        { 
            opacity: 0, 
            y: 40
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
            trigger: educationSection.value,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
            }
        }
        );
}}
);
</script>

<style scoped>
/* Experience items initial state */
.experience-item {
    transition: all 0.3s ease;
}

.experience-item:hover {
    transform: translateX(5px);
}   
</style>