import './index.scss'
import Cabecalho from '../../components/cabecalho'

import { useState } from 'react'
import axios from 'axios'

export default function Vaga() {

    const [empresa, setEmpresa] = useState('')
    const [email, setEmail] = useState('')
    const [cargo, setCargo] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [tipoContrato, setTipoContrato] = useState('')
    const [modelo, setModelo] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [salario, setSalario] = useState('')
    const [beneficios, setBeneficios] = useState('')
    const [requisicoes, setRequisicoes] = useState('')
    const [descricao, setDescricao] = useState('')

    async function salvar() {

        const vaga = {
            "nome_empresa": empresa,
            "contato_empresa": email,
            "cnpj": cnpj,
            "cargo": cargo,
            "tipo_contrato": tipoContrato,
            "localizacao": localizacao,
            "modelo_trabalho": modelo,
            "salario": Number(salario),
            "beneficios": beneficios,
            "requisicoes": requisicoes,
            "descricao": descricao,
        }
        
        const url = `http://localhost:5010/vagas`;

        let resp = await axios.post(url, vaga)

        alert('Vaga adicionada ' + resp.data.id)

    }


    return (
        <div className='pagina-vaga'>
            <Cabecalho/>
            
            <main>
            <section className='vaga'>

                <h2>Inserir</h2>

                <div className='categorias'>

                    <div className='grande'>
                        <label>Empresa:</label>
                        <input type="text" value={empresa} onChange={e => setEmpresa(e.target.value)}/>
                    </div>

                    <div className='grande'>
                        <label>Email:</label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className='pequeno'>

                        <div>
                        
                        <label>Vaga:</label>
                        <input type="text" value={cargo} onChange={e => setCargo(e.target.value)}/>
                        
                        </div>
                        
                        <div>
                        
                        <label>CNPJ:</label>
                        <input type="text" value={cnpj} onChange={e => setCnpj(e.target.value)}/>
                        
                        </div>
                    </div>

                    <div className='pequeno'>

                        <div>

                            <label>Tipo de Contrato:</label>
                            <input type="text" value={tipoContrato} onChange={e => setTipoContrato(e.target.value)}/>

                        </div>

                        <div>

                            <label>Modelo de trabalho:</label>
                            <input type="text" value={modelo} onChange={e => setModelo(e.target.value)}/>

                        </div>
                    </div>

                    <div className='pequeno'>

                        <div>

                            <label>Localização:</label>
                            <input type="text" value={localizacao} onChange={e => setLocalizacao(e.target.value)}/>

                        </div>

                        <div>

                            <label>Sálario:</label>
                            <input type="text" value={salario} onChange={e => setSalario(e.target.value)}/>

                        </div>
                    </div>

                    <div className='grande'>
                        <label>Benefícios:</label>
                        <input type="text" value={beneficios} onChange={e => setBeneficios(e.target.value)}/>
                    </div>

                    
                    <div className='grande'>
                        <label>Requisições</label>
                        <input type="text"  value={requisicoes} onChange={e => setRequisicoes(e.target.value)}/>
                    </div>

                    <div className='caixa'>

                        <label>Por que trabalhar com a G&G?:</label>
                        <textarea value={descricao} onChange={e => setDescricao(e.target.value)}>

                        </textarea>
                    </div>

                    <div className='botao'>

                        <button onClick={salvar}>Adicionar</button>

                    </div>
                </div>
            </section>
            </main>
            
           
            
        </div>
    )
}