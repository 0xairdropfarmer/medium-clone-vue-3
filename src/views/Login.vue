<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign In</h1>
          <p class="text-xs-center">
            <router-link to="/register">Need an Account?</router-link>
          </p>

          <ul class="error-messages">
            <li style="list-style: none">That email is already taken</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-secondary pull-xs-right">
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
  
}
</script>