import { Container, Carousel } from 'react-bootstrap'
import GameCard from './GameCard'

function agrupar(lista, tamanho) {
    const grupos = []
    for (let i = 0; i < lista.length; i += tamanho) {
        grupos.push(lista.slice(i, i + tamanho))
    }
    return grupos
}

function GameSection({ classe, titulo, subtitulo, jogos, escuro = false }) {
    const grupos = agrupar(jogos, 3)

    return (
        <section className={classe}>
            <Container>
                <div className={`${classe}-content`}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className={escuro ? `${classe}-content-text` : ''}>
                                <h2>{titulo}</h2>
                                <p>{subtitulo}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 text-md-end mt-3 mt-md-0 mb-3 mb-md-0">
                            <a
                                className={`custom-btn-primary ${escuro ? 'custom-btn-primary--dark' : ''}`}
                                href="#"
                            >
                                Ver mais
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`${classe}-cards`}>
                    {/* Desktop: 3 cards por slide */}
                    <Carousel
                        className="d-none d-md-block"
                        interval={null}
                        indicators={false}
                        controls={grupos.length > 1}
                    >
                        {grupos.map((grupo, i) => (
                            <Carousel.Item key={i}>
                                <div className="row g-4">
                                    {grupo.map((jogo) => (
                                        <div className="col-lg-4" key={jogo.id}>
                                            <GameCard {...jogo} />
                                        </div>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    {/* Mobile: 1 card por slide */}
                    <Carousel
                        className="d-block d-md-none"
                        interval={null}
                        controls={false}
                    >
                        {jogos.map((jogo) => (
                            <Carousel.Item key={jogo.id}>
                                <GameCard {...jogo} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </Container>
        </section>
    )
}

export default GameSection