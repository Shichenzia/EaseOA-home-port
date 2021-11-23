<template>
  <el-card class="box-card" shadow="hover">
    <div @click="getWorkOrderInfo">
      <div class="heard">
        <div class="title">{{ workOrder.c_title }}</div>
        <div>
          <el-tag type="warning" size="small" v-if="workOrder.c_is_end === '1'"> 已结束 </el-tag>
          <el-tag type="success" size="small" v-else >等待审批</el-tag>
        </div>
      </div>
      <div class="avatar-box">
        <el-avatar
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          :size="24"
        ></el-avatar>
        <span style="margin-left: 10px">{{ workOrder.username }}</span>
      </div>
      <div class="content">
        <div>请假类型：事假</div>
        <!-- <div>开始时间：事假</div> -->
      </div>
      <div class="time">申请时间：{{ workOrder.c_ctime }}</div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    workOrder: {
      typeof: Object,
      default: () => {},
    },
  },
  methods: {
    async getWorkOrderInfo() {
      console.log(this.workOrder);
      await this.$store.dispatch("approval/getWorkOrderById", {
        id: this.workOrder.c_id,
      });
    },
  },
};
</script>

<style lang="scss" scope>
.box-card {
  margin-bottom: 10px;
  cursor: pointer;
  .el-card__body {
    padding: 10px;
  }
  .heard {
    display: flex;
    justify-content: space-between;
    height: 24px;
    margin-bottom: 10px;
    .title {
      font-weight: 500;
    }
  }
  .avatar-box {
    height: 24px;
    display: flex;
    align-items: center;
  }
  .content {
    div {
      font-size: 14px;
      margin: 10px 0;
    }
  }
  .time {
    font-size: 12px;
  }
}
</style>