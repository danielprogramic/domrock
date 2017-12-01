<template>
    <v-footer v-if="loggedIn" :fixed="fixed" app>
      <span>&copy;Copyright 2013 ― Todos os direitos reservados </span>
    </v-footer>
</template>
<script>
export default {
  props: [
    'loggedIn'
  ],  
}
</script>
<style scoped>
  
</style>