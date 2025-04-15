<template>
  <div>
    <UContainer class="py-10">
      <UBreadcrumb :items="[{ label: 'Home', to: '/' }, { label: 'Testimonials' }]" />

      <div class="mt-10">
        <h2 class="text-4xl font-bold mb-8">Testimonials</h2>

        <UCard class="mb-8 p-6 bg-primary/5 border-primary/20">
          <p class="italic">
            These testimonials come from colleagues, clients, and managers I've had the pleasure of working with.
            I'm grateful for their kind words and the opportunities we've had to collaborate.
          </p>
        </UCard>

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
      </div>
    </UContainer>
  </div>
</template>

<script>
import TestimonialCard from '~/components/TestimonialCard.vue';
export default {
  name: 'TestimonialsPage',
  components: {TestimonialCard},
  data() {
    return {
      testimonials: [
        {
          name: 'Jane Doe',
          position: 'CTO at Example Corp',
          avatar: '/img/avatars/jane.jpg', // You'll need to add these images
          text: 'Working with [Your Name] was a pleasure. Their technical expertise and problem-solving abilities significantly improved our project outcomes. They consistently delivered high-quality code on time and were always willing to go the extra mile to ensure our product exceeded expectations.'
        },
        {
          name: 'John Smith',
          position: 'Project Manager at Tech Co',
          avatar: '/img/avatars/john.jpg',
          text: '[Your Name] consistently delivered high-quality work ahead of schedule. Their attention to detail and communication skills made them an invaluable team member. I was particularly impressed with their ability to translate complex technical concepts into terms our non-technical stakeholders could understand.'
        },
        {
          name: 'Emily Johnson',
          position: 'Senior Developer at Startup Inc',
          avatar: '/img/avatars/emily.jpg',
          text: "I had the pleasure of collaborating with [Your Name] on a challenging project with tight deadlines. Their expertise in Vue.js and problem-solving skills were instrumental to our success. They're not only technically proficient but also a great team player who elevates everyone around them."
        },
        {
          name: 'Michael Brown',
          position: 'Product Owner at Enterprise Ltd',
          avatar: '/img/avatars/michael.jpg',
          text: "[Your Name] has a rare combination of technical skills, creativity, and business acumen. They understood our users' needs and translated them into elegant, efficient code. Their work on our dashboard redesign increased user engagement by 40% and received overwhelmingly positive feedback."
        }
      ]
    }
  },
  head() {
    return {
      title: 'Testimonials - Your Name',
      meta: [
        { name: 'description', content: 'Reviews and recommendations from colleagues and clients' }
      ]
    }
  },
}
</script>