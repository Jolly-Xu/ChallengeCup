<template>
  <div class="main-container">
    <div class="top-nav">
      <div class="nav">
        <div class="left-nav">
          <img src="../assets/img/Login_Logo.png" alt="" />
        </div>
        <div class="right-nav">
          <ul>
            <li>首页</li>
            <li>透明水滴</li>
            <li>失信筹款人的名单</li>
            <li>个人大病求助信息公示系统</li>
            <li>企业社会责任</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"TopNav",
    setup() {
        return{

        }
    }
}
</script>

<style scoped>
.main-container{
    position: absolute;
    top: 0;
    width: 100%;
    height: 90px;
}

.top-nav {
  display: flex;
  height: 90px;
  background-color: #fff;
  justify-content: center;
}

.nav {
  display: flex;
  width: 100%;
  align-items: center;
}

.left-nav{
  margin-left: 10%;
  width: 20%;
}

.right-nav {
  width: 70%;
}

.right-nav ul {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
}

.right-nav ul li {
  font-size: 16px;
  color: #999;
  margin-right: 5%;
}

.right-nav ul li:nth-child(1){
    color: #000;
}
</style>