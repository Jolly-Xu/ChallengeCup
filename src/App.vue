<template>
  <div>
    <router-view name="Nav"></router-view>
    <router-view class="Content"> </router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style scoped>
.Content{
  position: absolute;
  top: 90px;
}
</style>
