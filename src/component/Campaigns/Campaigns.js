import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BackToTop from "react-back-to-top-button";
import "./Campaigns.css";

const Campaigns = () => {
    const [campaigns, setCampaigns]= useState([]);
    useEffect(() => {
        fetch("./demoData.json")
        .then(res=>res.json())
        .then(data=>setCampaigns(data))
    },[]);
    // console.log(campaigns);
    return (
        <div className="campaign-body">
            <div>
            <div>
                <Container>
                    <div className="text-center">
                    <h1 className="py-5 page-title">All Our Campaigns</h1>
                    </div>
                    <Row xs={1} lg={3} md={2} sm={1} className="g-5 mx-3">
                        {campaigns.map( campaign => (
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
                </Container>
                <BackToTop
                    // showOnScrollUp
                    showAt={100}
                    speed={7000}
                    // easing="easeOutSine"
                >
                    <span className="backToTop"><img src="https://cdn.discordapp.com/attachments/560412279078780938/919876120659230740/Untitled_design__1_-removebg-preview.png" alt=""></img></span>
                </BackToTop>
            </div>
        </div>
        </div>
    );
};

export default Campaigns;