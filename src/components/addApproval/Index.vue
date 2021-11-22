<template>
  <div class="add-approval-box-bg">
    <div class="add-approval-box">
      <div class="search">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="search"
        >
        </el-input>
      </div>
      <div class="flow-list-box">
        <div class="title">最近使用</div>
        <div class="flow-list">
          <flowCard />
        </div>
      </div>
      <div class="flow-list-box" v-for="item in this.approvalAllList" :key="item.c_id">
        <div class="title" v-if="item.approvalList.length"> {{item.c_name}} </div>
        <div class="flow-list" v-if="item.approvalList.length">
          <flowCard v-for="flow in item.approvalList" :key="flow.c_id" :flow="flow"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import flowCard from "../common/flowCard/Index.vue";
export default {
  components: {
    flowCard,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState({
      approvalAllList: (state) => state.approval.approvalAllList,
    }),
  },
  async mounted() {
    await this.$store.dispatch("approval/getAllClass");
    await this.$store.dispatch("approval/getAllProcess");
  },
};
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>