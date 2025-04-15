<template>
  <UCard class="h-full">
    <div class="flex flex-col h-full">
      <div class="mb-4">
        <UIcon name="fluent:comment-quote-16-regular" class="text-3xl text-primary opacity-20" />
        <p class="text-gray-600 dark:text-gray-400 italic">{{ text }}</p>
      </div>

      <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-4">
        <UAvatar :src="avatar" :alt="name" size="sm" />
        <div>
          <h4 class="font-medium">{{ name }}</h4>
          <p class="text-sm text-gray-500">{{ position }}</p>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>