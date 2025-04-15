<template>
  <UCard :ui="{ base: `${color} border-0` }" class="transition-transform hover:-translate-y-1">
    <div class="flex flex-col items-center p-4 text-center">
      <UIcon :name="icon" class="text-4xl mb-3" />
      <h3 class="font-medium">{{ name }}</h3>
    </div>
  </UCard>
</template>

<script>
export default {
  name: 'TechStackCard',
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>