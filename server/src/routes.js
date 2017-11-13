module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.send({
      message: 'Bem vindo a API Dom Rock'
    })
  })
  app.post('/api/register', (req, res) => {
    res.send({
      message: `Olá ${req.body.email}! Seu usuário está registrado. Seja Bem vindo!!!`
    })
  })
}