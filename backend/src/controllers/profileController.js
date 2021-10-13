const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async login (req, res){
        const { email, senha } = req.body;

        try {
            const user = await connection('tbl_usuarios').where('email', email).first();

            if(!user){
                return res.status(500).send({ mensagem: 'Usuário ou senha incorretos' })
            }

            bcrypt.compare(senha, user.senha).then((result)=>{
                if(result === true){
                     return res.status(200).json(user);
                } else {
                    return res.status(500).send({ mensagem: 'Usuário ou senha incorretos' })
                }
            })

        } catch (error) {
            console.error('Usuário ou senha incorretos')
        }
    }
}