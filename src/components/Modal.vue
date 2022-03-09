<template>
  <div class="card">
        <div class="content">
           Drag and drop the trash into the correct bin. Sort them quickly for a better score!
        </div>
        <button class="startBtn" @click="handleClick"> Start Game</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({active: Boolean})
const emits = defineEmits(["toggleStart"])
const handleClick = ()=> {
    emits("toggleStart")
}
</script>

<style scoped>
.card{
    margin: 0 auto;
    padding: 30px 40px 50px;
    font-size: 1.4rem;
    border-radius: 40px;
    min-height: 18rem;
    /* background-color: #f1c40f; */
    border: 6px solid #222;
    border-left: 10px solid #222;
    border-bottom: 10px solid #222;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.startBtn{
    display: block;
    width: 100%;
    height: 40px;;
    /* padding: 20px; */
    border: 0;
    border-radius: 4px;
    font-size: 1em;
    color: white;
    background-color: #9265ba;
    cursor: pointer;
    box-shadow: 0 6px #704c90;
}

.startBtn:hover {
    transform: translateY(4px);
    box-shadow: 0 2px #704c90;
}

</style>