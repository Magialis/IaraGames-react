import { Container } from 'react-bootstrap'

const linksNavegacao = [
    { texto: 'Loja', href: '#' },
    { texto: 'Biblioteca', href: '#' },
    { texto: 'Fórum', href: '#' },
    { texto: 'Suporte', href: '#' },
]

const linksExtras = [
    { texto: 'Política de Privacidade', href: '#' },
    { texto: 'Suporte', href: '#' },
    { texto: 'Termo de Uso', href: '#' },
    { texto: 'Reembolso', href: '#' },
]

const linksSociais = [
    { nome: 'Instagram', icone: 'bi-instagram', href: '#' },
    { nome: 'WhatsApp', icone: 'bi-whatsapp', href: '#' },
]

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <span className="footer-divider"></span>
                <div className="footer-content">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <img className="img-fluid" src="/images/logo.png" alt="Iara Games" />
                        </div>
                        <div className="col-6 col-md-3 text-start mt-4 mt-md-0">
                            <ul className="footer-nav-links">
                                {linksNavegacao.map((link) => (
                                    <li key={link.texto}>
                                        <a href={link.href}>{link.texto}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 text-start mt-4 mt-md-0">
                            <ul className="footer-extra-links">
                                {linksExtras.map((link) => (
                                    <li key={link.texto}>
                                        <a href={link.href}>{link.texto}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 mt-4 mt-md-0">
                            <ul className="footer-social-links">
                                {linksSociais.map((rede) => (
                                    <li key={rede.nome}>
                                        <a href={rede.href} aria-label={rede.nome}>
                                            <i className={`bi ${rede.icone}`}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="footer-rights">
                                <p>Todos os Direitos Reservados</p>
                                <p>Copyright @ Iara Games 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer