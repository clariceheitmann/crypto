let resposta_consult_ciclista = document.getElementById('resposta_consult_ciclista')
let btn_consultar = document.getElementById('btn_consultar')
let nome = document.getElementById('nome')

btn_consultar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/ciclista/buscar/${encodeURIComponent(nome.value)}`)
        .then(res => {
            return res.json()
        })
        .then(dados => {

            if(dados.message){
                resposta_consult_ciclista.innerHTML = dados.message
                return
            }

            resposta_consult_ciclista.innerHTML = `
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

                    <tr>
                        <td>${dados.codCiclista}</td>
                        <td>${dados.nome}</td>
                        <td>${dados.email}</td>
                        <td>${dados.senha}</td>
                        <td>${dados.cpf}</td>
                        <td>${dados.endereco}</td>
                        <td>${dados.celular}</td>
                    </tr>
                </table>
            `
        })
        .catch((err) => {
            console.error('Erro ao consultar o ciclista', err)
            resposta_consult_ciclista.innerHTML = `Erro ao consultar o ciclista`
        })
})