<template>
  <div class="container">
    <div class="top">
      <div class="left">
        <div></div>
        <img class="mainPic" src="./assets/images/earth.png" alt="earth" />
        <div class="desc">
          <h2 style="font-weight: bold; margin-bottom: 5px">
            Impact We Can Make
          </h2>
          <h3>
            <img class="icon" src="./assets/images/tree.png" alt="tree" />
            1 ton Recycled Paper ≈
            <strong>17</strong>
            Trees
          </h3>
          <h3>
            <img class="icon" src="./assets/images/oil.png" alt="tree" />
            1 ton Recycled Plastic ≈ <strong>300</strong> kg Oil
          </h3>
          <h3>
            <img class="icon" src="./assets/images/glass.png" alt="bottle" />
            1 ton Recycled Glass ≈ <strong>20000</strong> Bottles
          </h3>
        </div>
      </div>
      <div class="right">
        <div class="enter">
          <h2>Today,&nbsp;</h2>
          <h2>I have&nbsp;</h2>
          <h2>successfully&nbsp;</h2>
          <h2>sorted&nbsp;</h2>
          <el-form ref="formRef" :model="form" :inline="true">
            <el-form-item
              prop="weight"
              :rules="[
                {
                  required: true,
                  message: 'weight is required',
                  trigger: 'submit',
                },
                {
                  type: 'number',
                  min: 0,
                  message: 'invalid weight',
                },
              ]"
            >
              <el-input
                v-model.number="form.weight"
                type="text"
                id="numInput"
              ></el-input>
            </el-form-item>
            <h2 style="margin-left: -20px; margin-right: 25px">kg waste.</h2>
            <el-form-item>
              <el-button type="primary" @click="submitForm(formRef)"
                ><span class="bold">Record</span></el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="response" v-if="isClicked">
          <h3>Thank you for the effort you have contributed!</h3>
          <h3>
            The waste you sorted helps save <strong>${{ money }}</strong> in
            reproducing.
          </h3>
        </div>
      </div>
    </div>
    <div class="bottom">
      <h2 class="subCaption">Total Sorted Waste Weight in VIC</h2>
      <div class="stats">
        <div>
          <h3>Today</h3>
          <h3 v-if="daily">
            <strong>{{ daily }}</strong> kg
          </h3>
          <h3 v-else>Loading</h3>
        </div>
        <div>
          <h3>This Week</h3>
          <h3 v-if="weekly">
            <strong>{{ weekly }}</strong> kg
          </h3>
          <h3 v-else>Loading</h3>
        </div>
        <div>
          <h3>This Month</h3>
          <h3 v-if="monthly">
            <strong>{{ monthly }}</strong> kg
          </h3>
          <h3>Loading</h3>
        </div>
      </div>
      <img class="illustration" src="./assets/images/land.png" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElInput, ElForm, ElFormItem, ElButton } from "element-plus";
import "./assets/override.css";
import axios from "axios";
const formRef = ref();
const isClicked = ref(false);
const money = ref(0);
const form = reactive({
  weight: "",
});
const daily = ref();
const weekly = ref();
const monthly = ref();

// to do
// replace with http://get.vibe.tk/garbageSort/record/getWeight"
const getData = () => {
  axios
    .get("http://get.vibe.tk/garbageSort/record/getWeight")
    // .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
};

getData();

const sendData = (value) => {
  axios
    .post("`http://get.vibe.tk/garbageSort/record/addRecord/${value}`")
    .then((res) => console.log(res));
};

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      isClicked.value = true;
      money.value = (form.weight * 0.66).toFixed(1);
      daily.value += form.weight;
      weekly.value += form.weight;
      monthly.value += form.weight;
      console.log("submit!", form.weight);
      // send data here
      // sendData(form.weight);
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style scoped>
.container {
  background: #b9e3fc;
  /* height: 100vh; */
  display: flex;
  padding: 50px 80px;
  flex-direction: column;
}

.top {
  display: flex;
  justify-content: space-between;
  margin: 50px 50px 10px;
  width: 100%;
  padding: 30px 50px;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
}
.right {
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.mainPic {
  width: 8vw;
  right: 5vw;
  -webkit-animation: spin 6s linear infinite;
  -moz-animation: spin 6s linear infinite;
  animation: spin 6s linear infinite;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.desc {
  margin-top: 15px;
}
.subCaption {
  font-weight: bold;
}

.bottom {
  display: flex;
  flex-direction: column;
  margin: 15px 50px 50px;
  position: relative;
  justify-content: flex-start;
  padding: 0px 50px;
}

.stats {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

.enter {
  margin-top: 50px;
  max-width: 550px;
  min-width: 300px;
}

.enter h2 {
  display: inline-flex;
  margin-bottom: 10px;
  font-style: italic;
  color: #222;
  font-weight: bolder;
  font-size: 1.6rem;
  line-height: 50px;
}

.bold {
  font-weight: bold;
}

.desc h3 {
  line-height: 55px;
  position: relative;
}

.icon {
  width: 35px;
  top: 5px;
}

strong {
  font-weight: bold;
  color: #2975c2;
  font-size: 1.3em;
}

.response {
  margin-top: 20px;
  line-height: 40px;
}

.stats {
  width: 45%;
}

.illustration {
  width: 25vw;
  position: absolute;
  right: -5vw;
  top: -20vh;
}

@media (max-width: 1000px) {
  .top {
    flex-direction: column;
    padding: 30px 20px;
  }
  .right {
    width: 100%;
    flex-direction: column;
  }

  .stats {
    width: 90%;
  }
  .illustration {
    top: 0vh;
    right: -15vw;
  }
}
</style>