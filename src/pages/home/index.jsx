import './index.scss'

import { Link } from 'react-router-dom'

export default function Home()  {

    return (
        <div className='home'>

            <div className='titulo'>

                <img src="/assets/images/logo.png" alt="Logo GeG" />
                <h1>MariMaria G&G</h1>

            </div>

            <div className='navegacao'>
                <Link to= '/vaga'> <button>Inserir</button></Link>
                <Link to = '/buscar'> <button>Buscar</button></Link>
               
                
               
            </div>
        </div>
    )
}