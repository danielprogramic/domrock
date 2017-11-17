<template>
  <div class="login">
    <v-layout column align-center>
      <v-flex>
        <v-card>
          <v-card-media src="/static/bellrock.jpg" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h5 class="headline mb-3"><b>{{msg}}</b></h5>
              <v-form>
                </br>
                <v-text-field label="E-mail"></v-text-field>
                <v-text-field label="Senha"></v-text-field>
              </v-form>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn color="info">ENTRAR</v-btn>
            <v-btn @click="onSetRouter()" color="info">ESQUECI MINHA SENHA</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        msg: 'Digite seu e-mail e senha'
      }
    },
    methods: {
      onSetRouter() {
        this.$router.push('/relembrar-senha/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
