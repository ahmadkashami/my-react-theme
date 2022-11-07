import React, {useEffect} from 'react';
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
                        <i className="mdi mdi-home menu-icon mr-2"></i>
                        <span className="menu-title"><Trans>Dashboard</Trans></span>
                    </Link>
                </li>
                <li className={isPathActive('/general-pages/blank-page') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/general-pages/blank-page">
                        <i className="mdi mdi-file menu-icon mr-2"></i>
                        <span className="menu-title"><Trans>blank page</Trans></span>
                    </Link>
                </li>
            </ul>
        </nav>
    );

}

export default (Sidebar);
