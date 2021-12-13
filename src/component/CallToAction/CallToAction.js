import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CallToAction.css';


const CallToAction = () => {
    return (
        
           <section className="cta-section mt-5 container-fluid">
              
                 <Row>
                   <Col className="cta text-center py-4">
                        <h3>We make a life by what we give.</h3>
                        <h3>Join with us as a Volunteer</h3> 
                   </Col>
                   <Col className="text-center m-auto py-5">
                        <Link className="cta-btn btn btn-light" to="/about-us">Join as a Volunteer</Link>
                   </Col>
                </Row>

           </section>

    );
};

export default CallToAction;