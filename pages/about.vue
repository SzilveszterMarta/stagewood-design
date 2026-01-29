<template>
  <div>
    <TeamHero 
      title="Crafted by Musicians"
      subtitle="We're a team of rock musicians who found our rhythm in woodworking. Precision joinery meets stage precision. Handcrafted solid wood furniture from Szeged."
      :primary-link="{ url: '/woodworks', label: 'See Our Work' }"
      :secondary-link="{ url: '/contact', label: 'Get in Touch' }"
    />

    <section class="py-24">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-12">
            <div>
              <h2 class="text-4xl md:text-5xl font-black text-white mb-6">From Stage to Workshop</h2>
              <p class="text-xl text-slate-300 leading-relaxed">
                Our hands that gripped guitar necks now wield chisels. The same precision that nails solos crafts dovetails. We work with oak, ash, and walnut.
              </p>
            </div>
            <StatsGrid 
              :stats="[
                { value: '15+', label: 'Years Making Music' },
                { value: '50+', label: 'Wood Projects' },
                { value: '3', label: 'Core Musicians' }
              ]"
            />
          </div>
          <div class="aspect-[4/3] bg-gradient-to-br from-slate-700 to-emerald-900/50 rounded-3xl shadow-2xl border-4 border-slate-800/50 flex items-center justify-center">
            <div class="text-center p-12">
              <div class="w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 shadow-2xl"></div>
              <h3 class="text-2xl font-bold text-white mb-2">Team Photo</h3>
              <p class="text-slate-400">Replace with workshop photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-800/30">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-black text-center text-white mb-16">Our Materials</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <MaterialCard 
            title="Oak"
            description="Strength & timeless character. Perfect for heirloom furniture."
            color-class="from-amber-500 to-orange-600"
          />
          <MaterialCard 
            title="Ash"
            description="Light, strong, beautiful grain. Ideal for cutting boards."
            color-class="from-gray-400 to-slate-500"
          />
          <MaterialCard 
            title="Walnut"
            description="Rich chocolate tones. Luxury statement pieces."
            color-class="from-amber-700 to-brown-700"
          />
        </div>
      </div>
    </section>

    <CtaSection 
      title="Ready to Create?"
      subtitle="Whether it's custom furniture or restoration, let's craft something extraordinary together."
      :primary-button="{ url: '/woodworks', label: 'Explore Portfolio' }"
      :secondary-button="{ url: '/contact', label: 'Start Project' }"
    />
  </div>
</template>
