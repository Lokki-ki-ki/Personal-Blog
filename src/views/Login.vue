<template>
  <div class="login">
    <h1>Login</h1>
    <div class="log-in">
      <label class="log-label">Email</label>
      <input type="email" class="log-input" v-model="email" required />
    </div>
    <div class="log-in">
      <label class="log-label">Password</label>
      <input type="password" class="log-input" v-model="password" required />
    </div>
    <button @click="login">LOGIN</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const login = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        router.push({ name: "Home" });
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style lang="less" scoped>
.log-in {
  margin: 10px auto;
  label {
    margin: auto 10px;
  }
}

button {
  background-color: rgb(107, 90, 82);
  color: white;
  border-radius: 30px;
  width: 100px;
  height: 50px;
  font-size: 18px;
  margin: 20px auto;
  &:hover {
    color: rgb(107, 90, 82);
    background-color: unset;
  }
}
</style>