import { Container, Dropdown } from 'react-bootstrap'
import { opcoesOrdenacao, opcoesGenero } from '../data/filtros'

function SearchBar() {
    function aoEnviar(evento) {
        evento.preventDefault()
    }

    return (
        <section>
            <form className="searchbar" onSubmit={aoEnviar}>
                <Container>
                    <div className="searchbar-content">
                        <Dropdown autoClose="outside">
                            <Dropdown.Toggle as="button" type="button" className="btn-searchbar">
                                Filtrar
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="custom-dropdown-menu">
                                <h6 className="dropdown-title">Ordenar por:</h6>
                                {opcoesOrdenacao.map((opcao) => (
                                    <div className="form-check" key={opcao.value}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="busca-ordenar"
                                            id={`busca-${opcao.value}`}
                                        />
                                        <label className="form-check-label" htmlFor={`busca-${opcao.value}`}>
                                            {opcao.label}
                                        </label>
                                    </div>
                                ))}

                                <div className="dropdown-divider"></div>

                                <h6 className="dropdown-title">Filtros:</h6>
                                {opcoesGenero.map((genero) => (
                                    <div className="form-check" key={genero.value}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`busca-${genero.value}`}
                                        />
                                        <label className="form-check-label" htmlFor={`busca-${genero.value}`}>
                                            {genero.label}
                                        </label>
                                    </div>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        <span className="searchbar-divider"></span>
                        <i className="ph ph-magnifying-glass"></i>
                        <input
                            className="searchbar-search"
                            type="search"
                            name="busca"
                            placeholder="Buscar na loja"
                        />
                        <button className="btn-searchbar" type="submit">
                            Buscar
                        </button>
                    </div>
                </Container>
            </form>
        </section>
    )
}

export default SearchBar