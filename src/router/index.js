import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Index";
import UserInfo from "../views/UserInfo/Index";
import AddFlow from "../views/AddFlow/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/userInfo",
    name: "UserInfo",
    component: UserInfo,
  },
  {
    path: "/addFlow",
    name: "AddFlow",
    component: AddFlow,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
