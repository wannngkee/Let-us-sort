<template>
    <body>
      <Header />
      <!-- <div class='modalSection'>
      <Modal /> -->
      <!-- </div> -->
      <DragnDrop/>
    </body>


  <main>
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
import Modal from './components/Modal.vue';
import DragnDrop from './components/DragnDrop.vue'
</script>


<style>
@import './assets/base.css';
.modalSection {
  margin: auto;
  display: flex;
}

body{
  background: #17b5e9 url(./assets/images/bg.png);
}


/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
} */

/* 
.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
} */
</style>
