import React from 'react';
import NavItem from './NavItem'


class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Hailin SIM</span>
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile_lena.png" alt="" />
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <NavItem title="About" to="#about" />
                            <NavItem title="Education" to="#education" />
                            <NavItem title="Experience" to="#experience" />
                            <NavItem title="Skills" to="#skills" />
                            <NavItem title="Projects" to="#projects" />
                            {/* <NavItem title="Contact" to="#contact" /> */} 
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav