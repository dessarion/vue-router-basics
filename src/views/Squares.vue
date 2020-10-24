<template>
  <div class="container">
    <div class="page">
      <h1>Відомі міські площі</h1>
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
  name: "squares",
  data() {
    return {
      articles:[
        {
          title: "Галькова площа",
          description: "DESCRIPTION_GALYKOVA_SQ",
          id: '/galykova'
        },
        {
          title: "Площа Фенцика",
          description: "DESCRIPTION_FENCYK_SQ",
          id: '/fencuka'
        },
        {
          title: "Площа Жупанатська",
          description: "DESCRIPTION_ZHUPANATSKA_SQ",
          id: '/zhupanatska'
        },
      ]
    }
  },
  components: {
    Article,
  },
};
</script>

<style></style>
