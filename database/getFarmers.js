const { Op } = require('sequelize');
const models = require('../models')
var farmer = models.Farmer

async function farmerSearch (search) {
    let result = await farmer.findAll({
            where: {
                [Op.or]:[
                    {name: {
                        [Op.iLike]:'%'+search+'%'
                    }},
                    {document: {
                        [Op.iLike]:'%'+search+'%'
                    }}
                ]
            }   
        })
        return result
};

module.exports.farmerSearch = farmerSearch;