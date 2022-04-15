<template>
  <div v-if="comments.length">
    <div v-for="comment in comments" :key="comment.id">
      <p>{{ comment.name }}</p>
      <p>{{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projfirestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
export default {
  props: ["blogid"],
  setup(props) {
    const comments = ref([]);
    const error = ref(null);
    const load = async () => {
      try {
        const res = await getDocs(
          collection(projfirestore, "post/" + props.blogid + "/comments")
        );
        comments.value = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      } catch (err) {
        error.value = err.message;
        alert(error.value);
      }
    };
    load();

    return { comments, error };
  },
};
</script>

<style>
</style>