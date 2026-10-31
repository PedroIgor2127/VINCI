<script setup>
import { ref } from 'vue'
import chevronIcon from '../assets/Vector FAQ.svg'

const answer =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966."

const questions = ref([
  { id: 1, question: 'QUAL É A VIDA ÚTIL DE UM CARRO ELÉTRICO?', answer },
  {
    id: 2,
    question: 'QUAL É A DIFERENÇA ENTRE UM CARRO ELÉTRICO E UM HÍBRIDO?',
    answer
  },
  {
    id: 3,
    question: 'QUAIS DOCUMENTOS SÃO NECESSÁRIOS PARA COMPRAR UM VEÍCULO?',
    answer
  },
  {
    id: 4,
    question: 'O QUE ACONTECE SE A BATERIA ACABAR DURANTE UMA VIAGEM?',
    answer
  },
  {
    id: 5,
    question: 'É SEGURO DIRIGIR UM CARRO ELÉTRICO NA CHUVA?',
    answer
  }
])

const openId = ref(null)

function toggle(id) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <section class="faq" aria-labelledby="faq-title">
    <header class="faq__header">
      <h2 id="faq-title" class="faq__title">FAQ</h2>
      <p class="faq__subtitle">PERGUNTAS FREQUENTES</p>
    </header>

    <ul class="faq__list">
      <li
        v-for="item in questions"
        :key="item.id"
        class="faq__item"
        :class="{ 'is-open': openId === item.id }"
      >
        <h3 class="faq__heading">
          <button
            type="button"
            class="faq__question"
            :id="`faq-question-${item.id}`"
            :aria-expanded="openId === item.id"
            :aria-controls="`faq-answer-${item.id}`"
            @click="toggle(item.id)"
          >
            <span class="faq__question-text">{{ item.question }}</span>
            <img
              class="faq__icon"
              :src="chevronIcon"
              alt=""
              aria-hidden="true"
            />
          </button>
        </h3>

        <div
          :id="`faq-answer-${item.id}`"
          class="faq__answer"
          role="region"
          :aria-labelledby="`faq-question-${item.id}`"
        >
          <div class="faq__answer-inner">
            <p class="faq__answer-text">{{ item.answer }}</p>
          </div>
        </div>
      </li>
    </ul>

    <hr class="faq__divider" />
  </section>
</template>

<style scoped>
/* Importe a fonte Genos uma única vez, no index.html ou no CSS global:
   <link href="https://fonts.googleapis.com/css2?family=Genos:wght@300;400;500&display=swap" rel="stylesheet"> */

.faq {
  --faq-bg: #ffffff;
  --faq-text: #111111;
  --faq-muted: #979797;
  --faq-border: #cfcfcf;
  --faq-accent: #e4163a;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 60px 52px 0;
  background-color: var(--faq-bg);
  color: var(--faq-text);
  font-family: 'Genos', sans-serif;
  box-sizing: border-box;
}

/* Títulos */
.faq__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}

.faq__title {
  margin: 0;
  font-size: 42px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.05em;
}

.faq__subtitle {
  margin: 0;
  font-size: 42px;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 0.05em;
  color: var(--faq-muted);
}

/* Perguntas */
.faq__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 780px;
  margin: 56px 0 0;
  padding: 0;
  list-style: none;
}

.faq__heading {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

.faq__question {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  width: 100%;
  padding: 20px 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 26px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-align: left;
  color: var(--faq-text);
  cursor: pointer;
  transition: color 0.2s ease;
}

.faq__question:hover,
.faq__question:focus-visible {
  color: var(--faq-accent);
}

.faq__question:focus-visible {
  outline: 2px solid var(--faq-accent);
  outline-offset: 4px;
}

.faq__icon {
  flex-shrink: 0;
  width: 22px;
  height: auto;
  margin-top: 6px;
  transition: transform 0.25s ease;
}

.faq__item.is-open .faq__icon {
  transform: rotate(180deg);
}

/* Resposta (abre e fecha suavemente) */
.faq__answer {
  display: grid;
  grid-template-rows: 0fr;
  visibility: hidden;
  transition: grid-template-rows 0.3s ease, visibility 0.3s;
}

.faq__item.is-open .faq__answer {
  grid-template-rows: 1fr;
  visibility: visible;
}

.faq__answer-inner {
  overflow: hidden;
}

.faq__answer-text {
  margin: 0;
  padding: 0 54px 20px 0;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.4;
  color: var(--faq-muted);
}

/* Linha divisória no final */
.faq__divider {
  width: calc(100% + 104px); /* compensa o padding lateral para ocupar a largura toda */
  height: 0;
  margin: 80px 0 0;
  border: none;
  border-top: 1px solid var(--faq-border);
}

@media (max-width: 700px) {
  .faq {
    padding: 40px 20px 0;
  }

  .faq__title,
  .faq__subtitle {
    font-size: 28px;
  }

  .faq__list {
    margin-top: 32px;
    gap: 8px;
  }

  .faq__question {
    font-size: 18px;
    gap: 16px;
  }

  .faq__icon {
    width: 16px;
    margin-top: 4px;
  }

  .faq__answer-text {
    font-size: 16px;
    padding-right: 0;
  }

  .faq__divider {
    width: calc(100% + 40px);
    margin-top: 48px;
  }
}
</style>