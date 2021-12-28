import React from 'react';
import { useForm } from "react-hook-form";
import BackToTop from "react-back-to-top-button";
import address from "../../images/address.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import Footer from '../Footer/Footer';
import "./Contact.css";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div style={{backgroundColor:"#b6edf8"}}>
            <section className="contact-form-section container">
                <div className='text-center'>
                    <h1 className="py-5 page-title">Contact Us</h1>
                </div>
                <div className='text-center'>
                    <p className="py-5 page-title bg-info">
                    Donate us. we will eat your taka. 
                    donate us. there are goribs like shykat , tasdiq. 
                    <br></br>They don't have jaingga to wear. shykat churi
                     korese irish boy er jaingga. Naushad er nick name dragon pata. 
                     gajar bepsha ase polader.<br></br> vabtasi baba o bechum. customer hocche giye tada shykat.</p>
                </div>
                <div class="conact-body d-flex justify-content-center">
                    <div class="left-contact-body mx-5">
                        <div className="icon-and-info my-4">
                            <icon><img className='contact-icon mx-3' src={address} alt="address"></img></icon>
                            <div>
                                <h3>Address</h3>
                                <p>Lorem ipsum 302 position fuchka</p>
                            </div>
                        </div>
                        <div className="icon-and-info my-4">
                            <icon><img className='contact-icon mx-3' src={email} alt="email"></img></icon>
                            <div>
                                <h3>Email</h3>
                                <p>Lorem ipsum 302 position fuchka</p>
                            </div>
                        </div>
                        <div className="icon-and-info my-4">
                            <icon><img className='contact-icon mx-3' src={phone} alt="phone"></img></icon>
                            <div>
                                <h3>Phone Number</h3>
                                <p>Lorem ipsum 302 position fuchka</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-contact-body mx-5">
                    <div className='contact-form'>
                            <form className='div-design p-5' onSubmit={handleSubmit(onSubmit)}>
                                <label for="name">Name :</label>
                                <input className="input-design" placeholder="Enter Name" type={"text"} {...register("example", { required: true })} /><br/>
                                <label for="email">Email :</label>
                                <input className="input-design mb-4" placeholder="Enter Email" type={"email"} {...register("example", { required: true })} /><br/>
                                <label className="mb-2" for="message">Message :</label> <br/>
                                <textarea className="input-text-design mx-auto p-2 w-100" placeholder="Your Message"{...register("example", { required: true })} /><br/>
                                <input className="mt-3 btn btn-outline-dark" type="submit" />
                            </form>
                        </div>
                    </div>  
                </div>
        </section>
        <Footer></Footer>
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

export default Contact;