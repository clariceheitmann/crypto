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
            resposta_listar_ciclista.innerHTML = `
        <table>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Senha</th>
                <th>CPF</th>
                <th>Endereço</th>
                <th>Celular</th>
            </tr>
            ${dados.map(ciclista => `
                <tr>
                    <td>${ciclista.codCiclista}</td>
                    <td>${ciclista.nome}</td>
                    <td>${ciclista.email}</td>
                    <td>${ciclista.senha}</td>
                    <td>${ciclista.cpf}</td>
                    <td>${ciclista.endereco}</td>
                    <td>${ciclista.celular}</td>
                </tr>
            `).join('')}
        </table>
    `
        })
        .catch((err) => {
            console.error('Erro ao listar o usuário', err)
            resposta_listar_ciclista.innerHTML = `Erro ao listar o usuário`
        })
})