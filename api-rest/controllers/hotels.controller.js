var HotelService = require('../services/hotels.service')

_this = this

exports.getHotels = async function(req, res, next){

    let filters = {};
    if(req.query.name)
        filters.name = { $regex: req.query.name }
    if(req.query.stars)
        filters.stars = { $in: JSON.parse(req.query.stars) }
    
    let page = req.query.page ? req.query.page : 1
    let limit = req.query.limit ? req.query.limit : 10

    try{    
        let hotels = await HotelService.getHotels(filters, page, limit)        
        return res.status(200).json({status: 200, data: hotels, message: "Hoteles consultados exitosamente"});        
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});        
    }
}

exports.FindById = async function(req, res, next){

    var id = req.params.id;

    try{
        var todo = await HotelService.findById(id)
        return res.status(200).json({status: 200, data: todo, message: "Hotel consultado exitosamente"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.createHotel = async function(req, res, next){

    var hotel = {
        name: req.body.name,
        stars: req.body.stars,
        price: req.body.price,
        image: req.body.image,
        amenities: req.body.amenities
    }

    try{
        var createdHotel = await HotelService.createHotel(hotel)
        return res.status(201).json({status: 201, data: createdHotel, message: "Hotel creado exitosamente"})
    }catch(e){
        return res.status(400).json({status: 400, message: "El Hotel no pudo ser creado"})
    }
}

exports.updateHotel = async function(req, res, next){

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Se necesita un ID"})
    }

    var id = req.body._id;

    console.log(req.body)

    var hotel = {
        id,
        name: req.body.name ? req.body.name : null,
        stars: req.body.stars ? req.body.stars : null,
        price: req.body.price ? req.body.price : null,
        image: req.body.image ? req.body.image : null,
        amenities: req.body.amenities ? req.body.amenities : null,
    }

    try{
        var updatedHotel = await HotelService.updateHotel(hotel)
        return res.status(200).json({status: 200, data: updatedHotel, message: "Hotel actualizado exitosamente"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeHotel = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await HotelService.deleteHotel(id)
        return res.status(204).json({status:204, message: "Hotel eliminado exitosamente"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}