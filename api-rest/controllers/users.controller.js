var UserService = require('../services/users.service')

_this = this

exports.FindUser = async (req, res, next) => {
    const username = req.params.username
    const password = req.params.password
    try {
        const user = await UserService.findUser(username, password)
        return res.status(200).json({status: 200, data: user, message: "Usuario consultado exitosamente"})
    }catch(e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}