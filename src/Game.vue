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
        <button class="quitBtn" @click="quitGame">Quit Game</button>
      </div>
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

<style scoped>
@import "./assets/base.css";
.game {
  /* background-color: #cbebf5; */
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
  margin-top: 25px;
  height: 30px;
}

header {
  height: 100px;
  width: 100%;
  padding: 40px 150px;
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
</style>
