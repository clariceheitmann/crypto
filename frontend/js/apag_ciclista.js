let resposta_apag_ciclista = document.getElementById('resposta_apag_ciclista')
let btn_apagar = document.getElementById('btn_apagar')

btn_apagar.addEventListener('click', (e) => {
    e.preventDefault()

    let codCiclista = document.getElementById('codCiclista').value

    fetch(`http://localhost:3000/ciclista/${codCiclista}`, {
        method: 'DELETE'
    })
    .then(res => {
        return res.json()
    })
    .then(dados => {
        resposta_apag_ciclista.innerHTML = dados.message
    })
    .catch((err) => {
        console.error('Erro ao apagar o ciclista', err)
        resposta_apag_ciclista.innerHTML = 'Erro ao apagar o ciclista'
    })
})