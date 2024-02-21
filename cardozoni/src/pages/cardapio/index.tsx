import style from './Cardapio.module.scss'
import {ReactComponent as Logo} from 'assets/img.svg'

export default function Cardapio() {
    return (
        <main>
            <nav className={style.menu}>
                <Logo />
            </nav>
        </main>
    )
}