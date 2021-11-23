import {
  addWorkOrder,
  getAllClass,
  getAllProcess,
  getProcessById,
  getMyStartWorkOrderByUid,
  getWorkOrderById,
  getCopyMeWorkOrderByUid,
  getDoneWorkOrderByUid,
  getWaitDoneWorkOrderByUid,
  approvalWorkOrder,
} from "../../service/approval";

import { getTemplateById } from "../../service/form";

const state = {
  classList: [],
  approvalAllList: [],
  approvalItemInfo: {},
  workOrderList: [],
  workOrderDetail: {},
  workOrderClass: "1",
  formInfo: {
    FcDesignerOptionsJson: `{"form":{"labelPosition":"right","size":"mini","labelWidth":"125px","hideRequiredAsterisk":false,"showMessage":true,"inlineMessage":false}}`,
    FcDesignerRuleJson: `[{"type":"input","field":"cuk5qqdw3umc","title":"输入框","info":"","_fc_drag_tag":"input","hidden":false,"display":true}]`,
  },
};

const mutations = {
  setClassList(state, data) {
    state.classList = data;
  },

  setApprovalAllList(state, data) {
    state.approvalAllList = data;
    if (state.classList.length === 0 || data.length === 0 || !data) {
      state.approvalAllList = [];
      return;
    }

    // 还能说啥捏， 魔法呗
    const arr = state.classList.map((item) => {
      item["approvalList"] = [];
      return item;
    });

    state.classList.map((citem, cindex) => {
      data.map((aitem) => {
        if (citem.c_id === aitem.c_class_id) {
          arr[cindex].approvalList.push(aitem);
        }
      });
    });
    state.approvalAllList = arr;
  },

  setApprovalItemInfo(state, data) {
    state.approvalItemInfo = data;
  },

  setFormInfo(state, data) {
    state.formInfo = data;
  },

  setWorkOrderList(state, data) {
    state.workOrderList = data.reverse();
  },

  setWorkOrderDetail(state, data) {
    if (!data.c_id) {
      state.workOrderDetail = {};
      return;
    }

    let { circulationList } = data;
    circulationList = circulationList.map((item) => {
      let nodeType = "primary";
      let nodeIcon = "el-icon-check";
      if (item.c_type === "0") {
        nodeType = "success";
      } else if (item.c_type === '1') {
        if (item.c_result === '1') {
          nodeType = "success";
        } else {
          nodeType = "danger";
          nodeIcon = "el-icon-close";
        }
      } else if (item.c_type === '2') {
        nodeType = "primary";
      }
      return {
        ...item,
        nodeType,
        nodeIcon,
      };
    });

    data.circulationList = circulationList;
    state.workOrderDetail = data;
  },

  setWorkOrderClass(state, data) {
    state.workOrderClass = data;
  },

  resetWorkOrderList(state) {
    state.workOrderDetail = {};
    state.workOrderList = [];
  },
};

const actions = {
  // 获取当前所有分组
  async getAllClass({ commit }) {
    const [err, res] = await getAllClass({
      data: {},
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取类型列表错误",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setClassList", data);

    return true;
  },
  // 获取当前所有审批模板
  async getAllProcess({ commit }) {
    const [err, res] = await getAllProcess({
      data: {},
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取列表错误",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setApprovalAllList", data);

    return true;
  },

  // 根据Id获取审批模板信息
  async getProcessById({ commit }, params) {
    const [err, res] = await getProcessById({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取流程信息出现错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setApprovalInfo", data);

    return true;
  },

  // 根据Id获取表单模板信息
  async getTemplateById({ commit }, params) {
    const [err, res] = await getTemplateById({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取表单模板出现错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setFormInfo", data[0]);

    return true;
  },

  // 提交工单
  async addWorkOrder({ dispatch }, params) {
    const [err] = await addWorkOrder({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "提交失败",
        type: "error",
      });
      console.log(dispatch);
      return false;
    }
    window.$message({
      showClose: true,
      message: "提交成功",
      type: "success",
    });
    return true;
  },

  // 获取我发起的工单列表
  async getMyStartWorkOrderByUid({ commit }, params) {
    const [err, res] = await getMyStartWorkOrderByUid({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取信息出现错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setWorkOrderList", data);

    return true;
  },

  // 获取抄送我的工单列表
  async getCopyMeWorkOrderByUid({ commit }, params) {
    const [err, res] = await getCopyMeWorkOrderByUid({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取信息出现错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setWorkOrderList", data);

    return true;
  },

  // 获取已办的工单列表
  async getDoneWorkOrderByUid({ commit }, params) {
    const [err, res] = await getDoneWorkOrderByUid({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取信息出现错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setWorkOrderList", data);

    return true;
  },

  // 获取待办的工单列表
  async getWaitDoneWorkOrderByUid({ commit }, params) {
    const [err, res] = await getWaitDoneWorkOrderByUid({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取信息出现错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setWorkOrderList", data);

    return true;
  },

  // 获取工单详情
  async getWorkOrderById({ commit }, params) {
    const [err, res] = await getWorkOrderById({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取信息出现错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setWorkOrderDetail", data);

    return true;
  },

  // 审批待办中的工单
  async approvalWorkOrder({ dispatch }, params) {
    const [err] = await approvalWorkOrder({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "失败",
        type: "error",
      });
      return false;
    }
    window.$message({
      showClose: true,
      message: "提交成功",
      type: "success",
    });
    dispatch("getWaitDoneWorkOrderByUid", { uid: params.uid });
    return true;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
