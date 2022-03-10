<template>
  <header class="navbar">
        <div class="head">
          <section class="right" v-if="isActive && countdown !== 0">
            <div>Time: {{props.countdown}}s</div>
            <div>Score: {{props.score}}</div>
          </section>
        </div>
  </header>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  countdown: Number,
  isActive: Boolean,
  score: Number,
  });
</script>

<style scoped>
.navbar {
    height: 100px;
    width: 100%;
    padding: 50px;
    /* background-color: aliceblue */
}
.right{
  position: absolute;
  right:100px;
  padding-right:100px;
}

</style>
