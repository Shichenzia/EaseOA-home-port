<template>
  <div class="approval-detail" v-if="workOrderDetail.c_id">
    <div class="over-y">
      <div class="title">
        <el-avatar
          :size="40"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <div class="text">
          {{ workOrderDetail.username }}的{{ workOrderDetail.c_title }}审批
          <el-tag type="danger" size="small">{{ workOrderDetail.c_title }}</el-tag>
        </div>
      </div>
      <div class="center">
        <div class="from-info">
          <fromInfo
            v-for="item in workOrderDetail.objectValues"
            :key="item.c_id"
            :property="item.c_title"
            :value="item.c_value"
          />
        </div>
        <el-divider></el-divider>
        <div class="flow-box">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in workOrderDetail.circulationList"
              :key="index"
              :icon="activity.nodeIcon"
              :type="activity.nodeType"
              size="large"
            >
              <div class="flow-li-box">
                <div class="flow-li-box-left">
                  <div class="operator">{{activity.username}}</div>
                  <div class="handle">{{activity.c_message}}</div>
                </div>
                <div class="flow-li-box-right">{{activity.c_time}}</div>
              </div>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
    <div class="footer-tool">
      <div v-if="workOrderClass === '1'">
        <el-button type="success" round @click="approvalWorkOrder('1')">同意</el-button>
        <el-button type="danger" round @click="approvalWorkOrder('0')">拒绝</el-button>
      </div>
      <div>
        <textBtn text="评论" icon="el-icon-chat-line-round" />
        <textBtn text="分享" icon="el-icon-share" />
        <textBtn text="打印" icon="el-icon-takeaway-box" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import fromInfo from "../common/fromInfo/Index.vue";
import textBtn from "../common/textBtn/Index.vue";
export default {
  components: {
    fromInfo,
    textBtn,
  },
  computed: {
    ...mapState({
      workOrderDetail: state => state.approval.workOrderDetail,
      workOrderClass: state => state.approval.workOrderClass,
      userInfo: state => state.user.userInfo,
    })
  },
  data() {
    return {
      message: "审批了"
    };
  },
  methods: {
    async approvalWorkOrder(result) {
      await this.$store.dispatch("approval/approvalWorkOrder", {
        workOrderId: this.workOrderDetail.c_id,
        uid: this.userInfo.c_id,
        message: this.message,
        result
      });
    }
  }
};
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>