import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Search from './Search';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggler">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                  activeClassName="active"
                                  to="/weather">Current weather</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                  activeClassName="active"
                                  to="/forecast">5 Day Forecast</NavLink>
                        </li>
                    </ul>
                </div>
                <Search className="form-inline" />
            </nav>
        );
    }
}

export default Header;
