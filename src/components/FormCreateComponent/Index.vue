<template>
  <form-create
      v-model="fapi"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
  ></form-create>
</template>

<script>
import formCreate from "@form-create/element-ui";
import { mapState } from 'vuex';
import { getQueryVariable } from "../../common/utils";

export default {
  props: {

  },
  data () {
    return {
      fapi: null,
    }
  },
  computed: {
    ...mapState({
      rule: (state) => {
        return formCreate.parseJson(state.approval.formInfo.FcDesignerRuleJson)
      },
      option: (state) => {
        return formCreate.parseJson(state.approval.formInfo.FcDesignerOptionsJson)
      },
      userInfo: (state) => state.user.userInfo,
    }),
  },
  methods: {
    async onSubmit (formData) {
      //todo 提交表单
      console.log(formData);
      for(let key in formData) {
        if(!formData[key]) {
          this.$message.error("请按要求输入数据！");
          return;
        }
      }
      const id = getQueryVariable("c_id");
      const fromTemplateid = getQueryVariable("c_template_id");

      await this.$store.dispatch("approval/addWorkOrder", {
        formData,
        id,
        fromTemplateid,
        creator: this.userInfo.c_id
      });

      // this.$router.push('/');
    }
  }
}
</script>