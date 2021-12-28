import React from 'react';
import "./AboutUs.css";
import { useState, useEffect } from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import BackToTop from "react-back-to-top-button";
import Footer from '../Footer/Footer';

const AboutUs = () => {
    const [team, setTeam] = useState([]);

    useEffect(()=>{
       fetch('./adminData.json')
       .then(res => res.json())
       .then(data=> setTeam(data)) 
    },[])
    console.log(team);
   

    return (
        <section style={{backgroundColor:"#b6edf8"}}>
            <div className='about-us container pt-5'>
                <div className='uper-section col-md-12 '>
                    <h2>"There’s a part of every one  of us that dreams<br/> of a better  world. 
                        That spark of <br/> inspiration to help a person fix a<br/> neighborhood, 
                        or even change a nation."</h2>
                </div>
                <div className='lower-section col-md-12'>
                    <p>We reserve the right, at our sole discretion, 
                        to change or modify portions of these Terms
                        of Service at any time and without notice. 
                        When we do this, we will post the revised Terms
                        of Service on this page and will indicate the
                        date of such revision.We reserve the right, at our sole discretion, 
                        to change or modify portions of these Terms
                        of Service at any time and without notice. 
                        When we do this, we will post the revised Terms
                        of Service on this page and will indicate the
                        date of such revision.</p>
                </div>
            </div>
            <div className='our-team container mt-5'>
               <div className='text-center'>
                  <h1 className="py-5 page-title">Our Team</h1>
               </div>
            <Row xs={1} lg={3} md={2} sm={1} className="g-5 mx-3">
                        {team.map( team => (
                            <Col nid={team.nid} >
                                <Card className="card-design">
                                    <Card.Img className="w-100 mx-auto p-3" variant="top" src={team.img} />
                                    <Card.Body>
                                    <Card.Title className="fs-2 title-design fw-bolder">{team.name}</Card.Title>
                                    <Card.Text><span className="fw-bolder creator-name">{team.email}</span></Card.Text>
                                    <Card.Text >Phone: <span className="fw-bolder creator-name">{team.phone}</span></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
            </div>
            <Footer></Footer>
            <BackToTop
                    // showOnScrollUp
                    showAt={100}
                    speed={7000}
                    // easing="easeOutSine"
                >
                    <span className="backToTop"><img className="border border-dark border-2 rounded-circle" src="https://cdn.discordapp.com/attachments/560412279078780938/919876120659230740/Untitled_design__1_-removebg-preview.png" alt=""></img></span>
                </BackToTop>
        </section>

    );
};

export default AboutUs;