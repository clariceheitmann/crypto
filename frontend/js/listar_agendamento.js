let resposta_listar_agendamento = document.getElementById('resposta_listar_agendamento')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/agendamentos`, {
    })
    .then(res => {
        return res.json()
    })
    .then(dados => {
        resposta_listar_agendamento.innerHTML = `${dados.message}`
    })
    .catch((err) => {
        console.error('Erro ao listar agendamentos', err)
        resposta_listar_agendamento.innerHTML = `Erro ao listar agendamentos`
    })
})