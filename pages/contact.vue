<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-24">
      <div class="container mx-auto px-6 text-center">
        <GradientTitle label="Get In Touch" />

        <p class="text-xl md:text-2xl text-secondary-dark max-w-2xl mx-auto leading-relaxed mb-16">
          Ready for custom furniture? Need restoration work?  
          Or just want to talk wood, sound, and ideas — let’s connect.
        </p>
      </div>

      <!-- Content -->
      <section class="pb-32">
        <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <!-- Contact form -->
          <div class="bg-primary-light rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 class="text-2xl font-black text-secondary-light mb-8">
              Send a message
            </h2>

            <form class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-secondary-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  class="w-full rounded-xl bg-primary-dark border border-secondary-dark/20 px-4 py-3 text-secondary-light focus:outline-none focus:ring-2 focus:ring-highlight"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-secondary-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  class="w-full rounded-xl bg-primary-dark border border-secondary-dark/20 px-4 py-3 text-secondary-light focus:outline-none focus:ring-2 focus:ring-highlight"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-secondary-dark mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  class="w-full rounded-xl bg-primary-dark border border-secondary-dark/20 px-4 py-3 text-secondary-light focus:outline-none focus:ring-2 focus:ring-highlight resize-none"
                />
              </div>

              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-full bg-highlight px-8 py-3 font-semibold text-primary-dark hover:opacity-90 transition"
              >
                Send message
              </button>
            </form>
          </div>

          <!-- Contact info cards -->
          <div class="grid sm:grid-cols-1 gap-8">
            <ContactCard
              title="Email"
              value="hello@stagewood.design"
              hint="Usually replies within 24h"
              icon="mail"
              href="mailto:hello@stagewood.design"
            />

            <ContactCard
              title="Phone"
              value="+36 30 123 4567"
              hint="Weekdays, 9–17"
              icon="phone"
              href="tel:+36301234567"
            />

            <ContactCard
              title="Location"
              value="Szeged, Hungary"
              hint="On-site & remote projects"
              icon="map"
              href="https://maps.google.com/?q=Szeged"
            />

            <ContactCard
              title="Social"
              value="@stagewood"
              hint="Behind the scenes & updates"
              icon="music"
              href="https://instagram.com"
            />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
