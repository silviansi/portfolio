<template>
  <section
    id="contact"
    class="relative min-h-screen px-6 sm:px-12 pt-28 font-['Press_Start_2P']"
  >

    <div class="max-w-5xl mx-auto relative z-10 pb-32">
      <h2 class="text-3xl sm:text-4xl text-center mb-5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow">
        Contact Me
      </h2>
      <p class="text-sm font-mono text-pink-500 text-center italic">
        Let’s connect, collaborate, and create something amazing together.
      </p>

      <div class="grid md:grid-cols-2 gap-10 mt-10">
        <!-- Y2K ID Card Style -->
        <div class="w-full max-w-4xl mx-auto bg-white border-[2px] border-pink-500 drop-shadow-[4px_4px_0_#f9a8d4] rounded-3xl overflow-hidden font-['VT323'] text-black p-6 flex flex-col md:flex-row gap-6 items-center">
          <!-- Avatar -->
          <div class="border-2 border-pink-500 rounded-xl overflow-hidden w-40 h-40 shrink-0">
            <img src="/images/home-image.png" alt="Silvia Nanda" class="w-full h-full object-cover" />
          </div>

          <!-- Info -->
          <div class="flex-1 space-y-2 text-sm">
            <div class="flex justify-between items-center font-bold text-lg">
              <span>ID CARD</span>
              <span class="text-xs font-mono text-right">JOINED 2025</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <p><span class="font-bold">NAME:</span> Silvia Nanda Syafa Iswahyudi</p>
              <p><span class="font-bold">PRONOUNS:</span> She/Her</p>
              <p><span class="font-bold">ROLE:</span> Web Developer</p>
              <p><span class="font-bold">LOCATION:</span> Sidoarjo, ID</p>
            </div>
            <div>
              <p class="font-bold mt-4">CONTACT</p>
              <p>Email: <a href="mailto:silviansi24@gmail.com" class="underline">silviansi24@gmail.com</a></p>
              <p>Phone: <a href="tel:+6281358811732" class="underline">+62 813-5881-1732</a></p>
            </div>
          </div>
        </div>


        <!-- Social Media Grid -->
        <div class="grid grid-cols-2 gap-4 font-[VT323]">
          <a
            href="https://instagram.com/silviansi"
            target="_blank"
            class="dreamy-btn bg-gradient-to-br from-pink-200 via-pink-100 to-white"
          >
            <i class="fab fa-instagram text-lg"></i>
            <span class="text-xl mt-1">Instagram</span>
          </a>

          <a
            href="https://linkedin.com/in/silviansi"
            target="_blank"
            class="dreamy-btn bg-gradient-to-br from-purple-200 via-white to-pink-100"
          >
            <i class="fab fa-linkedin-in text-lg"></i>
            <span class="text-xl mt-1">LinkedIn</span>
          </a>

          <a
            href="https://github.com/silviansi"
            target="_blank"
            class="dreamy-btn bg-gradient-to-br from-blue-200 via-white to-purple-100"
          >
            <i class="fab fa-github text-lg"></i>
            <span class="text-xl mt-1">GitHub</span>
          </a>

          <a
            href="https://wa.me/6281358811732"
            target="_blank"
            class="dreamy-btn bg-gradient-to-br from-green-200 via-white to-pink-100"
          >
            <i class="fab fa-whatsapp text-lg"></i>
            <span class="text-xl mt-1">WhatsApp</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Dummy GIF berjalan -->
    <div class="absolute bottom-0 left-0 w-[100%] h-24 overflow-hidden z-0 pointer-events-none">
      <img
        src="/images/sanrio-happy.gif"
        alt="Walking GIF"
        class="absolute top-0 h-full w-auto animate-walk"
      />
    </div>
  </section>
</template>

<style scoped>
.y2k-id-card {
  background-image: linear-gradient(135deg, #ffd6ec, #e0cfff, #ffffff);
  border-radius: 1rem;
  font-family: 'VT323', monospace;
  position: relative;
}

.y2k-id-card::after {
  content: "HOTNESS PASS";
  position: absolute;
  top: -12px;
  left: 12px;
  background: #fff;
  padding: 0 0.5rem;
  font-size: 0.8rem;
  color: #ff2ca0;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 1px #000;
}

@keyframes walk {
  0% {
    left: -100px;
  }
  100% {
    left: 100%;
  }
}

.animate-walk {
  animation: walk 15s linear infinite;
}
</style>