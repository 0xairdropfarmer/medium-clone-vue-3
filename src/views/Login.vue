<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">Need an Account?</router-link>
          </p>

          <ul class="error-messages">
            <li v-for="(error, i) in errors" :key="i">{{ error.message }}</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                v-model="email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button @click="login" class="btn btn-lg btn-secondary pull-xs-right">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      password: "",
      email: "",
      errors: []
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("users/loginUser", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.errors = [];
          this.$router.replace({name : "Home"})
        })
        .catch(err => {
          this.errors.push(err);
        });
    }
  }
};
</script>