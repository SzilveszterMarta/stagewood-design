<template>
  <div>
    <Hero 
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
              <h2 class="text-4xl md:text-5xl text-secondary-light font-primary mb-6">From Stage to Workshop</h2>
              <p class="text-xl text-secondary-dark leading-relaxed">
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
          <div class="aspect-[4/3] bg-primary-light rounded-3xl shadow-2xl border-4 border-slate-600/50 flex items-center justify-center">
            <div class="text-center p-12">
              <div class="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl overflow-hidden">
                <img src="https://picsum.photos/200" alt="">
              </div>
              <h3 class="text-4xl font-primary text-secondary-light mb-2">Team Photo</h3>
              <p class="text-secondary-dark">
                Wood dust, guitar strings, late nights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl text-center text-secondary-light font-primary mb-16">Our Materials</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <MaterialCard 
            title="Oak"
            description="Strength & timeless character. Perfect for heirloom furniture."
            color-class="from-amber-500 to-orange-600"
            imgSrc="https://picsum.photos/200"
          />
          <MaterialCard 
            title="Ash"
            description="Light, strong, beautiful grain. Ideal for cutting boards."
            color-class="from-gray-400 to-slate-500"
            imgSrc="https://picsum.photos/200"
          />
          <MaterialCard 
            title="Walnut"
            description="Rich chocolate tones. Luxury statement pieces."
            color-class="from-amber-700 to-brown-700"
            imgSrc="https://picsum.photos/200"
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
