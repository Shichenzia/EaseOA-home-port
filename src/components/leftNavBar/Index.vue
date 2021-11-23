<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo bg"
    :collapse="isCollapse"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <i class="el-icon-location"></i>
      <span>待办</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-circle-check"></i>
      <span slot="title">已办</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">抄送我</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-user"></i>
      <span slot="title">已发起</span>
    </el-menu-item>
    <!-- <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>待办</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-circle-check"></i>
        <span slot="title">已办</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">抄送我</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span slot="title">已发起</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu> -->
    <div class="group">
      <el-button
        v-if="isCollapse"
        type="primary"
        icon="el-icon-s-fold"
        circle
        @click="setCollapse"
      ></el-button>
      <el-button
        v-else
        type="primary"
        round
        @click="setCollapse"
        icon="el-icon-s-fold"
        >收起导航</el-button
      >
    </div>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      workOrderClass: state => state.approval.workOrderClass,
    })
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  async mounted() {
    await this.$store.dispatch("user/getUserByToken");
    await this.$store.dispatch("approval/getWaitDoneWorkOrderByUid", { uid: this.userInfo.c_id });
  },
  methods: {
    async handleSelect(key) {
      if(key === this.workOrderClass) {
        return;
      }
      this.$store.commit("approval/resetWorkOrderList");
      this.$store.commit("approval/setWorkOrderClass", key);
      console.log(this.userInfo.c_id);
      if(key === "4") {
        await this.$store.dispatch("approval/getMyStartWorkOrderByUid", { uid: this.userInfo.c_id });
      } else if(key === "3") {
        await this.$store.dispatch("approval/getCopyMeWorkOrderByUid", { uid: this.userInfo.c_id });
      } else if(key === "2") {
        await this.$store.dispatch("approval/getDoneWorkOrderByUid", { uid: this.userInfo.c_id });
      } else if(key === "1") {
        await this.$store.dispatch("approval/getWaitDoneWorkOrderByUid", { uid: this.userInfo.c_id });
      }
    },
    setCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="scss" scope>
.el-menu-vertical-demo {
  width: 235px;
  height: 100%;
}
.bg {
  .is-active {
    background: #ecf5ff;
  }
}
.el-menu {
  height: 100%;
}
.group {
  position: fixed;
  bottom: 30px;
  left: 15px;
}
</style>