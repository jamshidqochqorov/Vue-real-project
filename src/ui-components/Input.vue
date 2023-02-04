<template>

  <div class="form-floating">
    <input :type="type" :placeholder="placeholder" class="form-control m-1" >
    <label for="floatingPassword">{{ label }}</label>
  </div>

</template>

<script >

export default {
  name:'Input',
  props:{
    label:String,
    type:String,
    placeholder:String
  },

}
</script>

<style scoped>

</style>
