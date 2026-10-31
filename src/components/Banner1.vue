<script setup>
import { ref } from 'vue'

const banner = ref({
  src: new URL('../assets/Banner1.jpg', import.meta.url).href,
  alt: 'Carro prateado percorrendo uma estrada curva em meio à floresta'
})
</script>

<template>
  <section class="banner" aria-label="Destaque">
    <img class="banner__image" :src="banner.src" :alt="banner.alt" />
  </section>
</template>

<style scoped>
.banner {
  --banner-bg: #ffffff;

  width: 100%;
  background-color: var(--banner-bg);
  box-sizing: border-box;
}

/* A altura acompanha a largura (proporção 1440×593 da arte original),
   então a imagem aparece inteira em qualquer tela, sem "dar zoom" no carro. */
.banner__image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1440 / 593;
  object-fit: cover;
  object-position: center;
}

/* No celular a faixa ficaria muito baixa; aqui ela ganha altura mínima
   e as laterais da imagem são cortadas, mantendo o carro no centro. */
@media (max-width: 600px) {
  .banner__image {
    aspect-ratio: auto;
    height: 240px;
  }
}
</style>