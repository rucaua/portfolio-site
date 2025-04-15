<template>
  <div class="min-h-screen flex flex-col">
    <!-- Site Header -->
    <header class="border-b py-4">
      <UContainer>
        <div class="flex items-center justify-between">
          <div>
            <!-- Logo/Brand -->
            <NuxtLink to="/" class="font-bold text-xl"><h1>{{title}}</h1></NuxtLink>
          </div>

          <div class="flex items-center">
            <!-- Navigation -->
            <nav class="hidden md:block">
              <ul class="flex gap-4">
                <li>
                  <NuxtLink to="/" class="px-3 py-2 hover:text-primary transition">Home</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/tech-stack" class="px-3 py-2 hover:text-primary transition">Tech Stack</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/resume" class="px-3 py-2 hover:text-primary transition">Resume</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/testimonials" class="px-3 py-2 hover:text-primary transition">Testimonials</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/#chat" class="px-3 py-2 hover:text-primary transition">AI Chat</NuxtLink>
                </li>
              </ul>
            </nav>

            <!-- Mobile menu button for small screens -->
            <UButton
                variant="ghost"
                icon="i-heroicons-bars-3"
                class="md:hidden ml-2"
                @click="isMenuOpen = !isMenuOpen"
            />

            <!-- Correct Color mode switch component -->
            <ClientOnly>

              <button
                  class="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  @click="toggleColorMode"
                  aria-label="Toggle dark/light mode"
              >
                <span v-if="$colorMode.value === 'dark'" class="block w-5 h-5">🌙</span>
                <span v-else class="block w-5 h-5">☀️</span>
              </button>
            </ClientOnly>

          </div>
        </div>

        <!-- Mobile menu (hidden by default) -->
        <div v-if="isMenuOpen" class="md:hidden py-4">
          <ul class="flex flex-col gap-2">
            <li>
              <NuxtLink to="/" class="block px-3 py-2 hover:text-primary transition">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/tech-stack" class="block px-3 py-2 hover:text-primary transition">Tech Stack</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/resume" class="block px-3 py-2 hover:text-primary transition">Resume</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/testimonials" class="block px-3 py-2 hover:text-primary transition">Testimonials</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ai-chat" class="block px-3 py-2 hover:text-primary transition">AI Chat</NuxtLink>
            </li>
          </ul>
        </div>
      </UContainer>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot/>
    </main>

    <!-- Site Footer -->
    <footer class="border-t py-8">
      <UContainer>
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>© {{ new Date().getFullYear() }} Your Name</p>
          </div>

          <div class="flex gap-4 mt-4 md:mt-0">
            <UButton
                variant="ghost"
                icon="i-simple-icons-github"
                to="https://github.com/yourusername"
                target="_blank"
                aria-label="GitHub"
            />
            <UButton
                variant="ghost"
                icon="i-simple-icons-linkedin"
                to="https://linkedin.com/in/yourusername"
                target="_blank"
                aria-label="LinkedIn"
            />
            <UButton
                variant="ghost"
                icon="i-simple-icons-twitter"
                to="https://twitter.com/yourusername"
                target="_blank"
                aria-label="Twitter"
            />
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',
  setup() {
    const runtimeConfig = useRuntimeConfig()
    return {title: runtimeConfig.public.fullName}
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleColorMode() {
      this.$colorMode.preference =
          this.$colorMode.value === 'dark' ? 'light' : 'dark'
    }
  }

}
</script>