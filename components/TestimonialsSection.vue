<template>
  <section class="py-20">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">What People Say</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Feedback from colleagues and clients I've had the pleasure to work with.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :name="testimonial.name"
            :position="testimonial.position"
            :avatar="testimonial.avatar"
            :text="testimonial.text"
        />
      </div>

      <div class="text-center mt-12">
        <UButton
            to="/testimonials"
            color="primary"
            variant="outline"
            trailing-icon="i-heroicons-arrow-right"
        >
          View All Testimonials
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

<script>
import TestimonialCard from "~/components/TestimonialCard.vue";
export default {
  name: 'TestimonialsSection',
  components: {TestimonialCard},
  data() {
    return {
      testimonials: [
        {
          name: 'Jane Doe',
          position: 'CTO at Example Corp',
          avatar: '/avatars/jane.webp',
          text: 'Working with [Your Name] was a pleasure. Their technical expertise and problem-solving abilities significantly improved our project outcomes.'
        },
        {
          name: 'John Smith',
          position: 'Project Manager at Tech Co',
          avatar: '/avatars/jane.webpg',
          text: '[Your Name] consistently delivered high-quality work ahead of schedule. Their attention to detail and communication skills made them an invaluable team member.'
        }
      ]
    }
  }
}
</script>