const { User } = require('../models')

let trasnformJSON = function(value) {
  return JSON.stringify(value)
}
let login = {
  email: "danielprogramic@gmail.com",
  password: "123"
}
module.exports = {
  register(req, res) {
    try {
      // const user = await User.create(req.body)
      // res.send(user.toJSON())
      res.send({
        message: `Hello ${req.body.email} ! Seu usuário está registrado. Seja Bem vindo!!!`
      })
    } catch (err) {
      res.status(403).send({
        error: 'This email account is already in user'
      })
    }
  },
  login(req, res) {
    if (trasnformJSON(login) == trasnformJSON(req.body)) {
      res.send({
        usuario: trasnformJSON(login)
      })
    } else {
      res.status(403).send({
        error: 'Login ou Senha Inválido'
      })
    }
  },

}