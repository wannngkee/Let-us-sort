<template>
  <body class="game">
    <header v-if="isActive && countdown !== 0">
      <div class="left">
        <h1>{{ countdown }}s</h1>
      </div>
      <div class="middle">
        <div>
          <h1 class="score">Score: {{ score }}</h1>
        </div>
      </div>
      <div class="right">
        <button class="quitBtn" @click="knowGame"><h5>How to Play</h5></button>
        <button class="quitBtn" @click="quitGame"><h5>Quit Game</h5></button>
      </div>
    </header>
    <div class="centered" v-if="!isActive || countdown === 0">
      <Modal
        :isGameComplete="isGameComplete"
        :countdown="countdown"
        :score="score"
        :bestType="bestType"
        @toggleStart="toggleStart"
      />
    </div>
    <div class="main" v-else>
      <DragnDrop @modifyScore="modifyScore" />
    </div>
  </body>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import Modal from "./components/Modal.vue";
import DragnDrop from "./components/DragnDrop.vue";
const isActive = ref(false);
const countdown = ref(60);
const isGameComplete = ref(false);
const score = ref(0);
const bestType = ref();
const toggleStart = () => {
  isActive.value = !isActive.value;
  score.value = 0;
  bestType.value = null;
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
  isGameComplete.value = true;
};

const knowGame = () => {
  countdown.value = 60;
  isActive.value = false;
  isGameComplete.value = false;
};

const modifyScore = (val, type) => {
  score.value = val;
  bestType.value = type;
};

watch(score, () => {
  if (score.value === 100) {
    isActive.value = false;
    isGameComplete.value = true;
  }
});
</script>

<style scoped>
@import "./assets/base.css";
.game {
  background: #17b5e9 url(./assets/images/bg.png);
  padding: 60px 30px 0px 30px;
}

.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.quitBtn {
  display: block;
  margin: 25px 8px 0;
  height: 30px;
}

header {
  height: 90px;
  width: 100%;
  padding: 0px 150px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  /* background-color: aliceblue */
}
.main {
  display: flex;
  justify-content: center;
}

.score {
  font-size: 2rem;
}

.left {
  margin-top: 25px;
  margin-left: 45px;
}

.right {
  display: flex;
}

@media (max-width: 1000px) {
  .game {
    padding: 100px 30px 0px 30px;
  }
}

@media (max-width: 800px) {
  .game {
    padding: 150px 30px 0px 30px;
  }
}
</style>
