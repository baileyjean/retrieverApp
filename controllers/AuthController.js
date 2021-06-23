const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { name, username, email, password, location, bio, image } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ name, username, email, password: passwordDigest, location, bio, image })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(req.body.password, user.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'UnPAWthorized' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  Register,
  Login
}