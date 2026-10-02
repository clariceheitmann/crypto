const Bicicleta = require('../models/Bicicleta')
const Ciclista = require('../models/Ciclista')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.modelo || !valores.tipo || !valores.aro || !valores.codCiclista) {
        return res.status(400).json({
            message: 'Todos os campos são obrigatórios!'
        })
    }

    try {
        const ciclista = await Ciclista.findByPk(valores.codCiclista)

        if (!ciclista) {
            return res.status(404).json({
                message: 'Ciclista não encontrado!'
            })
        }

        await Bicicleta.create({
            modelo: valores.modelo,
            tipo: valores.tipo,
            aro: valores.aro,
            codCiclista: valores.codCiclista
        })

        res.status(201).json({
            message: 'Bicicleta cadastrada com sucesso!'
        })

    } catch (err) {
        console.error('Erro ao cadastrar bicicleta!', err)
        res.status(500).json({
            message: 'Erro ao cadastrar bicicleta!'
        })
    }
}

module.exports = {cadastrar}