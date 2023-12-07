<template>
  <section class="bg-white m-6 p-4">
    <div class="container" v-if="isLoading">Is Loading ...</div>
    <div
      v-else
      class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row"
    >
      <div class="flex justify-center xl:w-1/2">
        <img
          :src="queryMovie.posterUrl"
          :alt="queryMovie.title"
          class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md"
        />
      </div>
      <div
        class="fex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0"
      >
        <h2 class="text-3xl font-bold tracking-light mb-2">
          {{ queryMovie.title }}
        </h2>
        <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md mb-2">{{
          queryMovie.year
        }}</span>
        <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md mb-2"
          >{{ queryMovie.runtime }} mins</span
        >
        <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md mb-2">
          <b> Director:</b> {{ queryMovie.director }}</span
        >

        <div class="mt-3 mb-4">
          {{ queryMovie.plot }}
        </div>
        <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md mb-2 mt-5">
          <b>Casts:</b> {{ queryMovie.actors }}</span
        >
        <div class="mt-6 sm:-mx-2">
          <div
            class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2"
          >
            <button
              @click="$router.back()"
              class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium"
            >
              <span class="mx-2"> Go Back</span>
            </button>
          </div>

          <div
            class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2"
          >
            <a
              href="#"
              class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium"
            >
              <span class="mx-2">Download </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const queryMovie = ref({});
const isLoading = ref(true);
const router = useRouter();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

onMounted(async () => {
  const result = await fetch(
    `http://localhost:3000/movies/${parseInt(props.id)}`
  );
  const response = await result.json();
  if (result.status === 404) {
    router.push({ name: "404" });
  }
  queryMovie.value = response;
  isLoading.value = false;
});
</script>

<style scoped>
</style>