<template>
  <div class="approvalCenter-box">
    <div class="left">
      <leftNavBar />
    </div>
    <div class="middle">
      <approvalList />
    </div>
    <div class="right">
      <approvalDetail />
    </div>
  </div>
</template>

<style lang="scss" scope>
@import "./index.scss";
</style>

<script>
import leftNavBar from "../leftNavBar/Index.vue";
import approvalList from "../approvalList/Index.vue";
import approvalDetail from "../approvalDetail/Index.vue";
export default {
  components: {
    leftNavBar,
    approvalList,
    approvalDetail
  },
  data() {
    return {
      
    };
  },
};
</script>