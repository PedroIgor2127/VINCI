<script setup>
import { ref } from 'vue'

const cars = ref([
  {
    id: 1,
    nameLines: ['VINCI', 'MODEL V2'],
    image: new URL('../assets/Car1.png', import.meta.url).href,
    imageAlt: 'Vinci Model V2, SUV branca vista de trás',
    specs: [
      { label: 'Potência:', value: '300 Cavalos' },
      { label: 'Autonomia:', value: '500KM Por Carga' },
      { label: 'Peso:', value: '1.500 KG' },
      { label: 'Tecnologia:', value: 'GPS e Smartlink' }
    ],
    tagline: 'A SUV mais Robusta da Categoria',
    href: '#model-v2'
  },
  {
    id: 2,
    nameLines: ['VINCI', 'MODEL V1'],
    image: new URL('../assets/Car2.png', import.meta.url).href,
    imageAlt: 'Vinci Model V1, hatch vermelho',
    specs: [
      { label: 'Potência:', value: '300 Cavalos' },
      { label: 'Autonomia:', value: '500KM Por Carga' },
      { label: 'Peso:', value: '1.500 KG' },
      { label: 'Tecnologia:', value: 'GPS e Smartlink' }
    ],
    tagline: 'A SUV mais Robusta da Categoria',
    href: '#model-v1'
  }
])
</script>

<template>
  <section class="cars" aria-label="Modelos Vinci">
    <ul class="cars__list">
      <li v-for="car in cars" :key="car.id" class="cars__item">
        <article class="car">
          <header class="car__header">
            <h2 class="car__name">
              <span v-for="line in car.nameLines" :key="line">{{ line }}</span>
            </h2>

            <dl class="car__specs">
              <div
                v-for="spec in car.specs"
                :key="spec.label"
                class="car__spec"
              >
                <dt>{{ spec.label }}</dt>
                <dd>{{ spec.value }}</dd>
              </div>
            </dl>
          </header>

          <div class="car__image-wrapper">
            <img class="car__image" :src="car.image" :alt="car.imageAlt" />
          </div>

          <footer class="car__footer">
            <p class="car__tagline">{{ car.tagline }}</p>
            <a :href="car.href" class="car__link">CONHEÇA</a>
          </footer>
        </article>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* Importe a fonte Genos uma única vez, no index.html ou no CSS global:
   <link href="https://fonts.googleapis.com/css2?family=Genos:wght@300;400;500&display=swap" rel="stylesheet"> */

.cars {
  --cars-bg: #ffffff;
  --cars-text: #111111;
  --cars-muted: #9a9a9a;
  --cars-accent: #e4163a;

  width: 100%;
  padding: 40px 20px;
  background-color: var(--cars-bg);
  font-family: 'Genos', sans-serif;
  box-sizing: border-box;
}

.cars__list {
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.cars__item {
  flex: 1;
  min-width: 0;
}

.car {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 24px;
  color: var(--cars-text);
}

/* Topo: nome à esquerda, especificações à direita */
.car__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.car__name {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding-top: 32px;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.4em;
  line-height: 1.2;
}

.car__specs {
  margin: 0;
  font-size: 18px;
  line-height: 1.35;
  letter-spacing: 0.05em;
}

.car__spec {
  display: flex;
  gap: 24px;
}

.car__spec dt {
  min-width: 90px;
  color: var(--cars-text);
}

.car__spec dd {
  margin: 0;
  color: var(--cars-muted);
}

/* Imagem do carro */
.car__image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.car__image {
  display: block;
  width: 100%;
  max-width: 480px;
  height: auto;
}

/* Rodapé: descrição à esquerda, link à direita */
.car__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 20px;
  letter-spacing: 0.08em;
}

.car__tagline {
  margin: 0;
}

.car__link {
  color: var(--cars-text);
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s ease;
}

.car__link:hover,
.car__link:focus-visible {
  color: var(--cars-accent);
}

.car__link:focus-visible {
  outline: 2px solid var(--cars-accent);
  outline-offset: 4px;
}

@media (max-width: 900px) {
  .cars__list {
    flex-direction: column;
    gap: 64px;
  }
}

@media (max-width: 500px) {
  .car__header {
    flex-direction: column;
  }

  .car__name {
    padding-top: 0;
  }

  .car__footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>