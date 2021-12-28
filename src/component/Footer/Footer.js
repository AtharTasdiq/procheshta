import React from 'react';
import './Footer.css';
import logo from "../../images/logo1.png";
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        
        <footer className="page-footer font-small blue pt-4 mt-5">
            <Container>
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-4 mt-md-0 mt-3">
                    <h5 className="text-uppercase"> <img src={logo} alt="footer-logo"/> </h5>
                    <p className="footer-text">Just Serve in your community <br></br> and make difference in this world.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="links-title-design">Main</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-dark" href="#!">Home</a></li>
                        <li><a className="text-dark" href="#!">Dashboard</a></li>
                        <li><a className="text-dark" href="#!">Campaigns</a></li>
                    </ul>
                </div>

                <div className="col-md-2 mb-md-0 mb-3">
                    <h5 className="links-title-design">Links</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-dark" href="#!">About Us</a></li>
                        <li><a className="text-dark" href="#!">Contact</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="links-title-design">Links</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-dark" href="#!">Sign In</a></li>
                        <li><a className="text-dark" href="#!">Register Now</a></li>
                        <li><a className="text-dark" href="#!">Donate!</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-light text-center py-3">© 2021 Copyright: Procheshta
        </div>
        </Container>

</footer>
    );
};

export default Footer;