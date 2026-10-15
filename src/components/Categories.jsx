import { Container, Carousel } from 'react-bootstrap'
import { categorias } from '../data/jogos'

function CategoriaItem({ nome, imagem, alt }) {
    return (
        <a className="category-content-item" href="#">
            <img className="img-fluid" src={imagem} alt={alt} />
            <p>{nome}</p>
        </a>
    )
}

function Categories() {
    return (
        <section className="category">
            <Container>
                <div className="category-container">
                    <h2>Explorar por categoria</h2>

                    <div className="category-content d-none d-md-block">
                        <div className="row">
                            {categorias.map((categoria) => (
                                <div className="col-md-3" key={categoria.id}>
                                    <CategoriaItem {...categoria} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="category-content d-block d-md-none">
                        <Carousel interval={null} controls={false}>
                            {categorias.map((categoria) => (
                                <Carousel.Item key={categoria.id}>
                                    <CategoriaItem {...categoria} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Categories