let resposta_listar_agendamento = document.getElementById('resposta_listar_agendamento')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/agendamentos`)
        .then(res => {
            return res.json()
        })
        .then(dados => {

            if(dados.message){
                resposta_listar_agendamento.innerHTML = dados.message
                return
            }

            resposta_listar_agendamento.innerHTML = `
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Ciclista</th>
                        <th>Bicicleta</th>
                    </tr>

                    ${dados.map(agendamento => `
                        <tr>
                            <td>${agendamento.codAgendamento}</td>
                            <td>${agendamento.data}</td>
                            <td>${agendamento.hora}</td>
                            <td>${agendamento.idCiclista}</td>
                            <td>${agendamento.idBicicleta}</td>
                        </tr>
                    `).join('')}
                </table>
            `
        })
        .catch((err) => {
            console.error('Erro ao listar agendamentos', err)
            resposta_listar_agendamento.innerHTML = 'Erro ao listar agendamentos'
        })
})