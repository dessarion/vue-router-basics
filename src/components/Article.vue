<template>
  <div class="article" @click="toArticle">
    <h2>{{ art.title }}</h2>
    <p>
      {{ art.description | art }}
    </p>
 </div>
</template>

<script>
import articleFilter from "@/filters/articles.filter";
export default {
  name: "art",
  props: {
    art: {
      type: Object,
    },
  },
  methods: {
    toArticle() {
      this.$router.push("/article" + this.art.id);
    },
  },
};
</script>

<style></style>
