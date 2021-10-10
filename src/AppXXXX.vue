<template lang='pug'>
.besar.m-16
    header.tw-bg-white.tw-shadow(v-if='$route.meta.title')
      .judul
        h1.tw-text-3xl.tw-font-bold.tw-leading-tight.tw-text-gray-900 {{ $route.meta.title }}
    main
      //- ModalAlt
      .coba
        .tombol
          ButtonAja
      router-view
</template>
<script setup>
  import ButtonAja from '@/views/Buttons.vue'
  // import ModalAlt from '@/components/ModalPug.vue'
</script>
