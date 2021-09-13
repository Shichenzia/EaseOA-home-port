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
        <div class="title">
          最近使用
        </div>
        <div class="flow-list">
          <flowCard />
        </div>
      </div>
      <div class="flow-list-box">
        <div class="title">
          出勤
        </div>
        <div class="flow-list">
          <flowCard />
          <flowCard />
          <flowCard />
        </div>
      </div>
      <div class="flow-list-box">
        <div class="title">
          财务
        </div>
        <div class="flow-list">
          <flowCard />
          <flowCard />
          <flowCard />
          <flowCard />
        </div>
      </div>
      <div class="flow-list-box">
        <div class="title">
          行政
        </div>
        <div class="flow-list">
          <flowCard />
          <flowCard />
          <flowCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flowCard from "../common/flowCard/Index.vue";
export default {
  components: {
    flowCard
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>