<template>
  <div class="home-box">
    <Header />
    <div class="main">
      <addApproval v-if="headTab==='1'" />
      <approvalCenter v-if="headTab==='2'" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../../components/Header/Index.vue";
import approvalCenter from "../../components/approvalCenter/Index.vue";
import addApproval from "../../components/addApproval/Index.vue";
export default {
  components: {
    Header,
    approvalCenter,
    addApproval
  },
  computed: {
    ...mapState({
      headTab: (state) => state.home.headTab,
    }),
  },
};
</script>

<style lang="scss">
.home-box {
  background: #f6f7f8;
  height: 100vh;
}
</style>