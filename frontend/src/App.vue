<template>
  <div class="flex justify-center bg-yellow-100/40 min-h-screen">
    <div class="text-black w-3/4">
      <Header />
      <main class="py-10 flex items-center justify-center">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>
