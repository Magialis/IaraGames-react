import Header from '../components/Header'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import GameSection from '../components/GameSection'
import { maisComprados, ofertas, maisAvaliados } from '../data/jogos'
import Categories from '../components/Categories'
import News from '../components/News'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <SearchBar />
                <GameSection
                    classe="best-sales"
                    titulo="Mais comprados da semana!"
                    subtitulo="Se liga nos jogos que estão com maior procura essa semana:"
                    jogos={maisComprados}
                />
                <GameSection
                    classe="sales"
                    titulo="Ofertas imperdíveis"
                    subtitulo="Jogos com descontos especiais!"
                    jogos={ofertas}
                    escuro
                />
                <GameSection
                    classe="most-rated"
                    titulo="Mais avaliados da semana!"
                    subtitulo="Jogos que a galera curtiu:"
                    jogos={maisAvaliados}
                />
                <Categories />
                <News />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Home