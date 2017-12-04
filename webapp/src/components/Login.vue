<template>
  <div class="login">
    <notifications group="auth" position="bottom right" />
    <!-- <dr-notificar></dr-notificar> -->
    </br>
    <v-layout column align-center>
      <v-flex>
  
        <v-form name="tab-tracker-form" autocomplete="off">
          <v-text-field label="Email" v-model="email">
          </v-text-field>
          <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
          <v-btn @click="onLogin" color="primary">ENTRAR</v-btn>
          <v-btn @click="onSetRouter()" color="primary">ESQUECI MINHA SENHA</v-btn>
        </v-form>
        <!-- <v-card>
            <v-card-media src="/static/bellrock.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="titlefont mb-3"><b>{{msg}}</b></h3>
     
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn @click="onLogin" color="info">ENTRAR</v-btn>
              <v-btn @click="onSetRouter()" color="info">ESQUECI MINHA SENHA</v-btn>
            </v-card-actions>
          </v-card> -->
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import Noficar from './utils/notificar/Notificar'
  
  export default {
    name: 'login',
    components: {
      'dr-notificar': Noficar
    },
    data() {
      return {
        msg: 'Digite seu e-mail e senha',
        email: '',
        password: '',
        status: false
      }
    },
    methods: {
      onSetRouter() {
        this.$router.push('/relembrar-senha/')
      },
      async onLogin() {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          });
          this.$notify({
            group: 'auth',
            type: 'info',
            title: 'Sucesso!:',
            text: 'Entrando no sistema...',
          });
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.usuario)
          this.$router.push({
           name: 'dashboard'
          })
        } catch (error) {
          this.$notify({
            group: 'auth',
            type: 'error',
            title: 'Erro.',
            text: error.response.data.error,
          });
        }
      }
    }
  }
</script>
