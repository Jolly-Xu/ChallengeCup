<template>
  <div class="main-container">
    <el-carousel height="600px">
      <el-carousel-item v-for="item in carouselImg" :key="item.id">
        <img class="carouselImg" :src="item.url" alt="" />
      </el-carousel-item>
    </el-carousel>

    <div class="main-content">
        <span class="description">筹款捐助</span>
        <div class="row01">
            <ul class="cards">
                <li class="descr-card">1</li>
                <li class="descr-card">1</li>
                <li class="descr-card">1</li>
                <li class="descr-card">1</li>
                <li class="descr-card">1</li>
                <li class="descr-card">1</li>
                <li class="descr-card">1</li>
                <li class="descr-card">1</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "Home",
  setup() {
    const carouselImg = reactive([
      { id: 1, url: require("../assets/img/img01.jpg") },
      { id: 2, url: require("../assets/img/img01.jpg") },
      { id: 3, url: require("../assets/img/img01.jpg") },
    ]);

    return {
      carouselImg,
    };
  },
};
</script>

<style scoped>
.carouselImg {
  width: 100%;
  height: 100%;
}
.main-container {
  width: 100%;
}

.main-content{
    margin-top: 2%;
    width: 100%;
    padding:0 5%;
    box-sizing: border-box;
}

.description{
    display: inline-block;
    width: 100%;
    font-size: 22px;
    color: rgb(105, 104, 104);
    padding: 1% 0;
}

.cards{
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
}

.descr-card{
    display: flex;
    width: 20%;
    height: 400px;
    background-color: #fff;
    margin:1% 0;
    margin-left: 10px;
    border-radius: 10px;
    box-shadow: -5px 5px 20px rgba(102, 102, 102, 0.2);
    border-top: rgba(255, 255, 255, 0.15) 1px solid;
    border-left: rgba(255, 255, 255, 0.15) 1px solid;
}

</style>
