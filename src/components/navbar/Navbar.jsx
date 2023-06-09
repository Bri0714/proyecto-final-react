import React, { useState } from 'react';
import './Navbar.css';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = ({ handleSearch, cantidadEnCarrito }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchTerm);
    };

    return (
        <nav className="navbar bg-black navbar-expand-lg">
            <div className="container">
                <div className="position-absolute right-50">
                    <img src="./img/logo.jpg" className="logo" alt="Logo Tienda de Deportes" />
                </div>
            </div>
            <div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <form class="d-flex" onSubmit={handleSubmit}>
                            <input
                                id="Buscador"
                                class="form-control me-2"
                                type="search"
                                placeholder="Busca tu producto preferido"
                                aria-label="Search"
                            />
                            <button
                                id="Boton"
                                class="btn btn-outline-light"
                                type="submit"
                                value={searchTerm}
                                onChange={handleInputChange}
                            >
                                Buscar
                            </button>
                        </form>
                        <Link to="/" className="text-decoration-none">
                            <li>
                                <p className="nav-link ">Inicio</p>
                            </li>
                        </Link>
                        <Link to="/productos" className="text-decoration-none">
                            <li>
                                <p className="nav-link">Productos</p>
                            </li>
                        </Link>
                        <Link to="/Carrito" className="text-decoration-none">
                            <li>
                                <p className="nav-link">
                                    {' '}
                                    Carrito{' '}
                                    <span className="carrito-cantidad">{cantidadEnCarrito}</span>
                                    <BsCart2 className="car " />
                                </p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;