<template>
  <div>
  <h1>Dom rock - Login</h1>

   <input 
     type="email" 
      v-model="email" 
      name="email"
      placeholder="email" /> 

    </br>
    </br>

    <input 
     type="password" 
     name="password" 
     v-model="password"
     placeholder="password"/> 
     
     </br>
     </br>
    <button @click="register"> Entrar </button> 
  </div>
</template>

<script>
 import AuthenticationService from '@/services/AutheticationService'
export default {
  data () {
    return {
      email: 'danielprogramic',
      password: '123'
    }
  },
  // watch: {
  //   email (value){
  //     console.log('email has changed' , value)
  //   }
  // },
  methods:{
  async register (){
  const response = await AuthenticationService.register({
      email:this.email,
      password: this.password
    })

    console.log(response.data);
    }
  },
  // mounted(){
  //   setTimeout(() =>{
  //     this.email = 'hello world'
  //   }, 1000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
