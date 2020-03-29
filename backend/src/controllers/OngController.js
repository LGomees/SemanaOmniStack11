const crypto = require('crypto'); //Colocar Criptografia no ID
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
   
        return response.json(ongs);
    }, 

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //Gerar 4 caracteres hexadecimais para o ID

        await connection('ongs').insert({
            id,
            name, 
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};