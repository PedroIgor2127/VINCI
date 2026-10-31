<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuItems = ref([
  { id: 1, label: 'HOME', href: '/' },
  { id: 2, label: 'SOBRE', href: '#sobre' },
  { id: 3, label: 'VEICULOS', hasMenu: true },
  { id: 4, label: 'SERVIÇOS', href: '/servicos' },
  { id: 5, label: 'TESTE DRIVE', href: '#teste-drive' }
])

/* Troque as imagens dos modelos V3 e V4 quando tiver os arquivos finais */
const vehicles = ref([
  {
    id: 1,
    name: 'MODELO V1',
    image: new URL('../assets/Car2.png', import.meta.url).href,
    moreHref: '#model-v1',
    buyHref: '#comprar-v1'
  },
  {
    id: 2,
    name: 'MODELO V2',
    image: new URL('../assets/Car1.png', import.meta.url).href,
    moreHref: '#model-v2',
    buyHref: '#comprar-v2'
  },
  {
    id: 3,
    name: 'MODELO V3',
    image: new URL('../assets/Car1.png', import.meta.url).href,
    moreHref: '#model-v3',
    buyHref: '#comprar-v3'
  },
  {
    id: 4,
    name: 'MODELO V4',
    image: new URL('../assets/Car1.png', import.meta.url).href,
    moreHref: '#model-v4',
    buyHref: '#comprar-v4'
  },
  {
    id: 5,
    name: 'MODELO V4',
    image: new URL('../assets/Car1.png', import.meta.url).href,
    moreHref: '#model-v4',
    buyHref: '#comprar-v4'
  },
  {
    id: 6,
    name: 'MODELO V4',
    image: new URL('../assets/Car1.png', import.meta.url).href,
    moreHref: '#model-v4',
    buyHref: '#comprar-v4'
  }
])

const sideLinks = ref([
  { id: 1, label: 'OFERTAS', href: '#ofertas' },
  { id: 2, label: 'TEST DRIVE', href: '#teste-drive', featured: true },
  { id: 3, label: 'LOJAS', href: '#lojas' },
  { id: 4, label: 'SERVIÇOS', href: '#servicos' },
  { id: 5, label: 'SAC', href: '#sac' },
  { id: 6, label: 'PRIVACIDADE', href: '#privacidade' }
])

const isMenuOpen = ref(false)
const headerRef = ref(null)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleOutsideClick(event) {
  if (isMenuOpen.value && headerRef.value && !headerRef.value.contains(event.target)) {
    closeMenu()
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header ref="headerRef" class="header">
    <a href="/" class="header__logo" aria-label="Vinci - página inicial">
      <img src="../assets/logo.svg" alt="Vinci" />
    </a>

    <nav class="header__nav" aria-label="Navegação principal">
      <ul class="header__list">
        <li v-for="item in menuItems" :key="item.id" class="header__item">
          <button
            v-if="item.hasMenu"
            type="button"
            class="header__link header__link--button"
            :class="{ 'is-open': isMenuOpen }"
            :aria-expanded="isMenuOpen"
            aria-controls="vehicles-menu"
            @click="toggleMenu"
          >
            {{ item.label }}
          </button>

          <a v-else :href="item.href" class="header__link" @click="closeMenu">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>

    <Transition name="menu">
      <div v-show="isMenuOpen" id="vehicles-menu" class="menu">
        <ul class="menu__vehicles">
          <li v-for="vehicle in vehicles" :key="vehicle.id" class="vehicle">
            <img
              class="vehicle__image"
              :src="vehicle.image"
              :alt="`${vehicle.name} Vinci`"
            />
            <p class="vehicle__name">{{ vehicle.name }}</p>
            <div class="vehicle__actions">
              <a :href="vehicle.moreHref" class="vehicle__link" @click="closeMenu">Ver mais</a>
              <a :href="vehicle.buyHref" class="vehicle__link" @click="closeMenu">Comprar</a>
            </div>
          </li>
        </ul>

        <nav class="menu__side" aria-label="Navegue">
          <p class="menu__side-title">NAVEGUE</p>
          <ul class="menu__side-list">
            <li v-for="link in sideLinks" :key="link.id">
              <a
                :href="link.href"
                class="menu__side-link"
                :class="{ 'is-featured': link.featured }"
                @click="closeMenu"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Importe a fonte Genos uma única vez, no index.html ou no seu CSS global:
   <link href="https://fonts.googleapis.com/css2?family=Genos:wght@400;500;600&display=swap" rel="stylesheet">
   ou: @import url('https://fonts.googleapis.com/css2?family=Genos:wght@400;500;600&display=swap'); */

.header {
  --header-bg: #ffffff;
  --header-text: #111111;
  --header-muted: #979797;
  --header-border: #e6e6e6;
  --header-accent: #e4163a; /* vermelho da logo — troque pela cor do botão principal */

  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 40px;
  height: 72px;
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--header-border);
  font-family: 'Genos', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

.header__logo {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.header__logo img {
  display: block;
  height: 36px;
  width: auto;
}

.header__nav {
  align-self: stretch;
  margin-left: auto;
}

.header__list {
  display: flex;
  align-items: stretch;
  gap: 64px;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.header__item {
  display: flex;
}

.header__link {
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  border-bottom: 2px solid transparent;
  background: none;
  font: inherit;
  color: var(--header-text);
  text-decoration: none;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.header__link:hover,
.header__link:focus-visible {
  color: var(--header-accent);
}

.header__link:focus-visible {
  outline: 2px solid var(--header-accent);
  outline-offset: -4px;
}

/* Traço sob "VEICULOS" quando o menu está aberto */
.header__link--button.is-open {
  border-bottom-color: var(--header-text);
}

/* Menu suspenso */
.menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  gap: 48px;
  padding: 40px 52px 56px;
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--header-border);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
}

.menu__vehicles {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 32px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.vehicle {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vehicle__image {
  display: block;
  width: 100%;
  max-width: 260px;
  height: auto;
}

.vehicle__name {
  margin: 12px 0 8px;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: var(--header-text);
}

.vehicle__actions {
  display: flex;
  gap: 24px;
}

.vehicle__link {
  font-size: 16px;
  letter-spacing: 0.05em;
  color: var(--header-text);
  text-decoration: none;
  transition: color 0.2s ease;
}

.vehicle__link:hover,
.vehicle__link:focus-visible {
  color: var(--header-accent);
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Coluna "Navegue" */
.menu__side {
  flex: 0 0 300px;
  padding-left: 48px;
  border-left: 1px solid var(--header-border);
  box-sizing: border-box;
}

.menu__side-title {
  margin: 0 0 32px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--header-muted);
  font-size: 14px;
  letter-spacing: 0.2em;
  color: var(--header-muted);
}

.menu__side-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu__side-link {
  font-size: 16px;
  letter-spacing: 0.15em;
  color: var(--header-text);
  text-decoration: none;
  transition: color 0.2s ease;
}

.menu__side-link.is-featured,
.menu__side-link:hover,
.menu__side-link:focus-visible {
  color: var(--header-accent);
}

/* Animação de abrir e fechar */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1000px) {
  .menu {
    flex-direction: column;
    gap: 32px;
    padding: 32px 20px 40px;
  }

  .menu__vehicles {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  .menu__side {
    flex: none;
    width: 100%;
    padding-left: 0;
    border-left: none;
  }
}

@media (max-width: 900px) {
  .header {
    padding: 0 20px;
  }

  .header__list {
    gap: 24px;
  }
}

@media (max-width: 500px) {
  .menu__vehicles {
    grid-template-columns: 1fr;
  }
}
</style>