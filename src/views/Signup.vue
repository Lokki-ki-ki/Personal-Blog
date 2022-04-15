<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <div class="sign">
      <label class="sign-label">Email</label>
      <input type="email" class="sign-input" v-model="email" required />
    </div>
    <div class="sign">
      <label class="sign-label">Password</label>
      <input type="password" class="sign-input" v-model="password" required />
    </div>
    <button @click="signup">SIGN UP</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const store = useStore();
    const router = useRouter();

    const signup = async () => {
      try {
        await store.dispatch("signup", {
          email: email.value,
          password: password.value,
        });
        router.push({ name: "Home" });
      } catch (err) {
        alert(err.message);
        console.log(err);
      }
    };

    return {
      email,
      password,
      signup,
    };
  },
};
</script>

<style lang="less" scoped>
.sign {
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