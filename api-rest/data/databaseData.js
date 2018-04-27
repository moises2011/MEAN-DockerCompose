const Hotel = require('../models/hotel.model');
const User = require('../models/user.model');
const hotels = require('./data.json');
module.exports = {
    insertData: () => {
        Hotel.insertMany(hotels, (err, hotels) => {
            if (err)
                console.log(err)
        })

        User.insertMany([{'username': 'mcorrea', 'password': '1234'}], (err, users) => {
            if (err) 
                console.log(err)
        })
    }
}