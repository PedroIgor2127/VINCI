<script setup>
import { ref } from 'vue'

const buttons = ref([
  { id: 1, label: 'MODELOS', variant: 'primary', href: '#modelos' },
  { id: 2, label: 'TEST DRIVE', variant: 'outline', href: '#teste-drive' }
])

const stats = ref([
  { id: 1, value: '520KM', label: 'COM 1 CARGA' },
  { id: 2, value: '2.800RPM', label: 'DE TORQUE' },
  { id: 3, value: '10 ANOS', label: 'GARANTIA' }
])

function handleClick(button) {
  // Troque por router.push(button.href) ou rolagem até a seção, se preferir
  window.location.hash = button.href
}
</script>

<template>
  <section class="showcase" aria-labelledby="showcase-title">
    <img class="showcase__image" src="../assets/Car3.jpg" alt="Vinci Model V2, sedan branco" />

    <div class="showcase__content">
      <h2 id="showcase-title" class="showcase__title">VINCI MODEL V2</h2>

      <p class="showcase__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since 1966,
      </p>

      <ul class="showcase__actions">
        <li v-for="button in buttons" :key="button.id">
          <button
            type="button"
            class="showcase__button"
            :class="`showcase__button--${button.variant}`"
            @click="handleClick(button)"
          >
            {{ button.label }}
          </button>
        </li>
      </ul>
    </div>

    <div class="showcase__tech">
      <p class="showcase__tech-title">TECNOLOGIA ALINHADA AO FUTURO</p>

      <dl class="showcase__stats">
        <div v-for="stat in stats" :key="stat.id" class="showcase__stat">
          <dt class="showcase__stat-label">{{ stat.label }}</dt>
          <dd class="showcase__stat-value">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
/* Importe a fonte Genos uma única vez, no index.html ou no CSS global:
   <link href="https://fonts.googleapis.com/css2?family=Genos:wght@300;400;500&display=swap" rel="stylesheet"> */

.showcase {
  --showcase-bg: #ffffff;
  --showcase-text: #111111;
  --showcase-muted: #979797;
  --showcase-accent: #e4163a;
  --showcase-font: 'Genos', sans-serif; /* troque aqui se o texto do parágrafo usar outra fonte */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 40px 52px 80px;
  background-color: var(--showcase-bg);
  color: var(--showcase-text);
  font-family: var(--showcase-font);
  box-sizing: border-box;
}

.showcase__image {
  display: block;
  width: 100%;
  max-width: 720px;
  height: auto;
}

/* Título, texto e botões */
.showcase__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 960px;
}

.showcase__title {
  margin: 0;
  font-size: 72px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.03em;
  text-align: center;
}

.showcase__text {
  margin: 0;
  font-size: 20px;
  line-height: 1.35;
  text-align: left;
}

.showcase__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
}

.showcase__button {
  width: 273px;
  height: 52px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-family: var(--showcase-font);
  font-size: 16px;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease;
}

.showcase__button--primary {
  background-color: var(--showcase-accent);
  border-color: var(--showcase-accent);
  color: #ffffff;
}

.showcase__button--primary:hover {
  background-color: #c01030;
  border-color: #c01030;
}

.showcase__button--outline {
  background-color: transparent;
  border-color: var(--showcase-text);
  color: var(--showcase-text);
}

.showcase__button--outline:hover {
  background-color: var(--showcase-text);
  color: #ffffff;
}

.showcase__button:focus-visible {
  outline: 2px solid var(--showcase-accent);
  outline-offset: 3px;
}

/* Tecnologia alinhada ao futuro */
.showcase__tech {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
}

.showcase__tech-title {
  margin: 0;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: var(--showcase-muted);
}

.showcase__stats {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
}

.showcase__stat {
  display: flex;
  flex-direction: column-reverse; /* valor em cima, legenda embaixo, mantendo dt/dd na ordem correta */
  gap: 8px;
  padding: 0 48px;
}

.showcase__stat + .showcase__stat {
  border-left: 1px solid var(--showcase-muted);
}

.showcase__stat-value {
  margin: 0;
  font-size: 72px;
  line-height: 1;
  white-space: nowrap;
}

.showcase__stat-label {
  font-size: 24px;
  font-weight: 300;
  color: var(--showcase-muted);
}

@media (max-width: 1100px) {
  .showcase__title,
  .showcase__stat-value {
    font-size: 48px;
  }

  .showcase__stat {
    padding: 0 28px;
  }
}

@media (max-width: 700px) {
  .showcase {
    padding: 24px 20px 56px;
  }

  .showcase__title {
    font-size: 36px;
  }

  .showcase__text {
    font-size: 16px;
  }

  .showcase__button {
    width: 100%;
  }

  .showcase__actions {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }

  .showcase__actions li {
    width: 100%;
  }

  .showcase__tech-title {
    font-size: 18px;
    text-align: center;
  }

  .showcase__stats {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .showcase__stat {
    align-items: center;
    padding: 0;
    border-left: none !important;
  }

  .showcase__stat-value {
    font-size: 40px;
  }

  .showcase__stat-label {
    font-size: 18px;
  }
}
</style>