<template>
  <nav class="navbar navbar-dark bg-inverse">
    <div class="container">
      <a class="navbar-brand" href="index.html">Medium Clone</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'Home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="ion-compose"></i>&nbsp;New Post
          </a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'Settings'}">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li v-if="username == null" class="nav-item">
          <router-link class="nav-link" to="/register"> Register </router-link>
        </li>
        <li v-if="username" class="nav-item">
          <router-link class="nav-link" :to="`/@${username}`">
            {{ username }}
          </router-link>
        </li>
        <li v-if="username" class="nav-item" @click="logout">
          <router-link class="nav-link" to="/"> Log Out </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    username() {
      return this.$store.getters["users/username"];
    }
  },
  methods : {
    logout : function(){
      this.$store.dispatch("users/logoutUser");
    }
  }
};
</script>
