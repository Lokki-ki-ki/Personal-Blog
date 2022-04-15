<template>
  <header>
    <nav>
      <h1>My Blog</h1>
      <div class="nav">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </div>
      <div class="nav">
        <router-link :to="{ name: 'Blog' }">Blog</router-link>
      </div>
      <div class="nav">
        <router-link :to="{ name: 'About' }">About</router-link>
      </div>
      <div class="nav-logout" v-if="this.$store.state.user !== null">
        <span>Login as {{ username }}</span>
        <button class="btn-out" @click="logout">Logout</button>
      </div>
      <div class="nav-logout" v-if="this.$store.state.user === null">
        <router-link :to="{ name: 'Login' }">Login</router-link>
        <br />
        <router-link :to="{ name: 'Signup' }">Sign up</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { useStore } from "vuex";
import { ref } from 'vue';
export default {
  name: "NavBar",
  setup() {
    const store = useStore();
    const username = ref('')
    if (store.state.user) {
      username.value = store.state.user.email
    }
    

    const logout = () => {
      store.dispatch("logout");
    };

    return {
      logout,
      username
    };
  },
};
</script>

<style lang="less" scoped>
header {
  background-color: rgb(219, 207, 202);
}
nav {
  display: flex;
}

.nav {
  margin: auto 30px;

  a {
    text-decoration: none;
    color: rgb(13, 12, 12);
    &.router-link-exact-active {
      color: rgb(89, 69, 61);
    }
    &:hover {
      color: rgb(89, 69, 61);
    }
  }
}
.nav-logout {
  margin: auto 50px auto auto;
  color: black;

  a {
    text-decoration: none;
    color: black;
    &.router-link-exact-active {
      color: rgb(89, 69, 61);
    }
    &:hover {
      color: rgb(89, 69, 61);
    }
  }

  .btn-out {
    border-radius: 20px;
    border: 0ch;
    width: 80px;
    height: 30px;
    font-size: 15px;
    margin: auto auto auto 10px;
  }
}

nav h1 {
  margin: 40px;
}
</style>
