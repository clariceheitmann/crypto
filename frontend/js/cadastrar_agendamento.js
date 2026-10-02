let resposta_cad_agendamento = document.getElementById('resposta_cad_agendamento')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e) => {
    e.preventDefault()

    let data = document.getElementById('data').value
    let hora = document.getElementById('hora').value
    let idCiclista = document.getElementById('idCiclista').value
    let idBicicleta = document.getElementById('idBicicleta').value

    const valores = {
        data: data,
        hora: hora,
        idCiclista: idCiclista,
        idBicicleta: idBicicleta,
    }

    fetch(`http://localhost:3000/agendamento`, {
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
        resposta_cad_agendamento.innerHTML = `${dados.message}`
    })
    .catch((err) => {
        console.error('Erro ao cadastrar a agendamento', err)
        resposta_cad_agendamento.innerHTML = `Erro ao cadastrar a agendamento`
    })
})