<template>
  <div>
    <p>我的</p>
    <!-- 定义二级路由的坑 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyclassMine",

  data() {
    return {};
  },
  created() {
    // console.log(this.$route.query);
  },
};
</script>

<style lang="scss" scoped>
</style>