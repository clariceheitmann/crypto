const Agendamento = require('../models/Agendamento')
const Ciclista = require('../models/Ciclista')
const Bicicleta = require('../models/Bicicleta')

const cadastrar = async (req, res) => {

    const valores = req.body

    if (!valores.data || !valores.hora || !valores.idCiclista || !valores.idBicicleta) {
        return res.status(400).json({
            message: 'Todos os campos são obrigatórios!'
        })
    }

    try {
        const ciclista = await Ciclista.findByPk(valores.idCiclista)

        if (!ciclista) {
            return res.status(404).json({
                message: 'Ciclista não encontrado!'
            })
        }

        const bicicleta = await Bicicleta.findByPk(valores.idBicicleta)

        if (!bicicleta) {
            return res.status(404).json({
                message: 'Bicicleta não encontrada!'
            })
        }

        if (bicicleta.idCiclista != valores.idCiclista) {
            return res.status(400).json({
                message: 'A bicicleta não pertence ao ciclista informado!'
            })
        }

        await Agendamento.create({
            data: valores.data,
            hora: valores.hora,
            idCiclista: valores.idCiclista,
            idBicicleta: valores.idBicicleta
        })

        res.status(201).json({
            message: 'Agendamento realizado com sucesso!'
        })

    } catch (err) {
        console.error('Erro ao cadastrar agendamento!', err)
        res.status(500).json({
            message: 'Erro ao cadastrar agendamento!'
        })
    }
}

const listar = async (req, res) => {

    try {
        const dados = await Agendamento.findAll({
            order: [
                ['data', 'ASC'],
                ['hora', 'ASC']
            ]
        })

        res.status(200).json(dados)

    } catch (err) {
        console.error('Erro ao listar agendamentos!', err)
        res.status(500).json({
            message: 'Erro ao listar agendamentos!'
        })
    }
}

module.exports = { cadastrar, listar }