import React, {useState,useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Trans} from 'react-i18next';

function Sidebar() {
    const location = useLocation()

    const isPathActive = (path) => {
        return location.pathname.startsWith(path);
    }

    useEffect(() => {
        onRouteChanged()
    }, [location]);

    const onRouteChanged = () => {
        document.querySelector('#sidebar').classList.remove('active');

        const body = document.querySelector('body');
        document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

            el.addEventListener('mouseover', function () {
                if (body.classList.contains('sidebar-icon-only')) {
                    el.classList.add('hover-open');
                }
            });
            el.addEventListener('mouseout', function () {
                if (body.classList.contains('sidebar-icon-only')) {
                    el.classList.remove('hover-open');
                }
            });
        });
    }

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className={isPathActive('/dashboard') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/dashboard">
                        <span className="menu-title"><Trans>Dashboard</Trans></span>
                        <i className="mdi mdi-home menu-icon"></i>
                    </Link>
                </li>

                <li className={isPathActive('/user-pages/login-1') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/user-pages/login-1">
                        <span className="menu-title"><Trans>Login</Trans></span>
                        <i className="mdi mdi-home menu-icon"></i>
                    </Link>
                </li>

                <li className={isPathActive('/general-pages/blank-page') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/general-pages/blank-page">
                        <span className="menu-title"><Trans>blank page</Trans></span>
                        <i className="mdi mdi-home menu-icon"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    );

}

export default (Sidebar);
