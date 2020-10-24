<template>
  <div class="container">
    <div class="page">
      <h1>Легенди міста</h1>
      <Article
        v-for="article in articles"
        :key="article.title"
        :art="article"
      />
    </div>
  </div>
</template>

<script>
import Article from "@/components/Article";
export default {
  name: "legends",
  data() {
    return {
      articles: [
        {
          title: "Легенда князя Лаборця",
          description: "DESCRIPTION_LABORETS",
          id: '/laborets'
        },
        {
          title: "Легенда про білу Діву",
          description: "DESCRIPTION_LADY",
          id: '/lady'
        },
      ],
    };
  },
  components: {
    Article,
  },
};
</script>

<style></style>
