<template>
  <section class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-row">
      <div class="feature-card bg-gradient-to-br from-slate-950 to-teal-950
                  m-4 p-8 justify-between rounded-lg shadow-lg w-full flex flex-col items-center justify-center"
           v-for="(feature, index) in data" :key="index">
        <div class="relative inline-block">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#7F5AF0] to-[#2cb67d] text-5xl font-bold">
            {{ feature.title }}
          </span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#7F5AF0] to-[#2cb67d]"></span>
        </div>
        <span class="text-base mt-2 uppercase text-gray-400">{{feature.subTitle}}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'KeyFeaturesSection',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>