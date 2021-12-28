import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BackToTop from "react-back-to-top-button";
import Slider from '../Slider/Slider';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import CallToAction from '../CallToAction/CallToAction';
import "./Home.css";
import PreviousCampaigns from '../PreviousCampaigns/PreviousCampaigns';
import TopArticles from '../TopArticles/TopArticles';
import Footer from '../Footer/Footer';

const Home = () => {
    // calling hooks for storing feching data
    const [campaigns, setCampaigns]= useState([]);
    useEffect(() => {
        fetch("./demoData.json")
        .then(res=>res.json())
        .then(data=>setCampaigns(data))
    },[]);
    // slicing uptp 3 and storing in array
    const upcomingCampaigns = campaigns.filter(campaign => campaign.status === "upcoming").slice(0,3);
    //console.log(upcomingCampaigns);
    const volunteer=true;
    
    return (
        <div style={{backgroundColor:"#b6edf8"}}>
            <Slider></Slider>
            <Container>
            <div className="text-center">
                <h1 className="py-5 page-title">On Going Campaigns</h1>
            </div>
            <Row xs={1} lg={3} md={2} sm={1} className="g-5 mx-3">
                        {upcomingCampaigns.map( campaign => (
                            <Col key={campaign.key} >
                                <Card className="card-design">
                                    <Card.Img className="w-100 mx-auto p-3" variant="top" src={campaign.campaignImg} />
                                    <Card.Body>
                                    <Card.Title className="fs-2 title-design fw-bolder">{campaign.title}</Card.Title>
                                    <Card.Text>Posted by <span className="fw-bolder creator-name">{campaign.creatorName}</span></Card.Text>
                                    <Card.Text>
                                        {campaign.description.slice(0,150)}....
                                    </Card.Text>
                                    <Link to={`/campaigns/${campaign.key}`} className="text-center">
                                         <Button className="btn text-light mx-auto fw-bolder campaign-button">Join Campaign</Button>
                                    </Link>    
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center my-5">
                    <Link to="/campaigns" className="text-center">
                        <Button className="btn text-light mx-auto fw-bolder campaign-button py-2 px-5">Click For More . . .</Button>
                    </Link>
                    </div>

            </Container>
            <WhatWeDo></WhatWeDo>
            <CallToAction volunteer={volunteer}></CallToAction>
            <PreviousCampaigns campaigns={campaigns}></PreviousCampaigns>
            <TopArticles/>
            <Footer/>
            <BackToTop
                    // showOnScrollUp
                    showAt={100}
                    speed={8000}
                    // easing="easeOutSine"
                >
                    <span className="backToTop"><img className="border border-dark border-2 rounded-circle" src="https://cdn.discordapp.com/attachments/560412279078780938/919876120659230740/Untitled_design__1_-removebg-preview.png" alt=""></img></span>
                </BackToTop>
        </div>
    );
};

export default Home;