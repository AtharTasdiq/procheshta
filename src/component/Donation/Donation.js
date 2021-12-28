import React from 'react';
import {  Accordion, Col, Container, Row } from 'react-bootstrap';
import DonationImage from "../../images/Donate.png";
import BackToTop from "react-back-to-top-button";
import { useForm } from "react-hook-form";
import './Donation.css';
import Footer from '../Footer/Footer';

const Donation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
    <div style={{backgroundColor:"#b6edf8"}}>
        <Container>
            <section className="pt-5">
                <Row>
                    <Col className='text-center'>
                        <img className="w-75" src={DonationImage} alt="donate"></img>
                    </Col>
                    <Col className='text-center'>
                        <div className='donation-form'>
                            <form className='div-design p-5' onSubmit={handleSubmit(onSubmit)}>
                                <label for="name">Name</label>
                                <input className="input-design" placeholder="Enter Name" type={"text"} {...register("example", { required: true })} /><br/>
                                <label for="name">Email</label>
                                <input className="input-design" placeholder="Enter Email" type={"email"} {...register("example", { required: true })} /><br/>
                                <label for="name">Phone</label>
                                <input className="input-design" placeholder="Enter Phone Number" type={"text"} {...register("example", { required: true })} /><br/>
                                <label for="name">Amount</label>
                                <input className="input-design" placeholder="Enter Your Amount" type={"text"} {...register("example", { required: true })} /><br/>
                                <label for="name">TrxID</label>
                                <input className="input-design" placeholder="Enter Bkash TrxID" type={"text"} {...register("example", { required: true })} /><br/>
                                {errors.exampleRequired && <span>This field is required</span>}
                                <input className="mt-3 btn btn-outline-dark" type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className='why-should-u-donate'>
                <div className='text-center'>
                    <h1 className="py-5 page-title">Why Should We Donate?</h1>
                 </div>
                 <div className='donation-img'>
                     <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRpb258ZW58MHx8MHx8&w=1000&q=80" alt='/'></img>
                     <img src='https://donate.worldvision.org/wp-content/uploads/2017/08/D200-0933-23_cmyk-1.jpg' alt='/'></img>
                     <img src='https://img.freepik.com/free-photo/woman-gloves-holding-donation-box-food-supplies-people-isolation-essential-goods-oil-canned-food-cereals-milk-vegetables-fruit_149384-276.jpg?size=626&ext=jpg' alt='/'></img>
                 </div>

                <div className='donate-description mt-5'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>This Helps Us To Buy Foods For The Helpless People</Accordion.Header>
                                <Accordion.Body>
                                We host various type of civic campaigns for the sake of human kind. We beleive in 
                                loving, respecting and helping people. Every lives matter!Awareness campaigns are often
                                 the first step to introduce the audience to new services, programmes, facilities or actions. It is aimed at 
                                 building familiarity to a desirable behavior, say, promoting immunization or improving public health.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>We Make Shelters For The Homeless People</Accordion.Header>
                                <Accordion.Body>
                                The knowledge that you’re helping others is hugely empowering and, 
                                in turn, can make you feel happier and more fulfilled. Research has 
                                identified a link between making a donation to charity and increased
                                 activity in the area of the brain that registers pleasure - proving 
                                 that as the old adage goes, it really is far better to give than to 
                                 receive.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>A Big Part Of Our Donation Goes For The Education</Accordion.Header>
                                <Accordion.Body>
                                wareness matters because it can help to improve the 
                                lives of patients. Knowledge is a powerful tool. It 
                                causes people to take action that can improve treatments, 
                                diagnostics, and social supports. Increased understanding 
                                about chronic conditions in the community can have three 
                                powerful effects.
                                </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                </div>
            </section>
        </Container>
        <Footer></Footer>
        <BackToTop
                    // showOnScrollUp
                    showAt={100}
                    speed={7000}
                    // easing="easeOutSine"
                >
                    <span className="backToTop"><img className="border border-dark border-2 rounded-circle" src="https://cdn.discordapp.com/attachments/560412279078780938/919876120659230740/Untitled_design__1_-removebg-preview.png" alt=""></img></span>
                </BackToTop>
    </div>
    );
};

export default Donation;