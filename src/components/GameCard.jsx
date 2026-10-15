function formatarPreco(valor) {
    if (valor === 0) return 'Free'
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function GameCard({ nome, imagem, estrelas, preco, precoOriginal, desconto, variant = 'vertical' }) {
    return (
        <div className={`card card--${variant}`}>
            <img className="img-fluid" src={imagem} alt={`Capa do jogo ${nome}`} />
            <div className="card-body">
                <div className="card-title">
                    <h3>{nome}</h3>
                    <div className="stars">
                        {Array.from({ length: 5 }, (_, i) => (
                            <i
                                key={i}
                                className={`bi ${i < estrelas ? 'bi-star-fill' : 'bi-star'}`}
                            ></i>
                        ))}
                    </div>
                </div>

                {desconto ? (
                    <div className="card-sale">
                        <span className="card-sale-discount">-{desconto}%</span>
                        <span className="card-sale-price">
                            {precoOriginal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                    </div>
                ) : null}

                <div className="card-info">
                    <p className={preco === 0 ? 'free' : ''}>{formatarPreco(preco)}</p>
                    <div className="card-info-buttons">
                        <a className="custom-btn-secondary" href="#">
                            <span>Comprar</span>
                            <i className="bi bi-cart"></i>
                        </a>
                        <button
                            className="custom-btn-primary custom-btn-primary--small"
                            type="button"
                            aria-label={`Salvar ${nome}`}
                        >
                            <i className="ph ph-bookmark-simple"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard