<template>
  <header class="w-full flex flex-col items-center pt-6 pb-4 border-b border-gray-300">
    <img src="/src/assets/logo.svg" alt="Logo" class="h-48" />

    <nav class="flex gap-6 text-lg font-medium">
      <RouterLink
          to="/"
          class="hover:text-gray-900 transition"
          :class="{ 'border-b-2 border-black': $route.path === '/' }"
      >
        Home
      </RouterLink>
      <RouterLink
          to="/configurator"
          class="hover:text-gray-900 transition"
          :class="{ 'border-b-2 border-black': $route.path === '/configurator' }"
      >
        Configurator
      </RouterLink>
      <RouterLink
          to="/about"
          class="hover:text-gray-900 transition"
          :class="{ 'border-b-2 border-black': $route.path === '/about' }"
      >
        About
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
</script>
