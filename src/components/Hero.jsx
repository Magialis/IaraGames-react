import { Container } from 'react-bootstrap'

function Hero() {
    return (
        <section className="hero">
            <video
                className="hero-video d-none d-md-block"
                src="/videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <video
                className="hero-video d-block d-md-none"
                src="/videos/hero-mobile.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <Container>
                <div className="hero-content">
                    <h2 className="hero-content-title">
                        Desbloqueie o melhor dos jogos brasileiros
                    </h2>
                    <p className="hero-content-text">
                        Com o Passe Iara Games, jogue uma seleção de games independentes feitos no Brasil.
                    </p>
                    <p className="hero-content-text">
                        Descubra novas histórias, apoie desenvolvedores locais e explore experiências únicas.
                    </p>
                    <a className="hero-content-button" href="#">Assine já!</a>
                </div>
            </Container>
        </section>
    )
}

export default Hero