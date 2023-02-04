<template>

  <div class="row mt-5">
    <h1 class="mb-4">Register</h1>
    <main class="form-signin w-25 m-auto">
      <form>
       <Input :label="'User name'"  :type="'text'" :placeholder="'User name'"/>
       <Input :label="'Email enter'"  :type="'email'" :placeholder="'Enter Email'"/>
       <Input :label="'Password'"  :type="'password'" :placeholder="'Password'"/>
    <Button @click="handler" :disabled="isLoading" >Register</Button>
      </form>
    </main>
  </div>

</template>

<script>


export default {
  computed:{
    isLoading(){
      return this.$store.state.auth.isLoading
    }

  },
  methods:{
    handler(e){
      e.preventDefault()
      const data = {
          username:"asrorbek12",
          email:"asrorbek12@gmail.com",
          password:"12345678"
      }
      this.$store.dispatch('register',data)//payload
    }
  },

}
</script>

<style scoped>

</style>
