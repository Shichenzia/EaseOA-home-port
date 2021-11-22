<template>
  <div class="user-box">
    <Header isUserInfo="true" />
    <div class="main">
      <div class="centext">
        <el-descriptions
          class="margin-top"
          title="用户信息"
          :column="3"
          border
        >
          <template slot="extra">
            <el-button type="primary" size="small" @click="openSet">编辑</el-button>
          </template>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              姓名
            </template>
            {{ this.userInfo.c_name || '待完善' }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets"></i>
              性别
            </template>
            <el-tag size="small">
              {{ this.userInfo.c_sex || "待完善" }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-news"></i>
              登录用户名
            </template>
            {{ this.userInfo.c_username || "待完善" }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              手机号
            </template>
            {{ this.userInfo.c_phone || "待完善" }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-position"></i>
              邮箱
            </template>
            {{ this.userInfo.c_email || "待完善" }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-date"></i>
              注册时间
            </template>
            {{ this.userInfo.c_ctime || "待完善" }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              居住地
            </template>
            成都市
          </el-descriptions-item>
          
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            四川省成都市
          </el-descriptions-item>
        </el-descriptions>

        <div class="pass-box">
          <div class="el-descriptions__title">密码设置</div>
        </div>
      </div>
    </div>

    <el-dialog title="修改资料" :visible.sync="dialogsetUserInfoVisible" width="500px">
      <div class="from-input">
        <div class="lable">姓名:
        </div>
        <el-input v-model="name" autocomplete="off" placeholder="请输入姓名"></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogsetUserInfoVisible = false">取 消</el-button>
        <el-button type="primary" @click="setUserInfo">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../../components/Header/Index.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      dialogsetUserInfoVisible: false,
      name: ""
    }
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
    }),
  },
  async mounted() {
    await this.$store.dispatch("user/getUserByToken");
  },
  methods: {
    async setUserInfo() {
      await this.$store.dispatch("user/setUserInfo", { name: this.name });
      this.dialogsetUserInfoVisible = false;
    },

    openSet() {
      this.name = this.userInfo.c_name;
      this.dialogsetUserInfoVisible = true;
    }
  },
};
</script>

<style lang="scss">
.user-box {
  background: #f6f7f8;
  height: 100vh;
  .main {
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    background: #fff;
    height: 80vh;

    .centext {
      padding: 50px 220px;

      .pass-box {
        margin-top: 50px;
      }
    }
  }

   .from-input{
    .lable{
      font-size: 14px;
      color: #606266;
      margin-bottom: 10px;
    }
  }
}
</style>