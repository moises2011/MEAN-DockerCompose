const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const User = mongoose.model('User', UserSchema)

module.exports = User;