import { Link } from 'react-router-dom'
import './index.scss'


export default function Cabecalho() {

    return (
        <div className='comp-cabecalho'>
            <Link to='/'> <header>
                <img src="/assets/images/logo.png" alt="" />
                <h1>MariMaria G&G</h1>
            </header>
           </Link>
        </div>
    )
}