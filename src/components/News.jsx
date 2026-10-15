import { useState } from 'react'
import { Container, Dropdown, Carousel } from 'react-bootstrap'
import GameCard from './GameCard'
import { novidades } from '../data/jogos'
import { opcoesOrdenacao, opcoesGenero } from '../data/filtros'

function filtrar(lista, generos) {
    if (generos.length === 0) return lista
    return lista.filter((jogo) => generos.includes(jogo.genero))
}

function ordenar(lista, ordenacao) {
    const copia = [...lista]

    if (ordenacao === 'maior-preco') {
        copia.sort((a, b) => b.preco - a.preco)
    }
    if (ordenacao === 'menor-preco') {
        copia.sort((a, b) => a.preco - b.preco)
    }

    return copia
}

function News() {
    const [ordenacao, setOrdenacao] = useState('relevante')
    const [generos, setGeneros] = useState([])

    function alternarGenero(valor) {
        setGeneros((atual) =>
            atual.includes(valor)
                ? atual.filter((g) => g !== valor)
                : [...atual, valor]
        )
    }

    const jogosVisiveis = ordenar(filtrar(novidades, generos), ordenacao)

    return (
        <section className="news">
            <Container>
                <div className="news-content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2 className="news-content-title">Novidades</h2>
                        </div>

                        <div className="col-12 col-md-6 text-md-end">
                            <Dropdown className="mt-2 mt-md-0" autoClose="outside">
                                <Dropdown.Toggle as="button" type="button" className="custom-btn-primary">
                                    Filtrar
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="custom-dropdown-menu">
                                    <h6 className="dropdown-title">Ordenar por:</h6>
                                    {opcoesOrdenacao.map((opcao) => (
                                        <div className="form-check" key={opcao.value}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="novidades-ordenar"
                                                id={`novidades-${opcao.value}`}
                                                checked={ordenacao === opcao.value}
                                                onChange={() => setOrdenacao(opcao.value)}
                                            />
                                            <label className="form-check-label" htmlFor={`novidades-${opcao.value}`}>
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
                                                id={`novidades-${genero.value}`}
                                                checked={generos.includes(genero.value)}
                                                onChange={() => alternarGenero(genero.value)}
                                            />
                                            <label className="form-check-label" htmlFor={`novidades-${genero.value}`}>
                                                {genero.label}
                                            </label>
                                        </div>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                {jogosVisiveis.length === 0 ? (
                    <p className="text-center">Nenhum jogo encontrado com esses filtros.</p>
                ) : (
                    <>
                        {/* Desktop: lista de cards horizontais */}
                        <div className="news-cards d-none d-md-block">
                            {jogosVisiveis.map((jogo) => (
                                <GameCard key={jogo.id} {...jogo} variant="horizontal" />
                            ))}
                        </div>

                        {/* Mobile: carrossel, um card por vez */}
                        <div className="news-cards d-block d-md-none">
                            <Carousel
                                key={`${ordenacao}-${generos.join('-')}`}
                                interval={null}
                                controls={false}
                            >
                                {jogosVisiveis.map((jogo) => (
                                    <Carousel.Item key={jogo.id}>
                                        <GameCard {...jogo} variant="mobile" />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </>
                )}
            </Container>
        </section>
    )
}

export default News