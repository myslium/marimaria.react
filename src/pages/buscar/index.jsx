import './index.scss'
import Cabecalho from '../../components/cabecalho'

import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function BuscarVaga() {

    const [vagas, setVagas] = useState([])

    const {id} = useParams


    async function buscar() {
        
        const url = `http://localhost:5010/vagas`

        let respo = await axios.get(url)

    
        setVagas(respo.data)
       
    }

    async function deletar() {

        let url = `http://localhost:5010/vagas/del/${id}`

        await axios.delete(url)

        alert('vaga deletada')
        
    }

   

    return (
        <div className='pagina-consulta'>
            <Cabecalho/>
            <Link to = '/'>
            <i id='icone' className='fa fa-arrow-left'></i>
            </Link>

            <main>
                
                <section className='pesquisa'>

                    <h2>Consultar</h2>

                    <div className='botao'>
                    <button onClick={buscar}>Buscar</button>
    
                    </div>
                    <table>
                        <thead>

                            <tr>
                                <th>Id</th>
                                <th>Empresa</th>
                                <th>Email</th>
                                <th>CNPJ</th>
                                <th>Vaga</th>
                                <th>Contato</th>
                                <th>Atuação</th>
                                <th>Localização</th>
                                <th>Sálario</th>
                                <th>Benefícios</th>
                                <th>Requisições</th>
                                <th>Descrição</th>
                                <th>Alterar</th>
                                <th>Deletar</th>
                            </tr>
                           

                        </thead>

                        <tbody>
                          {vagas.map((item, pos) => 
                            
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome_empresa}</td>
                                <td>{item.contato_empresa}</td>
                                <td>{item.cnpj}</td>
                                <td>{item.cargo}</td>
                                <td>{item.tipo_contrato}</td>
                                <td>{item.localizacao}</td>
                                <td>{item.modelo_trabalho}</td>
                                <td>{item.salario}</td>
                                <td>{item.beneficios}</td>
                                <td>{item.requisicoes}</td>
                                <td>{item.descricao}</td>
                                <td><Link to={`/${item.id}`}>Alterar</Link></td>
                                <td onClick={deletar}><Link to = {`/buscar${item.id}`}>Deletar</Link></td>
                            </tr>
                                
                           
                        )}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    )
}