let resposta_cad_bicicleta = document.getElementById('resposta_cad_bicicleta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e) => {
    e.preventDefault()

    let modelo = document.getElementById('modelo').value
    let tipo = document.getElementById('tipo').value
    let aro = document.getElementById('aro').value
    let codCiclista = document.getElementById('codCiclista').value

    const valores = {
        modelo: modelo,
        tipo: tipo,
        aro: aro,
        idCiclista: codCiclista
    }

    fetch(`http://localhost:3000/bicicleta`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(res => {
        return res.json()
    })
    .then(dados => {
        resposta_cad_bicicleta.innerHTML = dados.message
    })
    .catch((err) => {
        console.error('Erro ao cadastrar a bicicleta', err)
        resposta_cad_bicicleta.innerHTML = 'Erro ao cadastrar a bicicleta'
    })
})