export default function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Listagens
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="/listacategoria">
                                            Categorias
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/listaautor">
                                            Autores
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/listaeditora">
                                            Editoras
                                        </a>
                                    </li>
                                     <li>
                                        <a className="dropdown-item" href="/listalivro">
                                            Livros
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/listausuario">
                                            Usuários
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/listafuncionario">
                                            Funcionários
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    );
};