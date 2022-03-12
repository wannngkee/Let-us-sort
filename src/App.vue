<template>
  <body>
    <header>
      <div class="title">
        <a href="#home" class="navItem"><h1>Let's sort</h1></a>
      </div>
      <div class="nav">
        <a
          href="#home"
          class="navItem"
          :id="selected === 0 ? 'selected' : ''"
          @click="changeSelected(0)"
          >Home</a
        >
        <a
          href="#accumulator"
          class="navItem"
          :id="selected === 1 ? 'selected' : ''"
          @click="changeSelected(1)"
          >Accumulator</a
        >
        <a
          href="#game"
          class="navItem"
          :id="selected === 2 ? 'selected' : ''"
          @click="changeSelected(2)"
          >Game</a
        >
      </div>
    </header>
    <section id="home">
      <Home />
    </section>
    <section id="accumulator">
      <Accumulator />
    </section>
    <section id="game">
      <Game />
    </section>
  </body>
</template>

<script setup>
import { ref } from "vue";
import Game from "./Game.vue";
import Home from "./Home.vue";
import Accumulator from "./Accumulator.vue";
const selected = ref(0);
const changeSelected = (i) => {
  selected.value = i;
};
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec, index) => {
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.clientHeight;
    const scrollY = window.pageYOffset;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      selected.value = index;
    }
  });
});
</script>

<style>
/* body {
  background-image: url(./assets/images/bg.png);
} */
@import "./assets/base.css";
header {
  width: 100%;
  /* height: 40px; */
  display: flex;
  padding: 0px 50px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
}
.title {
  font-size: 1.5rem;
}

.navItem {
  color: #222;
  font-weight: bold;
}
.navItem:hover {
  color: #f2a51a;
}
.navItem#selected {
  color: #f2a51a;
}

.nav {
  margin: 10px 50px;
  display: flex;
  justify-content: space-between;
  width: 25%;
  font-style: italic;
}

/* #accumulator {
  height: 100vh;
} */

/* .section {
  height: 100vh;
} */
</style>
