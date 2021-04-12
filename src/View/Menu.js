import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <Fragment>
                <nav className="navbar navbar-dark navbar-expand-md bg-secondary fixed-top">
                    <Link to="/" className="navbar-brand">Redux CRUD</Link>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Create</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        </Fragment>
    );
}

export default Menu;
