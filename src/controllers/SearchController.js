const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
    async index(request, reponse) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        })
        //buscar todos os devs num raio de 10km
        //filtrar por tecnologia
        return response.json({ devs });
    }
}