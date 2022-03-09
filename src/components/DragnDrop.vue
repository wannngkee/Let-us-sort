<template>
<div class="container">
<div class="drop-zone" 
     id="bench"
      @drop="onDrop($event,'bench')"
      @dragenter.prevent
      @dragover.prevent>
  <div v-for="item in getList('bench')" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
    <div class="item">
            <img :src="getImageUrl(item.name)" />
            {{item.name}}
    </div>
  </div>
</div>
<div class="drop-zone" 
     :id="TYPES.RECYCLE"
      @drop="onDrop($event,TYPES.RECYCLE)"
      @dragenter.prevent
      @dragover.prevent>
  <div v-for="item in getList(TYPES.RECYCLE)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
    <div class="item">
            <img :src="getImageUrl(item.name)" />
            {{item.name}}
    </div>
  </div>
  <img class='binImg' src="../assets/images/yellow.png" alt="yellow bin" />
</div>
<div class="drop-zone" 
      :id="TYPES.LANDFILL"
      @drop="onDrop($event,TYPES.LANDFILL)"
      @dragenter.prevent
      @dragover.prevent>
  <div v-for="item in getList(TYPES.LANDFILL)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
    <div class="item">
            <img :src="getImageUrl(item.name)" />
            {{item.name}}
    </div>
  </div>
  <img class='binImg' src="../assets/images/red.png" alt="red bin" />
</div>
<div class="drop-zone" 
      :id="TYPES.ORGANIC"
      @drop="onDrop($event,TYPES.ORGANIC)"
      @dragenter.prevent
      @dragover.prevent>
  <div v-for="item in getList(TYPES.ORGANIC)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
   <div class="item">
            <img :src="getImageUrl(item.name)" />
            {{item.name}}
    </div>
  </div>
    <img class='binImg' src="../assets/images/green.png" alt="green bin" />
</div>
<div class="drop-zone" 
      :id="TYPES.GLASS"
      @drop="onDrop($event,TYPES.GLASS)"
      @dragenter.prevent
      @dragover.prevent>
  <div v-for="item in getList(TYPES.GLASS)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
    <div class="item">
            <img :src="getImageUrl(item.name)" />
            {{item.name}}
    </div>
  </div>
   <img class='binImg' src="../assets/images/purple.png" alt="purple bin" />
</div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import { PRODUCTS, TYPES } from '../utils/data';
import {shuffle} from '../utils/util';
const items = ref(shuffle(PRODUCTS.map(pro => ({...pro, list: 'bench'}))))
const getList = (list)=> {
    return items.value.filter(item => item.list == list)}
const getImageUrl = (name) => {
        return new URL(`../assets/images/${name.toLowerCase().replace(' ', '-')}.svg`, import.meta.url).href
    }
const startDrag = (event, item)=> {
    event.dataTransfer.dropEffect='move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('itemID',item.id)
  }
const onDrop = (event, list)=> {
    const itemID = event.dataTransfer.getData('itemID')
    const item = items.value.find(item => item.id == itemID)
    item.list = list
    // if item.list == item.type {
    //   score += 5
    // }
  }
</script>


<style scoped>
.container{
display: flex;
justify-content: space-between
}

.drop-zone{
  width: 15%;
  margin: 50px auto;
  background: #fff;
  border-radius: 0.1rem;
  box-shadow: 0 0.05rem 0.2rem rgb(48 55 66 / 30%);
  padding: 10px;
  height: 30rem;
  position: relative
}

.drag-el {
  padding: 5px;
}

.binImg{
  width:90%;
  position: absolute;
  bottom: 0
}

.item{
  display: flex;
  align-items: center;
}

.item img{
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

#bench{
  overflow-y: scroll
}

#yellow {
  border-top: 5px solid #FFD32D;
}

#red {
  border-top: 5px solid #DA1212;
}

#green {
  border-top: 5px solid #4E9F3D;
}

#purple {
  border-top: 5px solid #573391;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 4.85rem;
  padding-right: 4.4rem;
  width: 100%;
}

</style>