<template>
  <div class="wrapper">
    <div class="left">
      <h3>
        Australians love to recycle, we want to do the right thing and feel that
        the more we can recycle, the better.
      </h3>
      <h3>
        <mark>Let's sort</mark> is here to help you identify the waste and keep
        a record of your recycling achievements.
      </h3>
      <a href="#accumulator"><button class="btn">Get Started</button></a>
    </div>
    <div class="right">
      <img src="./assets/images/homepage.png" />
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  padding: 50px;
  background-color: #cbebf5;
}
.left {
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right {
  position: relative;
  top: 18vh;
}

img {
  width: 50vw;
}

mark {
  background-color: transparent;
  box-shadow: inset 0px -5px 0 #5ca0d3;
}

button {
  margin-top: 25px;
  height: 40px;
  width: 120px;
}
</style>