<template>
  <div class="bg-slate-900 text-white">
    <header class="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
      <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-black bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Stagewood
        </NuxtLink>
        <div class="flex space-x-8">
          <NuxtLink to="/woodworks" class="hover:text-emerald-400 transition-colors">Woodworks</NuxtLink>
          <NuxtLink to="/music" class="hover:text-emerald-400 transition-colors">Music</NuxtLink>
          <NuxtLink to="/about" class="hover:text-emerald-400 transition-colors">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-emerald-400 transition-colors">Contact</NuxtLink>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-6 py-12 min-h-[60vh]">
      <slot />
    </main>

    <footer class="bg-slate-800/50 border-t border-slate-700 py-8 mt-auto">
      <div class="container mx-auto px-6 text-center text-slate-400 text-sm">
        © 2026 Stagewood Design. Szeged, Hungary.
      </div>
    </footer>
  </div>
</template>
