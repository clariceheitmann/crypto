let resposta_consult_ciclista = document.getElementById('resposta_consult_ciclista')
let btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/ciclista/${codCiclista}`, {
    })
    .then(res => {
        return res.json()
    })
    .then(dados => {
        resposta_consult_ciclista.innerHTML = `${dados.message}`
    })
    .catch((err) => {
        console.error('Erro ao consultar o usuário', err)
        resposta_consult_ciclista.innerHTML = `Erro ao consultar o usuário`
    })
})