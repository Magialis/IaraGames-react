import { useState, useEffect } from 'react'

function BackToTop() {
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        function aoRolar() {
            setVisivel(window.scrollY > 200)
        }

        window.addEventListener('scroll', aoRolar)
        return () => window.removeEventListener('scroll', aoRolar)
    }, [])

    function voltarAoTopo() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            id="btnTopo"
            type="button"
            style={{ display: visivel ? 'block' : 'none' }}
            onClick={voltarAoTopo}
        >
            Voltar ao topo
        </button>
    )
}

export default BackToTop