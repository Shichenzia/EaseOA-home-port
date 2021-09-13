const state = {
  headTab: "1"
};

const mutations = {
  setHeadTab(state, val){
    console.log(state);
    state.headTab = val;
  }
};

const actions = {
 
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
