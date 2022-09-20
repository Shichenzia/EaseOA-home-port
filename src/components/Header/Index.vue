<template>
  <div class="header-box">
    <div class="header-left">
      <div class="logo" @click="goUserInfo('/')">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="tabs" v-if="!isUserInfo">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="发起申请" name="1"></el-tab-pane>
          <el-tab-pane label="审批中心" name="2"></el-tab-pane>
          <el-tab-pane label="效率诊断" name="3"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="sub-name" v-else>账户与安全</div>
    </div>
    <div class="header-right">
      <div class="menu-box">
        <el-button
          class="btm"
          type="text"
          icon="el-icon-set-up"
          @click="goOtherUrl"
          >审批后台管理</el-button
        >
      </div>
      <div class="avatar-box">
        <span>{{ this.userInfo.c_name || "匿名用户" }}</span>
        <el-avatar src="../../assets/logo.png"></el-avatar>
        <div>
          <div @click="goUserInfo('./userInfo')">个人中心</div>
          <div @click="goLogin">退出</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { goOtherUrl } from "../../common/utils";
import { APPROVAL_URL, LOGIN_URL } from "../../common/constants";
export default {
  props: {
    isUserInfo: {
      typeof: String,
      default: false,
    },
  },
  data() {
    return {
      activeName: "2",
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
    }),
  },
  methods: {
    handleClick() {
      this.$store.commit("home/setHeadTab", this.activeName);
    },
    goOtherUrl() {
      goOtherUrl(APPROVAL_URL);
    },

    goUserInfo(url) {
      this.$router.push(url);
    },

    goLogin() {
      window.location.href = LOGIN_URL;
    },
  },
};
</script>

<style scope lang="scss">
@import "./index.scss";
</style>