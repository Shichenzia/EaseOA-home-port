import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import user from "./modules/user";
import approval from "./modules/approval";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    user,
    approval,
  },
});
