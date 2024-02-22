import style from './buscador.module.scss'

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: Props) {
    return (
        <div className={style.buscador}>
            <input 
                value={busca}
                onChange={e => setBusca(e.target.value)} 
            />
        </div>
    )
}