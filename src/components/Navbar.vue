<template>
  <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
  <router-link :to="{name:'home'}" class="d-flex align-items-center text-dark text-decoration-none">
    <i class='fas fa-search' style='font-size:48px;color:red'></i><h2>Seo</h2>
  </router-link>

  <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
    <router-link :to="{name:'login'}" class="me-3 py-2 text-dark text-decoration-none" href="#">Login</router-link>
    <router-link :to="{name:'register'}" class="me-3 py-2 text-dark text-decoration-none" href="#">Register</router-link>
  </nav>
</div>


</template>

<script >

</script>

<style scoped>

</style>
