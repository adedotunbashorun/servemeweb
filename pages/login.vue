<template>
  <Login />
</template>
<script>
import Login from '~/components/Login.vue'
export default {
  middleware: 'guest',
  layout: 'login',
  components:{
      Login
  }
}
</script>
