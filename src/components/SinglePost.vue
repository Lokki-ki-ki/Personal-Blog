<template>
  <div class="post" @click="seepost">
    <h3>{{ author }}</h3>
    <h3>{{ post.content }}</h3>
    <span v-for="tag in post.tag" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    const author = computed(() => {
      return props.post.author;
    });

    return { author };
  },

  methods: {
      seepost() {
          this.$router.push({ name: "BlogDetail", params: { id: this.$props.post.id} });
      }
  }
};
</script>