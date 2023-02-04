<template>

  <div class="row mt-5">
    <h1 class="mb-4">Login</h1>
    <main class="form-signin w-25 m-auto">
      <form>
       <Input :label="'Email'" :type="'input'" :placeholder="'name'"/>
       <Input :label="'Password'" :type="'password'" :placeholder="'password'"/>

      <Button type="submit">
        Login
      </Button>
      </form>
    </main>
  </div>

</template>

<script>





export default {

}
</script>

<style scoped>

</style>
