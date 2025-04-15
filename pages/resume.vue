<template>
  <div>
    <div class="container mx-auto px-4 py-10">
      <!-- Simple breadcrumb -->
      <div class="mb-8">
        <span class="text-gray-500">
          <a href="/" class="hover:underline">Home</a> / Resume
        </span>
      </div>

      <div class="p-6 mb-10">
        <div class="flex items-center justify-between w-full">
          <h2 class="text-4xl font-bold">Resume & Recommendations</h2>
          <a href="/files/Full-Stack-Dev-Maksym-Tymofeiev.pdf" target="_blank" download
             class="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition">
            Download Resume
          </a>
        </div>
      </div>

      <div class="pdf-container mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 overflow-hidden">
        <iframe
            src="/files/Full-Stack-Dev-Maksym-Tymofeiev.pdf"
            class="w-full h-[800px] border-0 rounded-lg pdf-iframe"
            title="Resume PDF"
        ></iframe>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumePage',
  data() {
    return {
      experiences: [
        {
          title: 'Senior Developer at Company Name',
          description: 'Led development of key features and mentored junior developers.',
          time: '2020 - Present'
        },
        {
          title: 'Developer at Previous Company',
          description: 'Worked on frontend development using Vue.js and TypeScript.',
          time: '2017 - 2020'
        },
        {
          title: 'Junior Developer at First Company',
          description: 'Started my career building web applications.',
          time: '2015 - 2017'
        }
      ]
    }
  }
}
</script>

<style scoped>
.pdf-container {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.pdf-iframe {
  background-color: white;
  transition: all 0.3s ease;
}

/* Improve iframe appearance in dark mode */
@media (prefers-color-scheme: dark) {
  .pdf-iframe {
    opacity: 0.95;
  }
}

/* Add responsive height adjustments */
@media (max-width: 768px) {
  .pdf-iframe {
    height: 600px;
  }
}

@media (max-width: 480px) {
  .pdf-iframe {
    height: 500px;
  }
}
</style>