<template>

    <div class="container mt-3">
       <Navbar/>
      <router-view/>
    </div>

</template>

<script >
import Navbar from '@/components/Navbar.vue'

export default {
  components:{
    Navbar
  }
}
</script>

<style scoped>

</style>
