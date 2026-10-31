<script setup>
import { ref } from 'vue'

const heroButtons = ref([
  { id: 1, label: 'MODELOS', variant: 'primary', href: '#modelos' },
  { id: 2, label: 'TEST DRIVE', variant: 'outline', href: '#teste-drive' }
])

function handleClick(button) {
  window.location.hash = button.href
}
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <img
      class="hero__bg"
      src="../assets/electric-car.png"
      alt=""
      aria-hidden="true"
    />

    <div class="hero__content">
      <h1 id="hero-title" class="hero__title">VINCI MODEL V3</h1>

      <p class="hero__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since 1500s.
      </p>

      <nav class="hero__actions" aria-label="Ações principais">
        <ul class="hero__list">
          <li v-for="button in heroButtons" :key="button.id">
            <button
              type="button"
              class="hero__button"
              :class="`hero__button--${button.variant}`"
              @click="handleClick(button)"
            >
              {{ button.label }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style scoped>


.hero {
  --hero-accent: #e4163a;
  --hero-text: #ffffff;

  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  min-height: 630px;
  overflow: hidden;
  box-sizing: border-box;
  color: var(--hero-text);
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Escurece a imagem para dar contraste ao texto, como no layout */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.25) 60%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 760px;
  padding: 0 52px 90px;
}

.hero__title {
  margin: 0;
  font-family: 'Genos', sans-serif;
  font-size: 72px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.04em;
}

.hero__text {
  margin: 0;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 20px;
  line-height: 1.35;
}

.hero__list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.hero__actions {
  margin-top: 16px;
}

.hero__button {
  width: 273px;
  height: 52px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 16px;
  letter-spacing: 0.06em;
  color: var(--hero-text);
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease;
}

.hero__button--primary {
  background-color: var(--hero-accent);
  border-color: var(--hero-accent);
}

.hero__button--primary:hover {
  background-color: #c01030;
  border-color: #c01030;
}

.hero__button--outline {
  background-color: transparent;
  border-color: var(--hero-text);
}

.hero__button--outline:hover {
  background-color: var(--hero-text);
  color: #111111;
}

.hero__button:focus-visible {
  outline: 2px solid var(--hero-text);
  outline-offset: 3px;
}

@media (max-width: 700px) {
  .hero__content {
    padding: 0 20px 48px;
  }

  .hero__title {
    font-size: 44px;
  }

  .hero__text {
    font-size: 16px;
  }

  .hero__button {
    width: 100%;
  }

  .hero__list {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }

  .hero__list li,
  .hero__actions {
    width: 100%;
  }
}
</style>