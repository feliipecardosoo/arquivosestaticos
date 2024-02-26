import React from 'react'
import filtros from './filtros.json'
import style from './filtros.module.scss'

type IOpcao = typeof filtros[0]

interface Props {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction <number | null>>
}

export default function Filtros({filtro, setFiltro}: Props) {

    function selecionarFiltro(opcao: IOpcao) {
        return setFiltro(opcao.id)
    }

    return <div className={style.filtros}>
        {filtros.map((opcao) => (
            <button className={`${style.filtros__filtro} ${filtro === opcao.id ? style['filtros__filtro--ativo']: ''}`} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
            {opcao.label}
            </button>
        ))}
    </div>
}