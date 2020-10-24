<template>
  <div id="app"> 
     <component :is="layout" />      
  </div>
</template>

<script>
import NavLayout from '@/layouts/nav-layout'
import ArticleLayout from '@/layouts/article-layout'


export default {
   components: {
    NavLayout,
    ArticleLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'nav') + '-layout'
    }
  },
}
</script>

<style lang="scss">
  @import 'assets/index.css';
</style>
