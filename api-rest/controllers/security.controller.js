const SecurityService = require('../services/security.service')

_this = this

exports.login = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    try {
        const auth = await SecurityService.login(username, password)
        if (!auth.token)
            return res.status(400).json({status: 400, message: auth.message})

        return res.status(200).json({status: 200, 'token': auth.token, 'message': auth.message})
    }catch(e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.validToken = async (req, res, next) => {
    const token = req.params.token
    try {
        const decode = await SecurityService.validToken(token) 
        return res.status(200).json({status: 200, 'decode': decode.claims, message: 'Token válido'})
    }catch(e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}