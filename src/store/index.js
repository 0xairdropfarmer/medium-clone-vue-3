import { createStore } from "vuex";

import users from "./modules/user";
import articles from "./modules/articles";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    articles
  }
});
