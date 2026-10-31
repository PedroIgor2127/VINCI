<script setup>
import { ref } from 'vue'

const banner = ref({
  src: new URL('../assets/Banner3.jpg', import.meta.url).href,
  alt: 'SUV branca percorrendo uma estrada ao pôr do sol'
})
</script>

<template>
  <section class="banner" aria-label="Destaque">
    <figure class="banner__figure">
      <img class="banner__image" :src="banner.src" :alt="banner.alt" />
    </figure>
  </section>
</template>

<style scoped>
.banner {
  --banner-bg: #ffffff;

  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 40px;
  background-color: var(--banner-bg);
  box-sizing: border-box;
}

.banner__figure {
  flex: 1;
  max-width: 1360px;
  margin: 0;
}

.banner__image {
  display: block;
  width: 100%;
  aspect-ratio: 1360 / 520;
  height: auto;
  object-fit: cover;
  object-position: right center;
  border-radius: 12px;
}

@media (max-width: 700px) {
  .banner {
    padding: 0 20px;
  }

  .banner__image {
    aspect-ratio: 4 / 3;
    border-radius: 6px;
  }
}
</style>