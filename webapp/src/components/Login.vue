<template>
  <div class="login">
    <notifications group="auth" position="bottom right" />
    <v-layout column align-center>
      <v-flex>
        <v-card>
          <v-card-media src="/static/bellrock.jpg" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h5 class="headline mb-3"><b>{{msg}}</b></h5>
              <v-form
                              name="tab-tracker-form"
                              autocomplete="off">
                </br>
                <v-text-field label="Email"
                              v-model="email">
                </v-text-field>
                <v-text-field label="Password"
                              type="password"
                              v-model="password"
                              autocomplete="new-password"></v-text-field>
              </v-form>     
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn @click="register" color="info">ENTRAR</v-btn>
            <v-btn @click="onSetRouter()" color="info">ESQUECI MINHA SENHA</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    name: 'login',
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
      async register () {
        this.status = ! this.status;
        
        if(this.status){
          var typenoti = 'error';
        }else{
          var typenoti = 'info';
        }
        this.$notify({
          group: 'auth',
          type: typenoti,
          title: 'Aviso:',
          text: 'Seu usuário ou senha não confere!',
        });

        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          });
          
          // this.$store.dispatch('setToken', response.data.token)
          // this.$store.dispatch('setUser', response.data.user)
          // this.$router.push({
          //   name: 'songs'
          // })
        } catch (error) {
          //this.error = error.response.data.error
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
