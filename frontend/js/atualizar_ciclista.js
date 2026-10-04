let resposta_atu_ciclista = document.getElementById('resposta_atu_ciclista')
let btn_atualizar = document.getElementById('btn_atualizar')

btn_atualizar.addEventListener('click', (e) => {
    e.preventDefault()

    let codCiclista = document.getElementById('codCiclista').value
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let cpf = document.getElementById('cpf').value
    let endereco = document.getElementById('endereco').value
    let celular = document.getElementById('celular').value

    const valores = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        endereco: endereco,
        celular: celular
    }

    fetch(`http://localhost:3000/ciclista/${codCiclista}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(res => {
        return res.json()
    })
    .then(dados => {
        if(dados.message){
            resposta_atu_ciclista.innerHTML = dados.message
        }else{
            resposta_atu_ciclista.innerHTML = 'Ciclista atualizado com sucesso!'
        }
    })
    .catch((err) => {
        console.error('Erro ao atualizar o ciclista', err)
        resposta_atu_ciclista.innerHTML = 'Erro ao atualizar o ciclista'
    })
})