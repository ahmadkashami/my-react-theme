import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import {useTranslation} from "react-i18next";


function App() {
    const location = useLocation()
    const [isFullPageLayout, setIsFullPageLayout] = useState(null)

    const onRouteChanged = () => {
        window.scrollTo(0, 0);
        const fullPageLayoutRoutes = [
            '/user-pages/login',
             '/user-pages/register',
            // '/user-pages/lockscreen',
            // '/error-pages/error-404',
            // '/error-pages/error-500',
            // '/general-pages/landing-page'
        ];
        for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
            if (location.pathname === fullPageLayoutRoutes[i]) {
                setIsFullPageLayout(true)
                document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
                break;
            } else {
                setIsFullPageLayout(false)
                document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
            }
        }
    }

    useEffect(() => {
            onRouteChanged()
    }, [location]);

    let navbarComponent = !isFullPageLayout ? <Navbar/> : '';
    let sidebarComponent = !isFullPageLayout ? <Sidebar/> : '';
    let footerComponent = !isFullPageLayout ? <Footer/> : '';
    return (
        <div className="container-scroller">
            {navbarComponent}
            <div className="container-fluid page-body-wrapper">
                {sidebarComponent}
                <div className="main-panel">
                    <div className="content-wrapper">
                        <AppRoutes/>
                    </div>
                    {footerComponent}
                </div>
            </div>
        </div>
    )
}


export default App;
