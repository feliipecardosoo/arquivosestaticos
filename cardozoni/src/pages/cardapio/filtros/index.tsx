import filtros from './filtros.json'

type IOpcao = typeof filtros[0]

export default function Filtros() {

    function selecionarFiltro(opcao: IOpcao) {

    }

    return <div>
        {filtros.map((opcao) => (
            <button key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
                {opcao.label}
            </button>
        ))}
    </div>
}