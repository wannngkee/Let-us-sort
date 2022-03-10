<template>
  <body>
    <header v-if="isActive && countdown !== 0">
      <section class="left">
        <h1>{{ countdown }}s</h1>
      </section>
      <section class="middle">
        <div>
          <h1 class="score">Score: {{ score }}</h1>
        </div>
      </section>
      <section class="right">
        <button class="quitBtn" @click="quitGame">Quit Game</button>
      </section>
    </header>
    <div class="centered" v-if="!isActive || countdown === 0">
      <Modal
        :isGameComplete="isGameComplete"
        :countdown="countdown"
        :score="score"
        @toggleStart="toggleStart"
      />
    </div>
    <div class="main" v-else>
      <DragnDrop @modifyScore="modifyScore" />
    </div>
  </body>
  <main></main>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import Modal from "./components/Modal.vue";
import DragnDrop from "./components/DragnDrop.vue";
let isActive = ref(false);
let countdown = ref(60);
let isGameComplete = ref(false);
let score = ref(0);
const toggleStart = () => {
  isActive.value = !isActive.value;
  score.value = 0;
  countdownTimer();
};
const countdownTimer = () => {
  if (countdown.value > 0) {
    setTimeout(() => {
      countdown.value -= 1;
      countdownTimer();
    }, 1000);
  }
  if (countdown.value === 0) {
    quitGame();
    isGameComplete.value = true;
    isActive.value = false;
  }
};

const quitGame = () => {
  countdown.value = 60;
  isActive.value = false;
  isGameComplete.value = false;
};

const modifyScore = (val) => {
  score.value = val;
};

watch(score, () => {
  if (score.value === 100) {
    isActive.value = false;
    isGameComplete.value = true;
  }
});
</script>

<style>
@import "./assets/base.css";
body {
  position: relative;
  /* background-color: aliceblue; */
  background: #17b5e9 url(./assets/images/bg.png);
}

.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.quitBtn {
  display: block;
  margin-top: 25px;
  height: 30px;
  border: 0;
  border-radius: 4px;
  font-size: 1em;
  color: white;
  background-color: #318ce7;
  cursor: pointer;
  box-shadow: 0 6px #2975c2;
}

.quitBtn:hover {
  transform: translateY(4px);
  box-shadow: 0 2px #2975c2;
}

header {
  height: 100px;
  width: 100%;
  padding: 50px 150px;
  display: flex;
  justify-content: space-between;
  /* background-color: aliceblue */
}
/* .middle {
  position: absolute;
  left: 50%;
} */

.score {
  font-size: 2rem;
}

.left {
  margin-top: 25px;
  margin-left: 45px;
}
</style>
