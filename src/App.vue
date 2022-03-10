<template>
    <body>
      <Header :isActive="isActive" :countdown="countdown" :score="score"/>
      <div class='centered' v-if="!isActive || countdown===0">
      <Modal :isGameComplete="isGameComplete" :countdown="countdown" @toggleStart="toggleStart"/>
      </div>
      <div class="main" v-else>
      <DragnDrop @modifyScore = "modifyScore"/>
      </div>
    </body>
  <main>
  </main>
</template>

<script setup>
import {ref, computed } from 'vue'
import Header from './components/Header.vue'
import Modal from './components/Modal.vue';
import DragnDrop from './components/DragnDrop.vue'
let isActive = ref(false);
let countdown = ref(60);
let isGameComplete = ref(false);
let score = ref(0);
const toggleStart = ()=> { 
  isActive.value = !isActive.value;
  countdownTimer()
}
const countdownTimer = ()=> {
                if(countdown.value > 0) {
                    setTimeout(() => {
                        countdown.value -= 1
                        countdownTimer()
                    }, 1000)
                }
                if (countdown.value === 0){
                  quitGame()
                  isGameComplete.value = true;
                  isActive.value = false;
                  score.value = 0;
                }
            }
const quitGame = ()=>{
  countdown.value = 60;
  isActive.value = false;
} 

const modifyScore = (val) =>{
  score.value = val
}
</script>

<style>
@import './assets/base.css';
body{
  position: relative;
  /*
   background: #17b5e9 url(./assets/images/bg.png);
  */
}

.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
