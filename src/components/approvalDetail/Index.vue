<template>
  <div class="approval-detail">
    <div class="over-y">
      <div class="title">
        <el-avatar
          :size="40"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <div class="text">
          屈君臣的请假审批
          <el-tag type="danger" size="small">标签五</el-tag>
        </div>
      </div>
      <div class="center">
        <div class="from-info">
          <fromInfo property="申请编号" value="12545456" />
          <fromInfo property="申请编号" value="12545456" />
          <fromInfo property="申请编号" value="12545456" />
          <fromInfo property="申请编号" value="12545456" />
        </div>
        <el-divider></el-divider>
        <div class="flow-box">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
            >
              <div class="flow-li-box">
                <div class="flow-li-box-left">
                  <div class="operator">屈君臣</div>
                  <div class="handle">{{activity.content}}</div>
                </div>
                <div class="flow-li-box-right">{{activity.timestamp}}</div>
              </div>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
    <div class="footer-tool">
      <div>
        <el-button type="success" round>同意</el-button>
        <el-button type="danger" round>拒绝</el-button>
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
import fromInfo from "../common/fromInfo/Index.vue";
import textBtn from "../common/textBtn/Index.vue";
export default {
  components: {
    fromInfo,
    textBtn,
  },
  data() {
    return {
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>