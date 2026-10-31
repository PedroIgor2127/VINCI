<script setup>
import { ref } from 'vue'

const menuColumns = ref([
  {
    id: 1,
    title: 'SOBRE',
    links: [
      { id: 1, label: 'A Marca', href: '#marca' },
      { id: 2, label: 'História', href: '#historia' },
      { id: 3, label: 'Qualidade', href: '#qualidade' },
      { id: 4, label: 'Onde Estamos', href: '#onde-estamos' },
      { id: 5, label: 'Investidores', href: '#investidores' }
    ]
  },
  {
    id: 2,
    title: 'CONTATO',
    links: [
      { id: 1, label: 'Fale Conosco', href: '#fale-conosco' },
      { id: 2, label: 'Atendimento', href: '#atendimento' },
      { id: 3, label: 'SAC', href: '#sac' }
    ]
  },
  {
    id: 3,
    title: 'SAC',
    links: [
      { id: 1, label: 'Canais Oficiais', href: '#canais-oficiais' },
      { id: 2, label: 'Rede Sociais', href: '#redes-sociais' },
      { id: 3, label: 'Tickets', href: '#tickets' }
    ]
  }
])
</script>

<template>
  <footer class="footer">
    <div class="footer__brand">
      <a href="/" class="footer__logo" aria-label="Vinci - página inicial">
        <img src="../assets/logo.svg" alt="Vinci" />
      </a>

      <p class="footer__copyright">
        ©COPYRIGHT TODOS OS DIREITOS RESERVADOS
      </p>
    </div>

    <nav class="footer__nav" aria-label="Rodapé">
      <div
        v-for="column in menuColumns"
        :key="column.id"
        class="footer__column"
      >
        <h2 class="footer__title">{{ column.title }}</h2>
        <ul class="footer__list">
          <li v-for="link in column.links" :key="link.id">
            <a :href="link.href" class="footer__link">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>

<style scoped>
/* Importe a fonte Genos uma única vez, no index.html ou no CSS global:
   <link href="https://fonts.googleapis.com/css2?family=Genos:wght@400;500&display=swap" rel="stylesheet"> */

.footer {
  --footer-bg: #ffffff;
  --footer-text: #111111;
  --footer-muted: #979797;
  --footer-accent: #e4163a;

  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 48px;
  width: 100%;
  padding: 40px 52px;
  background-color: var(--footer-bg);
  border-bottom: 1px solid var(--footer-text);
  font-family: 'Genos', sans-serif;
  box-sizing: border-box;
}

/* Coluna da marca: logo no topo, copyright embaixo */
.footer__brand {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  max-width: 420px;
}

.footer__logo {
  display: inline-flex;
  align-self: flex-start;
}

.footer__logo img {
  display: block;
  height: 36px;
  width: auto;
}

.footer__copyright {
  margin: 0;
  font-size: 20px;
  letter-spacing: 0.2em;
  line-height: 1.5;
  color: var(--footer-muted);
}

/* Colunas de links à direita */
.footer__nav {
  display: flex;
  gap: 96px;
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer__title {
  margin: 0;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 1;
  color: var(--footer-text);
}

.footer__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer__link {
  font-size: 20px;
  letter-spacing: 0.2em;
  color: var(--footer-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__link:hover,
.footer__link:focus-visible {
  color: var(--footer-accent);
}

.footer__link:focus-visible {
  outline: 2px solid var(--footer-accent);
  outline-offset: 4px;
}

@media (max-width: 1000px) {
  .footer {
    flex-direction: column;
  }

  .footer__brand {
    max-width: none;
  }

  .footer__nav {
    gap: 48px;
  }
}

@media (max-width: 600px) {
  .footer {
    padding: 32px 20px;
  }

  .footer__nav {
    flex-direction: column;
    gap: 32px;
  }

  .footer__title {
    font-size: 32px;
  }

  .footer__link,
  .footer__copyright {
    font-size: 16px;
  }
}
</style>