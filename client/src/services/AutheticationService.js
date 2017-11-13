//import service API do conector
import Api from '@/services/Api'
//forma para exportar autenticação 
export default {
  register(credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })