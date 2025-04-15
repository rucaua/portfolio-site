<template>
  <section class="py-20">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">My Tech Stack</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          These are the technologies I've worked with and mastered throughout my career.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <TechStackCard
            v-for="tech in techStack"
            :key="tech.name"
            :name="tech.name"
            :icon="tech.icon"
            :color="tech.color"
        />
      </div>

      <div class="text-center mt-12">
        <UButton
            to="/tech-stack"
            color="primary"
            trailing-icon="i-heroicons-arrow-right"
        >
          View Full Tech Stack
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

<script>
import TechStackCard from "~/components/TechStackCard.vue";
export default {
  name: 'TechStackSection',
  components: {TechStackCard},
  data() {
    return {
      techStack: [
        {
          name: 'Vue.js',
          icon: 'i-simple-icons-vuedotjs',
          color: 'bg-green-50 dark:bg-green-900/20'
        },
        {
          name: 'TypeScript',
          icon: 'i-simple-icons-typescript',
          color: 'bg-blue-50 dark:bg-blue-900/20'
        },
        {
          name: 'Nuxt',
          icon: 'i-simple-icons-nuxtdotjs',
          color: 'bg-emerald-50 dark:bg-emerald-900/20'
        },
        {
          name: 'AWS',
          icon: 'i-simple-icons-amazonaws',
          color: 'bg-orange-50 dark:bg-orange-900/20'
        }
        // Add more tech stack items as needed
      ]
    }
  }
}
</script>