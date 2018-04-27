var Hotel = require('../models/hotel.model')

_this = this

exports.getHotels = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var hotels = await Hotel.paginate(query, options)
        return hotels;
    } catch (e) {
        throw Error('Ocurrio un error mientras se paginaban los Hoteles')
    }
}

exports.findById = async function(id){
    try{
        var hotel = await Hotel.findOne({"id":id});
        return hotel;
    }catch(e){
        throw Error("Ocurrio un error mientras se buscaba el Hotel")
    }
}

exports.createHotel = async function(hotel){    
    var newHotel = new Hotel({
        name: hotel.name,
        stars: hotel.stars,
        price: hotel.price,
        image: hotel.image,
        amenities: hotel.amenities
    })
    try{
        var savedHotel = await newHotel.save()
        return savedHotel;
    }catch(e){    
        throw Error("Ocurrio un error mientras se creaba Hotel")
    }
}

exports.updateHotel = async function(hotel){
    var id = hotel.id

    try{    
        var oldHotel = await Hotel.findById(id);
    }catch(e){
        throw Error("Ocurrio un error mientras se buscaba el Hotel")
    }
    if(!oldHotel){
        return false;
    }

    oldHotel.name = hotel.name
    oldHotel.stars = hotel.stars
    oldHotel.price = hotel.price
    oldHotel.image = hotel.image
    oldHotel.amenities = hotel.amenities

    try{
        var savedHotel = await oldHotel.save()
        return savedHotel;
    }catch(e){
        throw Error("Y ocurrio un error mientras se actualizaba el Hotel");
    }
}

exports.deleteHotel = async function(id){
    try{
        var deleted = await Hotel.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("El Hotel no pude ser eliminado")
        }
        return deleted
    }catch(e){
        throw Error("Ocurrio un error mientras se eliminaba el Hotel")
    }
}