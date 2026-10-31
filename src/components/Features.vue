<script setup>
import { ref } from 'vue'

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"

const features = ref([
  {
    id: 1,
    title: 'RECARGA RAPIDA',
    description,
    image: new URL('../assets/RECARGA RAPIDA.jpg', import.meta.url).href,
    imageAlt: 'Mulher usando o celular enquanto o carro elétrico carrega'
  },
  {
    id: 2,
    title: 'PAINEL DE INSTRUMENTOS',
    description,
    image: new URL('../assets/PAINEL DE INSTRUMENTOS.jpg', import.meta.url).href,
    imageAlt: 'Painel de instrumentos digital com mapa de navegação'
  },
  {
    id: 3,
    title: 'PONTOS DE RECARGA',
    description,
    image: new URL('../assets/PONTOS DE RECARGA.jpg', import.meta.url).href,
    imageAlt: 'Conector de recarga sendo encaixado no carro'
  },
  {
    id: 4,
    title: 'DESIGNER PREMIADO',
    description,
    image: new URL('../assets/DESIGNER PREMIADO.jpg', import.meta.url).href,
    imageAlt: 'Interior do carro visto dos bancos de trás'
  }
])
</script>

<template>
  <section class="features" aria-label="Diferenciais Vinci">
    <ul class="features__list">
      <li v-for="feature in features" :key="feature.id" class="features__item">
        <article class="feature">
          <div class="feature__text">
            <h2 class="feature__title">{{ feature.title }}</h2>
            <p class="feature__description">{{ feature.description }}</p>
          </div>

          <div class="feature__media">
            <img
              class="feature__image"
              :src="feature.image"
              :alt="feature.imageAlt"
            />
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* Importe as fontes uma única vez, no index.html ou no CSS global:
   <link href="https://fonts.googleapis.com/css2?family=Genos:wght@400;500&family=Host+Grotesk:wght@400;500&display=swap" rel="stylesheet"> */

.features {
  --features-bg: #ffffff;
  --features-text: #111111;
  --features-muted: #979797;
  --features-border: #e6e6e6;
  --features-accent: #e4163a;

  width: 100%;
  padding-top: 80px;
  background-color: var(--features-bg);
  box-sizing: border-box;
}

.features__list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.features__item {
  flex: 1;
  min-width: 0;
}

.features__item + .features__item {
  border-left: 1px solid var(--features-border);
}

.feature {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature__text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 28px 24px;
}

.feature__title {
  margin: 0;
  font-family: 'Genos', sans-serif;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 1.1;
  color: var(--features-text);
  transition: color 0.2s ease;
}

.feature__description {
  margin: 0;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--features-muted);
}

.feature__media {
  margin-top: auto;
  overflow: hidden;
}

.feature__image {
  display: block;
  width: 100%;
  aspect-ratio: 9 / 7;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.feature:hover .feature__title {
  color: var(--features-accent);
}

.feature:hover .feature__image {
  transform: scale(1.05);
}

@media (max-width: 1000px) {
  .features__list {
    flex-wrap: wrap;
  }

  .features__item {
    flex: 0 0 50%;
    border-left: none !important;
    border-top: 1px solid var(--features-border);
  }

  .features__item:nth-child(even) {
    border-left: 1px solid var(--features-border) !important;
  }

  .features__item:nth-child(-n + 2) {
    border-top: none;
  }
}

@media (max-width: 600px) {
  .features {
    padding-top: 48px;
  }

  .features__item {
    flex: 0 0 100%;
    border-left: none !important;
  }

  .features__item:nth-child(2) {
    border-top: 1px solid var(--features-border);
  }

  .feature__text {
    padding: 20px;
  }
}
</style>