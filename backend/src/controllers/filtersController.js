const connection = require("../database/connection");

module.exports = {
    async index(req, res){
        const data = req.query;
        
        try {
            const clientes = await connection('tbl_clientes')
                .where('renda', data.valor1)
                .select('*');
            
            res.status(200).json(clientes)
        } catch (error) {
            res.send(error)
        }
    },

    async index2(req, res){
        const data = req.query;
        
        let valor1 = data.valor1;
        let valor2 = data.valor2;

        try {
            const clientes = await connection('tbl_clientes')
                .whereBetween('renda', [valor1, valor2])
                .orderBy('renda')
                .select('*');
            
            res.status(200).json(clientes)
        } catch (error) {
            res.send(error)
        }
    }
}