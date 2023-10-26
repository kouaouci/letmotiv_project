<script setup>
import { ref, onMounted } from "vue";

const femaleHumanCharacters = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?gender=female&species=human"
    );
    if (response.ok) {
      const data = await response.json();
      femaleHumanCharacters.value = data.results;
    } else {
      console.error("Failed to fetch data from the API.");
    }
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
});
</script>

<template>
  <main class="container mx-auto mt-10"></main>
  <div class="flex-1">
    <h1 class="text-teal-500 text-4xl text-center font-medium">{{ msg }}</h1>
    <div class="mt-8">
      <h2 class="text-2xl font-semibold">
        Liste des personnages de sexe féminin et de l'espèce humaine :
      </h2>
      <div class="flex flex-wrap justify-center">
        <div
          v-for="character in femaleHumanCharacters"
          :key="character.id"
          class="p-4 m-4 border rounded-lg shadow-md"
        >
          <img
            :src="character.image"
            :alt="character.name"
            class="w-32 h-32 object-cover rounded-full mx-auto"
          />
          <h3 class="text-lg font-semibold text-center mt-2">
            {{ character.name }}
          </h3>
          <p class="text-center">{{ character.species }}</p>
          <p class="text-center">
            Status:
            {{ character.status === "Alive" ? "Vivante" : character.status }}
          </p>
          <p class="text-center">Location: {{ character.location.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
