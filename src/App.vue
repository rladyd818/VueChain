<template>
  <div id="app">
    <div class="nav">
      <div class="logo">
        <h1>ChainSmoke</h1>
      </div>
      
      <div class="navbar">
        <!--<ul>
          <li><router-link tag="a" to="/">Home</router-link></li>
          <li><router-link tag="a" to="/about">About</router-link></li>
        </ul> -->
        <ul>
          <li><router-link tag="a" to="/">Home</router-link></li>
          <router-link tag="a" to="/login/signup"><li class="regbut">sign Up</li></router-link>
          <li><router-link tag="a" to="/login">{{ nickname ? nickname:"Log in" }}</router-link></li>
          <li><router-link @click.native="setSession" to="/">{{ nickname ? "Log out" : logout }}</router-link></li>
        </ul>
      </div>
      
    </div>
    <router-view/>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data: function() {
    return {
      logout:''
    }
  },
  computed: {
    ...mapState({
      nickname: state => state.user.nickname,
    })
  },
  methods: {
    ...mapMutations(['setUser']),
    ...mapMutations(['ClearLogin']),
    //clear in server user session
    setSession: function() {
      this.$http.post("/api/setSession")
      .then((response) => {
        this.setUser(response.data);
      })
    },
  },
  //load to server user session
  created: function () {
    if(!this.$store.state.user.nickname) {
      this.$http.get("/api/checkUser")
      .then((response) => {
        this.setUser(response.data);
      });
    }
  }
}
</script>