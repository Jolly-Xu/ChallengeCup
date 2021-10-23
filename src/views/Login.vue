<template>
  <div class="main-container">
    <div class="banner">
      <div class="banner-img">
        <img src="../assets/img/Login_bgc.png" alt="" />
      </div>
      <div class="banner-item">
        <div><span class="login-span">筹款登录</span></div>
        <div class="inp-container">
          <div class="inp-username">
            <input type="text" placeholder="请输入手机号" />
          </div>
          <div class="inp-password">
            <input type="password" placeholder="请输入密码" />
          </div>
          <div class="login-btn">
            <span>立即登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
  position: relative;
}

.banner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.banner-img img {
  transform: translateX(-45%);
}

.banner-item {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: #fff;
  top: 25%;
  right: 5%;
  border-radius: 5%;
}

.inp-container {
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 100%;
  align-items: center;
}

.inp-container div {
  display: flex;
  width: 80%;
  height: 20%;
  margin-bottom: 7%;
  box-sizing: border-box;
}

.login-span {
  font-size: 30px;
  font-weight: 600;
  color: #000;
}

input {
  width: 100%;
  border-radius: 25px;
  background-color: #f6f6f6;
  border: none;
  font-size: 16px;
  padding-left: 5%;
  box-sizing: border-box;
}

input:focus {
  outline: none;
}

input::placeholder {
  font-size: 14px;
  letter-spacing: 2px;
}

.login-btn{
  background-color: #0071fe;
   border-radius: 25px;
   display: flex;
   align-items: center;
}

.login-btn span{
  display: inline-block;
  color: #fff;
  font-size: 16px;
  width: 100%;
  text-align: center;
}
</style>
