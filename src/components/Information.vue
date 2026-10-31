<script setup>
import { ref } from 'vue'

const menuItems = ref([
  { id: 1, label: 'AGENDE UM TEST DRIVE', href: '#teste-drive' },
  { id: 2, label: 'VEJA OFERTAS', href: '#ofertas' },
  { id: 3, label: 'ENCONTRE UM LOJA', href: '#lojas' }
])
</script>

<template>
  <section class="information" aria-label="Informações e atendimento">
    <nav class="information__nav" aria-label="Atalhos">
      <ul class="information__list">
        <li v-for="item in menuItems" :key="item.id">
          <a :href="item.href" class="information__link">
            <span class="information__label">{{ item.label }}</span>
            <img
              class="information__icon"
              src="../assets/Vector.svg"
              alt=""
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
/* Importe a fonte Genos uma única vez, no index.html ou no CSS global:
   <link href="https://fonts.googleapis.com/css2?family=Genos:wght@400;500&display=swap" rel="stylesheet"> */

.information {
  --info-bg: #ffffff;
  --info-text: #111111;
  --info-accent: #e4163a;

  width: 100%;
  padding: 60px 52px;
  background-color: var(--info-bg);
  font-family: 'Genos', sans-serif;
  box-sizing: border-box;
}

.information__list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.information__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: var(--info-text);
  text-decoration: none;
  font-size: 72px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

.information__icon {
  flex-shrink: 0;
  width: 28px;
  height: auto;
  transition: transform 0.2s ease;
}

.information__link:hover,
.information__link:focus-visible {
  color: var(--info-accent);
}

.information__link:hover .information__icon,
.information__link:focus-visible .information__icon {
  transform: translateX(8px);
}

.information__link:focus-visible {
  outline: 2px solid var(--info-accent);
  outline-offset: 6px;
}

@media (max-width: 1100px) {
  .information__link {
    font-size: 48px;
  }
}

@media (max-width: 700px) {
  .information {
    padding: 40px 20px;
  }

  .information__list {
    gap: 16px;
  }

  .information__link {
    font-size: 28px;
  }

  .information__icon {
    width: 16px;
  }
}
</style>