import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand" >Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/recipe'} className="nav-link">Recipies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/addreceipe'} className="nav-link">Add new</Link>
                        </li>                  
                        <li className="nav-item">
                            <Link to={'/aboutus'} className="nav-link">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/icndbf'} className="nav-link">Fetch joke</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/icndba'} className="nav-link">Fetch Axios jokes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/weather'} className="nav-link">Weather</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
