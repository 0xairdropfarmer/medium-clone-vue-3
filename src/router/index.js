import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Settings from "../views/Settings.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/:username",
    name: "profile",
    component: Profile
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
