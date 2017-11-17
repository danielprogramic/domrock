<template>
  <div class="hello">
    <v-layout column align-center>
      </br>
      <v-flex xs5 offset-xs1>
    <h1 class="headline mb-3">{{ msg }}</h1>
    <v-btn large router to="/login/" round color="info" dark>LOGIN PARA SISTEMA</v-btn>
     </v-flex>
   </v-layout>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: `Se marcares ao largo um lampejo
            De um farol a mostrar o caminho,
            Saberá ser o nosso desejo
            Que jamais tu navegues sozinho'`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
