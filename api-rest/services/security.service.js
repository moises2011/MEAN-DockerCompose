const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
_this = this

exports.login = async (username, password) => {
    try {
        const user = await User.findOne({ 'username': username })

        if (!user)
            return { 'message': 'El usuario no existe' }

        if (user.password != password)
            return { 'message': 'La contraseña es incorrecta' }
        
        const payload = { admin: 'admin' }

        const token = jwt.sign(payload, 'superSecret', {
            expiresIn: '5m' // expires in 24 hours
        })

        return { 'token': token, 'message': 'Token generado exitosamente' }
    }catch(e) {
        throw Error('Error mientras se autenticaba. '+e.message)
    }
}

exports.validToken = async (token) => {
    try {
        return await jwt.verify(token, 'superSecret')
    }catch(e) {
        throw Error(e.message)       
    }
}