<template>
  <div class="ui secondary pointing menu">
    <router-link to = "/" class="active item"> Image Storage </router-link>
    <!-- {{ isLoggedIn }} -->

    <div class="right menu">
      <div v-if="isLoggedIn">
        <div class="item">
          <router-link to= "/" href="#" class="item"> Galleries </router-link>
          <router-link to = "/upload" href="#" class="item"> Upload </router-link>
          <a href="#" class="item" v-on:click="logout"> Logout </a>
        </div>
      </div>

      <a v-else href="#" class="ui item" v-on:click="login"> Login </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "appHeader",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["login", "logout"]),
  },
};
</script>