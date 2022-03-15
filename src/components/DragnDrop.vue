<template>
  <div class="container">
    <div
      class="drop-zone"
      id="bench"
      @drop="onDrop($event, 'bench')"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList('bench')"
        :key="item.id"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <div class="item">
          <img :src="getImageUrl(item.name)" />
          {{ item.name }}
        </div>
      </div>
    </div>
    <div
      class="drop-zone"
      :id="TYPES.RECYCLE"
      @drop="onDrop($event, TYPES.RECYCLE)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(TYPES.RECYCLE)"
        :key="item.id"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <div class="item">
          <img :src="getImageUrl(item.name)" />
          {{ item.name }}
        </div>
      </div>
      <img class="binImg" src="../assets/images/yellow.png" alt="yellow bin" />
    </div>
    <div
      class="drop-zone"
      :id="TYPES.LANDFILL"
      @drop="onDrop($event, TYPES.LANDFILL)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(TYPES.LANDFILL)"
        :key="item.id"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <div class="item">
          <img :src="getImageUrl(item.name)" />
          {{ item.name }}
        </div>
      </div>
      <img class="binImg" src="../assets/images/red.png" alt="red bin" />
    </div>
    <div
      class="drop-zone"
      :id="TYPES.ORGANIC"
      @drop="onDrop($event, TYPES.ORGANIC)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(TYPES.ORGANIC)"
        :key="item.id"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <div class="item">
          <img :src="getImageUrl(item.name)" />
          {{ item.name }}
        </div>
      </div>
      <img class="binImg" src="../assets/images/green.png" alt="green bin" />
    </div>
    <div
      class="drop-zone"
      :id="TYPES.GLASS"
      @drop="onDrop($event, TYPES.GLASS)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(TYPES.GLASS)"
        :key="item.id"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <div class="item">
          <img :src="getImageUrl(item.name)" />
          {{ item.name }}
        </div>
      </div>
      <img class="binImg" src="../assets/images/purple.png" alt="purple bin" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { PRODUCTS, TYPES } from "../utils/data";
import { shuffle } from "../utils/util";
const emits = defineEmits(["modifyScore"]);
const items = ref(shuffle(PRODUCTS.map((pro) => ({ ...pro, list: "bench" }))));
const getList = (list) => {
  return items.value.filter((item) => item.list == list);
};
const getImageUrl = (name) => {
  return new URL(
    `../assets/images/${name.toLowerCase().replace(" ", "-")}.svg`,
    import.meta.url
  ).href;
};
const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("itemID", item.id);
};
const bestType = (items) => {
  if (items.length === 0) {
    return null;
  }
  const count = { recycle: 0, landfill: 0, organic: 0, glass: 0 };
  items.forEach((item) => {
    switch (item.type) {
      case "green":
        count.organic += 1;
        break;
      case "yellow":
        count.recycle += 1;
        break;
      case "red":
        count.landfill += 1;
        break;
      case "purple":
        count.glass += 1;
    }
  });
  let maxKey,
    maxValue = 0;

  for (const [key, value] of Object.entries(count)) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
};

const onDrop = (event, list) => {
  const itemID = event.dataTransfer.getData("itemID");
  const item = items.value.find((item) => item.id == itemID);
  item.list = list;
  const matchedItem = items.value.filter((item) => item.type === item.list);
  const currentScore = matchedItem.reduce((sum, record) => sum + 5, 0);
  const best = bestType(matchedItem);
  console.log(best);

  emits("modifyScore", currentScore, best);
};
</script>


<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  position: absolute;
}

.drop-zone {
  width: 15%;
  padding: 50px auto;
  background: aliceblue;
  border-radius: 0.2rem;
  box-shadow: 0 0.1rem 0.3rem rgb(48 55 66 / 30%);
  padding: 10px;
  height: 480px;
  position: relative;
}

.drag-el {
  padding: 5px;
}

.binImg {
  width: 90%;
  position: absolute;
  bottom: 0;
}

.item {
  display: flex;
  align-items: center;
}

.item img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

#bench {
  overflow-y: scroll;
}

#yellow {
  border-top: 5px solid #ffd32d;
}

#red {
  border-top: 5px solid #da1212;
}

#green {
  border-top: 5px solid #4e9f3d;
}

#purple {
  border-top: 5px solid #573391;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

@media (max-width: 1000px) {
  .drop-zone {
    height: 45vw;
  }
  .item img {
    width: 1.2rem;
    height: 1.2rem;
  }
  .item {
    font-size: 0.8rem;
  }
}

@media (max-height: 700px) {
  .drop-zone {
    height: 60vh;
  }
}
</style>