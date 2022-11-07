import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Trans, useTranslation} from 'react-i18next';

function Navbar() {
    const {i18n} = useTranslation()

    const toggleOffCanvas = () => {
        document.querySelector('.sidebar-offcanvas').classList.toggle('active');
    }

    const onChangeLanguages = (e) => {
        e.preventDefault();
        let dir=e.target.name
        const body = document.querySelector('body');
        if (dir === 'rtl') {
            body.classList.add('rtl');
            i18n.changeLanguage('ar');
        } else {
            body.classList.remove('rtl')
            i18n.changeLanguage('en');
        }

        console.log(i18n)
    }

    return (
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <Link className="navbar-brand brand-logo" to="/">
                    <img src={require("../../assets/images/logo-viva.png")} alt="logo"/></Link>
                <Link className="navbar-brand brand-logo-mini" to="/"><img
                    src={require("../../assets/images/logo-viva.png")} alt="logo"/></Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button"
                        onClick={() => document.body.classList.toggle('sidebar-icon-only')}>
                    <span className="mdi mdi-menu"></span>
                </button>

                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile">
                        <Dropdown>
                            <Dropdown.Toggle className="nav-link">
                                <div className="nav-profile-img">
                                    <img src={require("../../assets/images/faces/face1.jpg")} alt="user"/>
                                    <span className="availability-status online"></span>
                                </div>
                                <div className="nav-profile-text">
                                    <p className="mb-1 text-black">Ahmad AlKashami</p>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="navbar-dropdown">
                                <Dropdown.Item href="!#" onClick={evt => evt.preventDefault()}>
                                    <i className="mdi mdi-cached mr-2 text-success"></i>
                                    <Trans>Activity Log</Trans>
                                </Dropdown.Item>
                                <Dropdown.Item href="!#" onClick={evt => evt.preventDefault()}>
                                    <i className="mdi mdi-logout mr-2 text-primary"></i>
                                    <Trans>Signout</Trans>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle className="nav-link count-indicator">
                                <i className="mdi mdi-bell-outline"></i>
                                <span className="count-symbol bg-danger"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                                <h6 className="p-3 mb-0"><Trans>Notifications</Trans></h6>
                                <div className="dropdown-divider"></div>
                                <Dropdown.Item className="dropdown-item preview-item"
                                               onClick={evt => evt.preventDefault()}>
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="mdi mdi-calendar"></i>
                                        </div>
                                    </div>
                                    <div
                                        className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1"><Trans>Event
                                            today</Trans></h6>
                                        <p className="text-gray ellipsis mb-0">
                                            <Trans>Just a reminder that you have an event today</Trans>
                                        </p>
                                    </div>
                                </Dropdown.Item>
                                <div className="dropdown-divider"></div>
                                <Dropdown.Item className="dropdown-item preview-item"
                                               onClick={evt => evt.preventDefault()}>
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-warning">
                                            <i className="mdi mdi-settings"></i>
                                        </div>
                                    </div>
                                    <div
                                        className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1"><Trans>Settings</Trans>
                                        </h6>
                                        <p className="text-gray ellipsis mb-0">
                                            <Trans>Update dashboard</Trans>
                                        </p>
                                    </div>
                                </Dropdown.Item>
                                <div className="dropdown-divider"></div>
                                <Dropdown.Item className="dropdown-item preview-item"
                                               onClick={evt => evt.preventDefault()}>
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-info">
                                            <i className="mdi mdi-link-variant"></i>
                                        </div>
                                    </div>
                                    <div
                                        className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1"><Trans>Launch
                                            Admin</Trans></h6>
                                        <p className="text-gray ellipsis mb-0">
                                            <Trans>New admin wow</Trans>!
                                        </p>
                                    </div>
                                </Dropdown.Item>
                                <div className="dropdown-divider"></div>
                                <h6 className="p-3 mb-0 text-center cursor-pointer"><Trans>See all notifications</Trans>
                                </h6>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle className="nav-link count-indicator">
                                <i className="mdi mdi-translate"></i>
                                <span className="count-symbol bg-danger"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                                <Dropdown.Item href="!#" name="ltr" onClick={onChangeLanguages}>
                                    <Trans>English</Trans>
                                </Dropdown.Item>
                                <div className="dropdown-divider"></div>
                                <Dropdown.Item href="!#" name="rtl"  onClick={onChangeLanguages}>
                                    <Trans>Arabic</Trans>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                        onClick={toggleOffCanvas}>
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
