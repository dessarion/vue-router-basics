<template>
  <div>
      <Navigation />
      <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
    name: 'nav-layout',
    components: {
        Navigation,
    },

}
</script>

<style>

</style>