<template>
<div class="relembrarSenha">
  <v-layout column align-center>
    <v-flex>
      <v-card>
        <v-card-media src="/static/bellrock.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-3"><b>{{msg}}</b></h3>
            <v-form>
              </br>
              <v-text-field label="Informe o seu login (email):"></v-text-field>
            </v-form>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn color="info">ENVIAR</v-btn>
          <v-btn @click="onSetRouter()" color="info">VOLTAR PARA O LOGIN</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

 <script>
  export default {
  name: 'relembrarSenha',
  data() {
    return {
      msg: 'Esqueci minha senha'
    }
  },
    methods: {
      onSetRouter () {
        this.$router.push('/login/')
      }
    }
}
</script> 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
