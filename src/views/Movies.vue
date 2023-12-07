<template>
  <h1>Movies</h1>
  <div class="max-w-sm mx-auto" v-if="isLoading">
    <span class="text-5xl font-bold text-indigo-700">Loding Movies...</span>
  </div>
  <div class="grid grid-cols-6 gap-4" v-else>
    <MovieCard v-for="movie in moviesList" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MovieCard from "../components/MovieCard.vue";
const moviesList = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  const result = await fetch("http://localhost:3000/movies");
  const response = await result.json();
  moviesList.value = response;
  isLoading.value = false;
});
</script>

<style scoped>
</style>