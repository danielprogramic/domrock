<template>
  <div class="relembrarSenha">
    <dr-notificar></dr-notificar>
    <v-layout column align-center>
      <v-flex>
        <center>
        <img src="/static/logo-domrock_ti.png" alt="">
        </center>
        <v-form name="tab-tracker-form" autocomplete="off">
          </br>
          <v-text-field label="Informe o seu login (email):"></v-text-field>
          <v-btn color="info">ENVIAR</v-btn>
          <v-btn @click="onSetRouter()" color="info">VOLTAR PARA O LOGIN</v-btn>
        </v-form>
        <!-- <v-card>
            <v-card-media src="/static/bellrock.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="titlefont mb-3"><b>{{msg}}</b></h3>
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
          </v-card> -->
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import Noficar from './utils/notificar/Notificar'
  export default {
    name: 'relembrarSenha',
    components: {
      'dr-notificar': Noficar
    },
    data() {
      return {
        msg: 'Esqueci minha senha'
      }
    },
    methods: {
      onSetRouter() {
        this.$router.push('/login/')
      }
    }
  }
</script>

