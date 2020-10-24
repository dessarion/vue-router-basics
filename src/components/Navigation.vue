<template>
  <div class="container">
  <nav class="navigation">
    <ul>
      <li><a href="#" @click.prevent="toLegends">Легенди</a></li>
      <li><a href="#" @click.prevent="toSquares">Площі</a></li>
      <li><a href="#" @click.prevent="toFacts">Маловідомі факти</a></li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
    name: 'navigation',
    methods: {
        toLegends() {
            this.$router.push('/legends')
        },
        toSquares() {
            this.$router.push('/squares')
        },
        toFacts() {
            this.$router.push('/facts')
        }
    },
}
</script>

<style>

</style>