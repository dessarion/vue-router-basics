<template>
  <div class="container">
    <div class="page">
      <h1>Маловідомі факти міста</h1>
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
    name: 'facts',
    data() {
    return {
      articles:[
        {
          title: "'Стіна смерті'",
          description: "DESCRIPTION_WALLOFDEATH",
          id: '/wall_of_death'
        },
        {
          title: "Флудер",
          description: "DESCRIPTION_FLUDER",
          id: '/fluder'
        },        
      ]
    }
  },
  components: {
    Article,
  },

}
</script>

<style>

</style>