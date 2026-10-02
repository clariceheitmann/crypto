let resposta_apag_ciclista = document.getElementById('resposta_apag_ciclista')
let btn_apagar = document.getElementById('btn_apagar')

btn_apagar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/ciclista/${codCiclista}`, {
    })
    .then(res => {
        return res.json()
    })
    .then(dados => {
        resposta_apag_ciclista.innerHTML = `${dados.message}`
    })
    .catch((err) => {
        console.error('Erro ao apagar o usuário', err)
        resposta_apag_ciclista.innerHTML = `Erro ao apagar o usuário`
    })
})