<template>
  <div class="login">
    <notifications group="auth" position="bottom right" />
    <!-- <dr-notificar></dr-notificar> -->
    <!-- grid-list-md: para colocar na forma de cima-->
    <!-- grid-list-md fluid fill-height -->
    <!-- <v-container  fluid fill-height>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md4>
                        <v-card color="purple" dark>
                          <v-card-title primary class="title">Lorem</v-card-title>
                          <v-card-text
                            v-text="lorem">
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex  xs12 sm6 md3 >
                        <v-card color="blue lighten-2" dark>
                          <v-card-text
                            v-text="lorem.slice(0, 100)">
                          </v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container> -->
  
    <v-container grid-list-md fill-height>
      <div>
        <v-layout row wrap>
          <!-- <v-layout column align-center> -->
          <v-flex xs12 sm6 md8>
            <div style="height:130px; width:140px;">
              <img class="imagem-responsiva" src="../../static/logo-white.png" alt="">
            </div>
            <br>
            <v-flex xs12 sm12 md8>
              <div class="quote">
                <div class="rectangle-3">
                </div>
                <div class="title_text">
                  Se marcares ao largo um lampejo De um farol a mostrar o caminho, Saberá ser o nosso desejo Que jamais tu navegues sozinho <br>
                  <span class="autor"> AUTOR, 2010 - SÂO PAULO SP</span>
                </div>
              </div>
            </v-flex>
          </v-flex>
          <!-- </v-layout> -->
  
          <!-- <v-layout  column align-center> -->
          <v-flex xs12 sm6 md4>
            <v-card height="300px">
              <v-card-title primary-title>
                <div>
                  <div style="font-weight: 900;padding-left:15px;" class="headline">{{msg}}</div>
                </div>
              </v-card-title>
              <v-container >
                <v-layout align-center justify-center>
                  <v-card-text>
                    <label for="">Email</label><br>
                    <input style="width:94%;" class="layout_input" type="text" v-model="email" ><br><br>
                    <label for="">Senha</label>
                    <div>
                      <input style="width:60%;" class="layout_input"  type="password" v-model="password" >
                      <v-btn style="width:30%;" @click="onLogin" color="primary">Entrar</v-btn>
                    </div>
                  </v-card-text>
                </v-layout>
              </v-container>
            </v-card>
            <!-- <v-card>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Entrar</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-form >
                    <label for="">Email</label>
                    <input class="layout_input" type="text" name="lname"><br>
                    <label for="">Senha</label>
                    <div>
                      <input class="layout_input" type="text" name="lname">
                      <v-btn @click="onLogin" color="primary">Entrar</v-btn>
                    </div>
                  </v-form>
                </v-card-actions>
              </v-card> -->
          </v-flex>
          <!-- </v-layout> -->
  
        </v-layout>
  
        <!--   
          <v-layout fluid style="height:100%;position:fixed;">
            <v-flex xs12 sm12 md12>
              <v-card dark color="primary">
                <v-card-text>© Copyright 2013 ― Todos os direitos reservados</v-card-text>
              </v-card>
            </v-flex>
          </v-layout> -->
  
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