<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">Not Found</h1>
      <ButtonAja @click="buka" />
    </div>
  </header>
  <modal />
</template>

<script setup>
import Modal from '@/components/Modal.vue'
import ButtonAja from '@/views/Buttons.vue'
</script>