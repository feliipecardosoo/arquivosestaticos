import style from './Cardapio.module.scss'
import logo from '../../assets/img.svg'

export default function Cardapio() {
    return (
        <main>
            <nav className={style.menu}>
                <img src={logo} alt="Logo Cardozoni" />
            </nav>
        </main>
    )
}