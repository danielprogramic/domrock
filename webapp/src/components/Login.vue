<template>
  <div class="login">
    <!-- <notifications group="auth" position="bottom right" /> -->
    <!-- <dr-notificar></dr-notificar> -->
    <!-- grid-list-md: para colocar na forma de cima-->
    <v-container fluid fill-height>
      <div>
        <v-layout row wrap>
  
          <v-flex d-flex xs12 sm6 md6>
            <v-layout column align-center>
              <v-flex xs12>
                <img src="../../static/logo-domrock_ti.png" alt="">
              </v-flex>
              <v-flex xs6>
                <div>
                  <div>
                    Se marcares ao largo um lampejo De um farol a mostrar o caminho, Saberá ser o nosso desejo Que jamais tu navegues sozinho
                  </div>
                </div>
                <!-- <v-card dark color="primary">
                  <v-card-text class="texto"></v-card-text>
                </v-card> -->
              </v-flex>
            </v-layout>
          </v-flex>
  
  
          <v-flex d-flex xs12 sm6 md6>
            <v-card color="blue lighten-2" dark>
              <v-card-text v-text="lorem.slice(0, 100)">
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  
    <!-- <v-layout column align-center>
              <v-flex lg12 sm6 offset-sm3>
                <v-card>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0"><b>{{msg}}</b></h3>
                    </div>
                  </v-card-title>
                  <v-form name="tab-tracker-form" autocomplete="off">
                    <v-text-field label="Email" v-model="email">
                    </v-text-field>
                    <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
                  </v-form>
                  <v-card-actions>
                    <v-btn @click="onLogin" color="info">ENTRAR</v-btn>
                    <v-btn @click="onSetRouter()" color="info">ESQUECI MINHA SENHA</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout> -->
  
  
  
  
    <!-- <v-form name="tab-tracker-form" autocomplete="off">
                          <v-text-field label="Email" v-model="email">
                          </v-text-field>
                          <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
                          <v-btn @click="onLogin" color="primary">ENTRAR</v-btn>
                          <v-btn @click="onSetRouter()" color="primary">ESQUECI MINHA SENHA</v-btn>
                        </v-form> -->
  
  
  
  
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
        msg: 'Entrar',
        email: '',
        password: '',
        status: false,
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
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

<style lang="stylus" scoped>
@import "../../stylus/login"
</style>