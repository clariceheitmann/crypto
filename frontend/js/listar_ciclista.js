let resposta_listar_ciclista = document.getElementById('resposta_listar_ciclista')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/ciclistas`, {
    })
    .then(res => {
        return res.json()
    })
    .then(dados => {
        resposta_listar_ciclista.innerHTML = `${dados.message}`
    })
    .catch((err) => {
        console.error('Erro ao listar o usuário', err)
        resposta_listar_ciclista.innerHTML = `Erro ao listar o usuário`
    })
})