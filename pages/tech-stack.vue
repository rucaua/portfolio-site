<template>
  <div>
    <UContainer class="py-10">
      <UBreadcrumb :items="[{ label: 'Home', to: '/' }, { label: 'Tech Stack' }]" />

      <div class="mt-10">
        <h2 class="text-4xl font-bold mb-8">My Tech Stack</h2>

        <div class="space-y-16">
          <div v-for="(category, index) in techCategories" :key="index">
            <h3 class="text-2xl font-bold mb-6">{{ category.name }}</h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <UCard v-for="tech in category.techs" :key="tech.name" class="h-full">
                <div class="flex flex-col h-full">
                  <div class="flex items-center mb-4">
                    <UIcon :name="tech.icon" class="text-3xl mr-3" :class="tech.iconClass" />
                    <h4 class="text-xl font-semibold">{{ tech.name }}</h4>
                  </div>

                  <p class="text-gray-600 dark:text-gray-400 mb-4">{{ tech.description }}</p>

                  <div class="mt-auto">
                    <UBadge v-if="tech.experienceLevel" color="primary" variant="soft">
                      {{ tech.experienceLevel }}
                    </UBadge>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script>
export default {
  name: 'TechStackPage',
  head() {
    return {
      title: 'Tech Stack - Your Name',
      meta: [
        { name: 'description', content: 'Technologies and tools I use in my development work' }
      ]
    }
  },
  data() {
    return {
      techCategories: [
        {
          name: 'Frontend Development',
          techs: [
            {
              name: 'Vue.js',
              icon: 'i-simple-icons-vuedotjs',
              iconClass: 'text-green-500',
              description: 'My primary frontend framework. Used it to build interactive user interfaces and single-page applications.',
              experienceLevel: 'Expert'
            },
            {
              name: 'TypeScript',
              icon: 'i-simple-icons-typescript',
              iconClass: 'text-blue-500',
              description: 'I use TypeScript for all my projects to ensure type safety and better developer experience.',
              experienceLevel: 'Advanced'
            },
            {
              name: 'Nuxt',
              icon: 'i-simple-icons-nuxtdotjs',
              iconClass: 'text-emerald-500',
              description: 'My preferred Vue framework for building SEO-friendly and performant applications.',
              experienceLevel: 'Advanced'
            },
            {
              name: 'Tailwind CSS',
              icon: 'i-simple-icons-tailwindcss',
              iconClass: 'text-teal-500',
              description: 'My go-to utility-first CSS framework for designing responsive interfaces.',
              experienceLevel: 'Expert'
            }
          ]
        },
        {
          name: 'Backend Development',
          techs: [
            {
              name: 'Node.js',
              icon: 'i-simple-icons-nodedotjs',
              iconClass: 'text-green-600',
              description: 'Used for building scalable server-side applications and APIs.',
              experienceLevel: 'Advanced'
            },
            {
              name: 'Express',
              icon: 'i-simple-icons-express',
              iconClass: 'text-gray-600',
              description: 'Minimal and flexible Node.js web application framework.',
              experienceLevel: 'Advanced'
            },
            {
              name: 'MongoDB',
              icon: 'i-simple-icons-mongodb',
              iconClass: 'text-green-500',
              description: 'NoSQL database I use for flexible data models and faster development.',
              experienceLevel: 'Intermediate'
            },
            {
              name: 'PostgreSQL',
              icon: 'i-simple-icons-postgresql',
              iconClass: 'text-blue-600',
              description: 'Relational database of choice for complex data relationships.',
              experienceLevel: 'Intermediate'
            }
          ]
        },
        {
          name: 'DevOps & Cloud',
          techs: [
            {
              name: 'AWS',
              icon: 'i-simple-icons-amazonaws',
              iconClass: 'text-orange-500',
              description: 'Experience with various AWS services including EC2, S3, Lambda, and more.',
              experienceLevel: 'Intermediate'
            },
            {
              name: 'Docker',
              icon: 'i-simple-icons-docker',
              iconClass: 'text-blue-500',
              description: 'Used for creating consistent development and production environments.',
              experienceLevel: 'Intermediate'
            },
            {
              name: 'GitHub Actions',
              icon: 'i-simple-icons-githubactions',
              iconClass: 'text-blue-600',
              description: 'My CI/CD tool of choice for automating workflows and deployments.',
              experienceLevel: 'Advanced'
            },
            {
              name: 'Netlify',
              icon: 'i-simple-icons-netlify',
              iconClass: 'text-teal-500',
              description: 'Platform for deploying and hosting JAMstack projects.',
              experienceLevel: 'Advanced'
            }
          ]
        }
      ]
    }
  }
}
</script>