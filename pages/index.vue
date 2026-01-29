<template>
  <div>
    <!-- Custom Hero -->
    <section class="relative overflow-hidden">
      <div class="relative container mx-auto px-6 py-32">
        <div class="max-w-4xl animate-fade-up">
          <h1
            class="text-5xl md:text-7xl font-black text-white leading-tight mb-8"
          >
            We Make Things<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Out of Wood & Sound
            </span>
          </h1>

          <p class="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mb-12">
            This is a personal project about slowing down and building things by hand.
            Solid wood furniture, original music, and everything in between —
            made without rushing, trends, or shortcuts.
          </p>

          <div class="flex flex-wrap gap-6">
            <NuxtLink
              to="/woodworks"
              class="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-2xl transition transform hover:scale-[1.03]"
            >
              Woodworks
              <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </NuxtLink>

            <NuxtLink
              to="/music"
              class="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-slate-800 border-2 border-slate-700 shadow-xl transition transform hover:scale-[1.03] hover:border-slate-500"
            >
              Music
              <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-12">
            <div>
              <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                Two Crafts. One Mindset.
              </h2>
              <p class="text-xl text-slate-300 leading-relaxed">
                We approach woodworking the same way we approach music: rhythm, balance,
                and precision. From solid wood furniture to original compositions,
                everything we make is intentional and hands-on.
              </p>
            </div>

            <!-- Links -->
            <div class="flex flex-wrap gap-6">
              <NuxtLink
                to="/woodworks"
                class="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-xl hover:scale-[1.02] transition"
              >
                Explore Woodworks
              </NuxtLink>

              <NuxtLink
                to="/music"
                class="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-slate-800 border-2 border-slate-700 hover:border-slate-500 transition"
              >
                Listen to Music
              </NuxtLink>
            </div>
          </div>

          <!-- Visual Placeholder -->
          <div class="aspect-[4/3] bg-gradient-to-br from-slate-700 to-emerald-900/50 rounded-3xl shadow-2xl border-4 border-slate-800/50 flex items-center justify-center">
            <div class="text-center p-12">
              <div class="w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 shadow-2xl"></div>
              <h3 class="text-2xl font-bold text-white mb-2">Workshop & Studio</h3>
              <p class="text-slate-400">
                Wood dust, guitar strings, late nights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Focus Areas -->
    <section class="py-24 bg-slate-800/30">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-black text-center text-white mb-16">
          What We Do
        </h2>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div class="p-10 rounded-3xl bg-slate-900 border-2 border-slate-800 shadow-xl">
            <h3 class="text-3xl font-bold text-white mb-4">Woodworks</h3>
            <p class="text-slate-300 text-lg leading-relaxed mb-6">
              Solid wood furniture, cutting boards, custom pieces and restorations.
              Built from oak, ash, walnut — made to last decades.
            </p>
            <NuxtLink
              to="/woodworks"
              class="text-emerald-400 font-bold hover:text-emerald-300 transition"
            >
              View wood portfolio →
            </NuxtLink>
          </div>

          <div class="p-10 rounded-3xl bg-slate-900 border-2 border-slate-800 shadow-xl">
            <h3 class="text-3xl font-bold text-white mb-4">Music</h3>
            <p class="text-slate-300 text-lg leading-relaxed mb-6">
              Original rock and instrumental projects. Songs written the same way
              our furniture is built — carefully, honestly, and without shortcuts.
            </p>
            <NuxtLink
              to="/music"
              class="text-emerald-400 font-bold hover:text-emerald-300 transition"
            >
              Discover the music →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaSection
      title="Built by Hand. Driven by Passion."
      subtitle="Whether you're looking for custom woodwork or want to explore our music, you're in the right place."
      :primary-button="{ url: '/woodworks', label: 'Start with Wood' }"
      :secondary-button="{ url: '/music', label: 'Go to Music' }"
    />
  </div>
</template>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.9s ease-out forwards;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
}

.animate-float {
  animation: float 12s ease-in-out infinite;
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}
</style>
