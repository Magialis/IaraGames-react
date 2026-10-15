import { Navbar, Container, Dropdown } from 'react-bootstrap'

const linksMenu = [
    { texto: 'Loja', icone: 'bi-shop', href: '#', ativo: true },
    { texto: 'Meus Games', icone: 'bi-controller', href: '#' },
    { texto: 'Fórum', icone: 'bi-chat-dots', href: '#' },
    { texto: 'Suporte', icone: 'bi-headset', href: '#' },
]

function Header() {
    return (
        <>
            <Navbar as="header" expand="lg" className="menu">
                <Container className="menu-container">
                    <Navbar.Brand as="h1" className="menu-logo m-0">
                        <a href="#">
                            <img className="img-fluid" src="/images/logo.png" alt="Iara Games" />
                        </a>
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="menu-navegacao"
                        className="custom-toggler custom-btn-primary"
                    >
                        <i className="bi bi-list"></i>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="menu-navegacao">
                        <nav className="menu-content w-100">
                            <ul className="menu-content-center">
                                {linksMenu.map((link) => (
                                    <li key={link.texto}>
                                        <a
                                            className={`menu-content-center-link ${link.ativo ? 'is-active' : ''}`}
                                            href={link.href}
                                        >
                                            <i className={`bi ${link.icone} ${link.ativo ? 'is-active' : ''}`}></i>
                                            {link.texto}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <ul className="menu-content-right">
                                <li>
                                    <a className="menu-content-right-link" href="#">
                                        <i className="bi bi-cart"></i>
                                    </a>
                                </li>
                                <Dropdown as="li" className="nav-item user-dropdown">
                                    <Dropdown.Toggle
                                        as="a"
                                        href="#"
                                        id="userMenuDropdown"
                                        className="menu-content-right-link"
                                    >
                                        <i className="bi bi-person"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end" className="user-popup-card p-4">
                                        <h4 className="popup-title text-center">DADOS DE LOGIN</h4>
                                        <div className="popup-buttons d-flex gap-2 mt-3">
                                            <a href="#" className="btn btn-popup-outline flex-fill text-center">
                                                ENTRAR
                                            </a>
                                            <a href="#" className="btn btn-popup-outline flex-fill text-center">
                                                CRIAR CONTA
                                            </a>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ul>
                        </nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container">
                <span className="nav-divider"></span>
            </div>
        </>
    )
}

export default Header