<template>
  <div class="approval-list">
    <div class="select-time">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </el-select>
      <!-- <i class="el-icon-s-data"></i> -->
    </div>
    <el-divider></el-divider>
    <div class="list">
      <approvalCard />
      <approvalCard />
      <approvalCard />
      <approvalCard />
    </div>
  </div>
</template>

<script>
import approvalCard from "../common/approvalCard/Index.vue";
export default {
  components: {
    approvalCard,
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "所有时间",
        },
        {
          value: "选项2",
          label: "最近24小时",
        },
        {
          value: "选项3",
          label: "最近3天",
        },
        {
          value: "选项4",
          label: "最近7天",
        },
        {
          value: "选项5",
          label: "最近30天",
        },
      ],
      value: "选项1",
    };
  },
};
</script>

<style lang="scss" scope>
.approval-list {
  margin-top: -5px;
  .select-time {
    z-index: 2;
    font-size: 30px;
  }
}
</style>