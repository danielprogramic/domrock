//modelo para Autenticação do Uusuario
const AuthenticationController = require('./controllers/AuthenticationController')
  //Validações dos campos para URI
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  //MENSAGEM DE INICIALIZAÇÃO DA API*
  app.get('/api', (req, res) => {
      res.send({
        message: 'Bem vindo a API Dom Rock'
      })
    })
    //POST ROUTE PARA REGISTER*
  app.post('/api/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}