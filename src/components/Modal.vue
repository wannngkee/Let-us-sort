<template>
  <div class="card">
    <div class="title" v-if="isGameComplete">
      <div v-if="props.score === 100">
        <h1>Great Work</h1>
        <h4>Score: 100</h4>
        <h4>You nailed it</h4>
      </div>
      <div v-else>
        <h1>Score: {{ props.score }}</h1>
        <h6 style="padding: 10px 0px" v-if="bestType">
          You are good at sorting
          <span style="font-weight: bold">{{ props.bestType }}</span> garbage
        </h6>
        <h6 style="padding: 5px 0px">
          Check
          <a
            href="https://www.melbourne.vic.gov.au/residents/waste-recycling/Pages/a-z-waste-disposal.aspx"
            target="_blank"
            ><mark>this guide</mark></a
          >
          to sort <span v-if="bestType">other</span> garbage better
        </h6>
      </div>
    </div>
    <div class="title" v-else>
      <h1>Sort Smart</h1>
    </div>
    <div v-if="!isGameComplete" class="content">
      Drag and drop the trash into the correct bin. Sort them quickly for a
      better score!
    </div>
    <button class="startBtn" @click="handleClick">
      {{ isGameComplete ? "Play Again" : "Start Game" }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  countdown: Number,
  isGameComplete: Boolean,
  score: Number,
  bestType: String,
});
const emits = defineEmits(["toggleStart"]);
const handleClick = () => {
  emits("toggleStart");
};
</script>

<style scoped>
.card {
  margin: 0 auto;
  padding: 30px 40px 50px;
  font-size: 1.4rem;
  border-radius: 40px;
  min-height: 18rem;
  background-color: white;
  /* background-color: #f1c40f; */
  border: 6px solid #444;
  border-left: 10px solid #444;
  border-bottom: 10px solid #444;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.content {
  margin: 15px;
}

.startBtn {
  width: 100%;
  height: 40px;
  /* padding: 20px; */
}

.title {
  text-align: center;
}

h1 {
  flex-shrink: 0;
  width: 100%;
  color: white;
  letter-spacing: 5px;
  text-shadow: 0px 0px 2px #222222;
  text-align: center;
  text-shadow: 2px 1px 0 #222, 3px 3px 0 #222, -2px 1px 0 #222, 1px -1px 0 #222;
}

mark {
  background-color: transparent;
  box-shadow: inset 0px -2px 0 #5ca0d3;
  color: #2c3e50;
}
</style>