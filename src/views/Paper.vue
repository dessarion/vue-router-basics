<template>
  <div class="history-container">
    <h3>{{'title' | paper($route.params.id)}}</h3>
    <div class="history-container-image">
      <img src="" alt="">
    </div>
    <p>
      {{"article" | paper($route.params.id)}}
    </p>
  </div>
</template>

<script>
import paperFilter from '@/filters/paper.filter'

export default {

}
</script>

<style>

</style>