const connection = require('../database/connection');

module.exports = {
    async create (req, res){
        const {
            nome,
            telefone,
            data_nascimento,
            renda
        } = req.body;

        try {
            const [ id ] = await connection('tbl_clientes').insert({
                nome,
                telefone,
                data_nascimento,
                renda,
                status: true
            })
    
            res.status(200).json({ id })
        } catch (error) {
            res.send(error);
        }  
    },

    async index(req, res){
        try {
            const clients = await connection('tbl_clientes').select('*');

            res.status(200).json(clients);
        } catch (error) {
            res.send(error)
        }
    },

    async update(req, res){
        const {id} = req.params;
        const {
            nome,
            telefone,
            data_nascimento,
            renda
        } = req.body;

        try {
            await connection('tbl_clientes').where('id', id).update({
                nome: nome,
                telefone: telefone,
                data_nascimento: data_nascimento,
                renda: renda
            })
    
            res.status(200).send({ mensagem: 'Atualizado com sucesso!' });
        } catch (error) {
            res.send({ error });
        }
    }
}