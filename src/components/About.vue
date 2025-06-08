<template>
    <section id="about">

        <section class="py-20 px-6 max-w-4xl mx-auto">
            <div class="text-center mb-10">
                <h2 class="text-5xl font-bold uppercase tracking-wide border-b pb-4 inline-block">
                    Hello, I'm <span ref="nameSpan" class="text-pink-300 dark:text-purple-300 typing-container">
                        <span class="typed-text"></span>
                        <span class="cursor" :class="{ 'typing': isTyping }">|</span>
                    </span>
                </h2>
            </div>

            <div ref="aboutText" class="relative bg-pink-300/20 dark:bg-purple-900/20 backdrop-blur-sm p-6 text-justify leading-relaxed shadow-md border border-gray-200">
                <p class="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-pink-400 dark:first-letter:text-fuchsia-400">
                    As a passionate and detail-oriented Web Developer, I specialize in creating seamless and user-friendly web experiences. With a deep understanding of front-end technologies like HTML, CSS, and JavaScript, as well as a strong foundation in back-end development, I strive to build dynamic, responsive websites and applications. My goal is to leverage my technical skills and creative mindset to deliver innovative solutions that cater to users' needs and ensure an enjoyable browsing experience. Let's collaborate to bring your digital ideas to life!
                </p>
            </div>
        </section>

        <!-- SKILLS -->
        <section ref="skillsSection" class="mb-10 py-20 max-w-4xl mx-auto">
            <div class="text-center mb-10">
                <h2 ref="skillsTitle" class="text-5xl font-bold uppercase border-b-2 border-gray-300 inline-block pb-2">
                    Technical Skills
                </h2>
                <p ref="skillsSubtitle" class="text-gray-500 mt-2 italic">A snapshot of tools I master</p>
            </div>

            <div ref="skillsGrid" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                <div
                    v-for="(skill, index) in skills"
                    :key="index"
                    ref="skillCards"
                    class="relative p-4 bg-pink-300/20 dark:bg-purple-900/20 backdrop-blur-sm border border-pink-300/30 dark:border-purple-500/30 shadow-sm rounded-xl flex justify-center items-center hover:shadow-lg transition-all duration-300 group overflow-hidden skill-card"
                    @mousemove="handleMouseMove"
                    @mouseleave="handleMouseLeave"
                    @mouseenter="handleMouseEnter"
                >
                    <!-- Animated glow effect with theme-based colors -->
                    <div
                        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none glow-effect"
                        :style="glowStyle"
                    ></div>
                    
                    <!-- Card content -->
                    <div class="relative z-10">
                        <img :src="skill.image" alt="Skill" class="w-12 h-12 object-contain group-hover:brightness-110 transition-all duration-300" />
                    </div>
                </div>
            </div>
        </section>

    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Template refs
const nameSpan = ref(null);
const aboutText = ref(null);
const skillsSection = ref(null);
const skillsTitle = ref(null);
const skillsSubtitle = ref(null);
const skillsGrid = ref(null);
const skillCards = ref([]);

// Typing animation state
const isTyping = ref(true);

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
];

// Mouse position tracking
const mouseX = ref(0);
const mouseY = ref(0);

// Computed style for the glow effect with theme-based colors
const glowStyle = ref({});

// Function to get theme-based glow colors
const getGlowColors = (x = 50, y = 50) => {
    // Check if dark mode is active
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    if (isDarkMode) {
        // Purple glow for dark mode
        return `radial-gradient(circle 150px at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 0%, rgba(147, 51, 234, 0.3) 30%, transparent 70%)`;
    } else {
        // Pink glow for light mode
        return `radial-gradient(circle 150px at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 0%, rgba(236, 72, 153, 0.3) 30%, transparent 70%)`;
    }
};

// Initialize glow style
const updateGlowStyle = (x = 50, y = 50) => {
    glowStyle.value = {
        background: getGlowColors(x, y)
    };
};

// Typing animation function
const typeWriter = () => {
    const text = "Silvia";
    const typedTextSpan = nameSpan.value.querySelector('.typed-text');
    let i = 0;
    
    // Clear any existing text
    typedTextSpan.textContent = '';
    isTyping.value = true;
    
    const type = () => {
        if (i < text.length) {
        typedTextSpan.textContent += text.charAt(i);
        i++;
        setTimeout(type, 150);
        } else {
        // Stop cursor blinking after typing is complete
        setTimeout(() => {
            isTyping.value = false;
        }, 1000);
        }
    };
    
    type();
};

// Handle mouse movement
const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
        
    mouseX.value = x;
    mouseY.value = y;
        
    // Update glow position with theme-based colors
    updateGlowStyle(x, y);
};

// Handle mouse leave
const handleMouseLeave = () => {
    updateGlowStyle(50, 50);
};

// Handle mouse enter for bounce effect
const handleMouseEnter = (event) => {
    gsap.to(event.currentTarget, {
        scale: 1.05,
        duration: 0.3,
        ease: "back.out(2)"
    });
};

onMounted(async () => {
    await nextTick();
    
    // Initialize glow style
    updateGlowStyle();
    
    // Set initial states for all elements
    gsap.set(nameSpan.value, { opacity: 0, y: 30 });
    gsap.set(aboutText.value, { opacity: 0, y: 30 });
    gsap.set(skillsTitle.value, { opacity: 0, y: 50 });
    gsap.set(skillsSubtitle.value, { opacity: 0, y: 30 });
    if (skillCards.value.length > 0) {
        gsap.set(skillCards.value, { opacity: 0, y: 50, scale: 0.8 });
    }

    // Name section animation with ScrollTrigger
    ScrollTrigger.create({
        trigger: nameSpan.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onEnter: () => {
        gsap.to(nameSpan.value, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
            typeWriter();
            }
        });
        }
    });

    // About text fade in with ScrollTrigger
    gsap.fromTo(aboutText.value, 
        { opacity: 0, y: 30 },
        { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        delay: 0.5,
        ease: "power5.out",
        scrollTrigger: {
            trigger: aboutText.value,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
        }
    );

    // Skills section animations with ScrollTrigger
    gsap.fromTo(skillsTitle.value,
        { opacity: 0, y: 50 },
        {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: skillsSection.value,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
        }
    );

    gsap.fromTo(skillsSubtitle.value,
        { opacity: 0, y: 30 },
        {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: skillsSection.value,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
        }
    );

    // Skills cards bounce animation
    if (skillCards.value.length > 0) {
        gsap.fromTo(skillCards.value,
        { 
            opacity: 0, 
            y: 50,
            scale: 0.8
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            stagger: {
            amount: 0.8,
            grid: "auto",
            from: "center"
            },
            scrollTrigger: {
            trigger: skillsGrid.value,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
            }
        }
        );
    }

});
</script>

<style scoped>
/* Typing animation styles */
.typing-container .cursor {
    color: #d8b4fe;
    font-weight: 100;
    animation: blink 1s infinite;
}

.typing-container .cursor.typing {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* Skill card hover effects */
.skill-card {
    transition: all 0.3s ease;
}

.skill-card:hover {
    transform: translateY(-4px);
}

.skill-card:not(:hover) {
    transform: scale(1);
}

/* Glow effect that adapts to theme */
.glow-effect {
    transition: opacity 0.3s ease;
}
</style>