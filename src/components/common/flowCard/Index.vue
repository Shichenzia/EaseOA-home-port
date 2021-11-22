<template>
  <div class="flow-card-box" @click="addFlow">
    <div class="flow-icon">
      <el-avatar
        shape="square"
        :size="35"
        :src="this.flow.c_process_icon"
      ></el-avatar>
    </div>
    <div class="flow-card-detail">
      <div>{{ this.flow.c_title }}</div>
      <div class="desc">{{ this.flow.c_desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flow: {
      typeof: Object,
      default: () => {
        return {
          c_class_id: "0001",
          c_creator: "sdf",
          c_ctime: "2021-11-15 22:57:00",
          c_desc: "外出办公",
          c_id: "000dc5b30cd800000001",
          c_mtime: "2021-11-15 22:57:00",
          c_process_icon:
            "http://or-chengdu.oss-cn-chengdu.aliyuncs.com/000c9e95ed0200000005/e20d072e4d2ade509dfe0d3ffa30f0f4.png",
          c_template_id: "000dc5b306f500000001",
          c_title: "外出",
        };
      },
    },
  },
  methods: {
    addFlow() {
      this.$store.commit("approval/setApprovalItemInfo", this.flow);
      this.$router.push({
        path: "addFlow",
        query: {
          c_id: this.flow.c_id,
          c_template_id: this.flow.c_template_id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scope>
.flow-card-box {
  cursor: pointer;
  border: 1px solid rgb(222, 224, 227);
  width: 32.5rem;
  padding: 10px;
  height: 55px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  .flow-icon {
    height: 35px;
  }
  .flow-card-detail {
    margin-left: 15px;
    height: 35px;
    font-size: 14px;
    .desc {
      font-size: 12px;
      color: #9e9e9e;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
    }
  }
}
.flow-card-box:hover {
  background: rgb(239, 240, 241);
}
</style>