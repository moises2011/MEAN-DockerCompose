const User = require('../models/user.model')
_this = this

exports.findUser = async (username, password) => {
    try {
        const user = await User.findOne({
            'username': username, 
            'password': password})
        return user
    }catch(e) {
        throw Error("Ocurrio un error mientras se buscaba el Usuario")
    }
}