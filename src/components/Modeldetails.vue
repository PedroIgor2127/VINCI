<script setup>
import { ref } from 'vue'

/* Os pontos vermelhos (A–H) agora fazem parte da imagem Carpoints.png.
   A legenda abaixo segue a mesma ordem das letras da imagem. */
const legend = ref([
  { id: 'A', label: 'RODAS DE LIGA LEVE' },
  { id: 'B', label: 'RETROVISORES INTELIGENTES' },
  { id: 'C', label: 'RECONHECIMENTO DIGITAL' },
  { id: 'D', label: 'SENSOR DE PROXIMIDADE' },
  { id: 'E', label: 'DESIGN INTELIGENTE' },
  { id: 'F', label: 'ANTENAS 5G' },
  { id: 'G', label: 'FAROIS ULTRA VIOLETA' },
  { id: 'H', label: 'CAMERA DE ESTACIONAMENTO' }
])
</script>

<template>
  <section class="details" aria-labelledby="details-title">
    <header class="details__header">
      <div class="details__intro">
        <h2 id="details-title" class="details__title">VINCI MODEL V2</h2>
        <p class="details__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since 1966,
        </p>
      </div>

      <ul class="details__legend">
        <li v-for="item in legend" :key="item.id" class="details__legend-item">
          <span class="details__badge" aria-hidden="true">{{ item.id }}</span>
          <span class="details__label">{{ item.label }}</span>
        </li>
      </ul>
    </header>

    <div class="details__stage">
      <img
        class="details__image"
        src="../assets/Carpoints.png"
        alt="Vinci Model V2, sedan branco visto de lado, com os pontos de destaque de A a H"
      />
    </div>
  </section>
</template>

<style scoped>
/* Importe as fontes uma única vez, no index.html ou no CSS global:
   <link href="https://fonts.googleapis.com/css2?family=Genos:wght@300;400;500&family=Host+Grotesk:wght@300;400&display=swap" rel="stylesheet"> */

.details {
  --details-bg: #ffffff;
  --details-text: #111111;
  --details-muted: #979797;
  --details-accent: #e4163a;

  width: 100%;
  padding: 60px 52px 80px;
  background-color: var(--details-bg);
  color: var(--details-text);
  box-sizing: border-box;
}

/* Título e texto à esquerda, legenda à direita */
.details__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;
  padding-top: 60px;
  position: relative;
  z-index: 2; /* fica acima da imagem, que tem fundo branco */
}

.details__intro {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 440px;
}

.details__title {
  margin: 0;
  font-family: 'Genos', sans-serif;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1;
}

.details__text {
  margin: 0;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 16px;
  line-height: 1.9;
  color: var(--details-muted);
}

/* Legenda em duas colunas (A–D e E–H) */
.details__legend {
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-auto-flow: column;
  column-gap: 40px;
  row-gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.details__legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Genos', sans-serif;
  font-size: 14px;
  letter-spacing: 0.08em;
  transition: color 0.2s ease;
}

.details__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--details-text);
  color: #ffffff;
  font-size: 11px;
  line-height: 1;
  transition: background-color 0.2s ease;
}

.details__legend-item:hover {
  color: var(--details-accent);
}

.details__legend-item:hover .details__badge {
  background-color: var(--details-accent);
}

/* Imagem do carro (já com os pontos A–H) */
.details__stage {
  width: 100%;
  max-width: 980px;
  /* A imagem tem bastante espaço branco no topo; o valor negativo aproxima o carro dos textos.
     Aumente (ex.: -60px) para afastar ou diminua (ex.: -140px) para aproximar mais. */
  margin: -100px auto 0;
}

.details__image {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 1000px) {
  .details__header {
    flex-direction: column;
  }

  .details__intro {
    max-width: none;
  }

  .details__stage {
    margin-top: 0;
  }
}

@media (max-width: 600px) {
  .details {
    padding: 40px 20px 56px;
  }

  .details__header {
    padding-top: 32px;
  }

  .details__title {
    font-size: 28px;
  }

  .details__legend {
    grid-template-rows: none;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
  }
}
</style>