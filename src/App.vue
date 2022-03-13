<template>
  <body>
    <header class=".navbar">
      <div class="title">
        <a href="#home" class="navItem"><h1>Let's Sort</h1></a>
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
    <footer>
      <div>FIT5120, 2022 S1</div>
      <div>Onboarding Project ©TA31</div>
      <!-- <div>©TA31</div> -->
    </footer>
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
  const top = window.scrollY;
  const nav = document.querySelector("header");
  if (top >= 50 && top <= 640) {
    nav.classList.remove("first", "second");
    nav.classList.add("first");
  } else if (top > 640 && top <= 1380) {
    nav.classList.remove("first", "second");
    nav.classList.add("second");
  } else {
    nav.classList.remove("first", "second");
  }
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

.first {
  background-color: #cbebf5;
  transition: all 0.5s;
}

.second {
  background-color: #b9e3fc;
  transition: all 0.5s;
}
footer {
  margin-top: -52px;
  font-size: 10px;
  padding: 10px;
  /* height: 75px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #cbebf5; */
  background-color: rgba(203, 235, 245, 40%);
  /* background: linear-gradient(45deg, #cbebf5 0%, #a1cae2 100%); */
}

.contactIcon {
  display: inline-block;
  margin-top: 2px;
  margin-left: 8px;
  margin-right: 8px;
  font-size: 16px;
  color: #000;
}

.contactIcon:hover {
  color: #eee;
}

@media (max-width: 1000px) {
  .nav {
    width: 50%;
  }
}

@media (max-width: 650px) {
  .nav {
    flex-direction: column;
  }
}
</style>
