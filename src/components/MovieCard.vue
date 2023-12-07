<template>
  <div class="max-w-sm bg-white rouded-lg border border-gray-200 shadow-md">
    <div class="flex justify-center pt-3">
      <img class="rounded-t-lg" :src="movie.posterUrl" :alt="movie.title" />
    </div>
    <div class="p-5">
      <RouterLink :to="{ name: 'Movie', params: { id: movie.id } }"
        ><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ movie.title }}
        </h5></RouterLink
      >
      <span class="mr-4 bg-gray-800 p-1 text-white">{{ movie.year }}</span>
      <span>{{ movie.runtime }} mins</span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  movie: Object,
});
</script>

<style lang="scss" scoped>
</style>