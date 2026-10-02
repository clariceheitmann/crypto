const Ciclista = require('../models/Ciclista')

const cryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo' // deve ficar no arquivo .env

const cadastrar = async (req,res)=>{
    const valores = req.body

    if( !valores.nome || !valores.email || !valores.senha ||
        !valores.cpf  || !valores.endereco || !valores.celular){

        return res.status(400).json({message: 'Todos os campos são obrigatórios!'})
    }

    if( valores.cpf.length !== 11 ){
        return res.status(400).json({message: 'CPF inválido!'})
    }


    try{
        const cpfCripto = cryptoJs.AES.encrypt(valores.cpf, CHAVE_SECRETA).toString()
        const senhaCripto = cryptoJs.AES.encrypt(valores.senha, CHAVE_SECRETA).toString()

        await Ciclista.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaCripto,
            cpf: cpfCripto,
            endereco: valores.endereco,
            celular: valores.celular
        })

        res.status(201).json({message: 'Ciclista cadastrado com sucesso!'})
    }catch(err){
        console.error('Erro ao cadastrar o Ciclista',err)
        res.status(500).json({message: 'Erro ao cadastrar o Ciclista'})        
    }
}

const listar = async(req,res) =>{

    try{
        const dados = await Ciclista.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar ciclistas!',err)
        res.status(500).json({message: 'Erro ao listar ciclistas'})
    }
}

const consultarPorNome = async(req,res) =>{
    const nome = req.params.nome 

    try{
        const dados = await Ciclista.findOne({where: {nome: nome}})
        if(!dados){
            return res.status(404).json({message: 'Ciclista não encontrado!'})
        }else{
            res.status(200).json(dados)
        }
    }catch(err){
        console.error('Erro ao consultar ciclista!',err)
        res.status(500).json({message: 'Erro ao consultar ciclista!'})
    }
}

const atualizar = async(req,res) =>{
    const id = req.params.id 
    const valores = req.body 

    try{
        let dados = await Ciclista.findByPk(id)
        if(!dados){
            return res.status(404).json({message: 'Ciclista não encontrado!'})
        }else{
            await Ciclista.update(valores, {where: {codCiclista : id}})
            dados = await Ciclista.findByPk(id)
            res.status(200).json(dados)
        }
    }catch(err){
        console.error('Erro ao atualizar ciclista!',err)
        res.status(500).json({message: 'Erro ao atualizar ciclista!'})
    }
}

const excluir = async(req,res) =>{
    const id = req.params.id 

    try{
        const dados = await Ciclista.findByPk(id)
        if(!dados){
            res.status(404).json({message: 'Ciclista não encontrado!'})
        }else{
            await Ciclista.destroy({where: {codCiclista : id}})
            res.status(200).json({message: 'Ciclista excluído com sucesso!'})
        }
    }catch(err){
        console.error('Erro ao excluir ciclista!',err)
        res.status(500).json({message: 'Erro ao excluir ciclista!'})
    }
}

module.exports = { cadastrar, listar, consultarPorNome, atualizar, excluir }