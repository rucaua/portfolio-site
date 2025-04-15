<template>
  <section class="pt-20 md:pt-32">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div class="mb-8">
            <h2 class="text-9xl md:text-9xl font-bold leading-tight mb-6">Welcome to My Portfolio</h2>
            <div class="flex flex-wrap gap-4">
              <UButton
                  to="/resume"
                  color="primary"
                  size="lg"
                  trailing-icon="i-heroicons-arrow-right"
              >
                View My Resume
              </UButton>

              <UButton
                  to="/#chat"
                  color="gray"
                  variant="soft"
                  size="lg"
                  trailing-icon="i-heroicons-chat-bubble-left-right"
              >
                Chat with My AI
              </UButton>
            </div>
          </div>
        </div>

        <div class="relative">
          <AIChat />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script>
import AIChat from "./AIChat.vue";

export default {
  name: 'SectionsHero',
  components: {AIChat}
}
</script>