const { User } = require('../models')


module.exports = {
  register(req, res) {
    console.log("entrou aqui")
    try {
      // const user = await User.create(req.body)
      // res.send(user.toJSON())
      res.send({
        message: `Hello ${req.body.email} ! Seu usuário está registrado. Seja Bem vindo!!!`
      })
    } catch (err) {
      res.status(400).send({
          error: 'This email account is already in user'
        })
        //email already exists'
    }
    // res.send({
    //   message: `Hello ${req.body.email} ! Seu usuário está registrado. Seja Bem vindo!!!`
    // })

  }
}