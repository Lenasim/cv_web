import React from 'react';
import NavItem from './NavItem'


class Nav extends React.Component {
    render() {
        return (
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
                        <NavItem title="A Propos" to="about" />
                        <NavItem title="Compétences" to="skills" />
                        <NavItem title="Diplômes" to="education" />
                        <NavItem title="Expériences" to="experiences" />
                        <NavItem title="Projets" to="projects" />
                        <div className="nav-icons ">
                            <a href="mailto:radical.rin@gmail.com">
                                <i className="fas fa-at"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/lena-hailin-sim">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/lenasim">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="file/CV-HailinSIM-dev.pdf">
                                <i className="fas fa-file-download"></i>
                            </a>
                        </div>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav