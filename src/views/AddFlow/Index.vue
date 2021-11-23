<template>
  <div class="add-flow-box">
    <div class="heard">
      <div class="heard-left" @click="goBack">
        <i class="el-icon-back" :size="40"></i>
        返回
        <el-divider direction="vertical"></el-divider>
      </div>
      <div class="heard-content">
        {{approvalItemInfo.c_title}}
      </div>
      <div class="heard-right">
      </div>
    </div>
    <div class="centext">
      <div class="main">
        <div class="flow-info">
          <div>{{ approvalItemInfo.c_title }}</div>
          <span>{{ approvalItemInfo.c_desc }}</span>
        </div>
        <div class="form-info">
          <FormCreateComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getQueryVariable } from "../../common/utils";
import FormCreateComponent from "../../components/FormCreateComponent/Index.vue"
export default {
  data() {
    return {
    };
  },
  components: {
    FormCreateComponent
  },
  computed: {
    ...mapState({
      approvalItemInfo: (state) => state.approval.approvalItemInfo,
      approverIcon: (state) => state.approval.approverIcon,
      approvalName: (state) => state.approval.approvalName,
      approvalDesc: (state) => state.approval.approvalDesc,
      classify: (state) => state.approval.classify,
      starter: (state) => state.approval.starter,
      FcDesignerRuleJson: (state) => state.approval.FcDesignerRuleJson,
      FcDesignerOptionsJson: (state) => state.approval.FcDesignerOptionsJson,
      processConfigJson: (state) => state.approval.processConfigJson,
    }),
  },
  methods: {
    goBack() {
      this.$store.commit("home/setHeadTab", "2");
      this.$router.push("/");
    }
  },
  async mounted(){
    const fromTemplateid = getQueryVariable("c_template_id");

    if(fromTemplateid) {
      await this.$store.dispatch('approval/getTemplateById', {id : fromTemplateid});
    }
  }
};
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>