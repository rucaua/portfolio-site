<template>
  <div>
    <HeroSection />
    <KeyFeaturesSection :data="keyFeaturesData" />
    <TechStackSection />
    <TestimonialsSection />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import TechStackSection from '~/components/TechStackSection.vue';
import TestimonialsSection from '~/components/TestimonialsSection.vue';
import KeyFeaturesSection from "~/components/KeyFeaturesSection.vue";
export default {
  name: 'IndexPage',
  setup() {
    const runtimeConfig = useRuntimeConfig()
    return {keyFeaturesData: runtimeConfig.public.keyFeatures}
  },
  components: {
    TestimonialsSection,
    TechStackSection,
    HeroSection,
    KeyFeaturesSection
  },
  head() {
    return {
      title: 'Your Name - Portfolio',
      meta: [
        { name: 'description', content: 'Professional portfolio showcasing my work, skills, and experience' }
      ]
    }
  }
}
</script>