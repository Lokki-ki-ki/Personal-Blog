<template>
  <p>This is blog {{ id }}</p>
  <h1 v-if="post !== null">{{ post.title }}</h1>
  <h2 v-if="post !== null">{{ post.content }}</h2>
  <h3 v-else>Loading</h3>
  <CommentList :blogid="this.$props.id" />
</template>

<script>
import { ref } from 'vue'
import { projfirestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import CommentList from "../components/CommentList.vue"
export default {
  props: ["id"],
  components: {
      CommentList
  },
  setup(props) {
    const post = ref("");
    const error = ref(null);
    const load = async () => {
      try {
        const res = await getDoc(doc(projfirestore, "post", props.id));
        post.value = res.data();
      } catch (err) {
        error.value = err.message;
        alert(error.value);
      }
    }
    load();

    return { post, error };
  },
};
</script>

<style>
</style>