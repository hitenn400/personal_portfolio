import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi'
import{AiFillInstagram,AiOutlineInstagram,AiOutlineWhatsApp} from 'react-icons/ai'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qm4q0rd', 'template_0nnctwi', form.current, 'H3yDTaEO1WUwB4NGI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        e.target.reset();
    };
    return(
        <>
            <section id='contact'>
                <h5>Get in Touch</h5>
                <h2>Contact Me </h2>
                <div className='container contact_container'>
                    <div className='contact_box'>
                        <div className='contact_box_inner'>
                            <HiOutlineMail></HiOutlineMail>
                            <h4>Email</h4>
                            <h5>hitenkakwani400@gmail.com</h5>
                            <a href="mailto:hitenkakwani400@gmail.com" target="blank">Send a message</a>
                        </div>
                        <div className='contact_box_inner'>
                            <AiOutlineInstagram></AiOutlineInstagram>
                            <h4>Instagram</h4>
                            <h5>@hiten__</h5>
                            <a href="#" target="blank">Send a message</a>
                        </div>
                        <div className='contact_box_inner'>
                            <AiOutlineWhatsApp></AiOutlineWhatsApp>
                            <h4>Whatsapp</h4>
                            <h5>(+91)782-889-2224</h5>
                            <a href="https://api.whatsapp.com/send?phone=7828892224" target="blank">Send a message</a>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name"  placeholder='Your Full Name' required></input>
                        <input type="email" name="email" placeholder='Your Email' required></input>
                        <textarea name='message' rows='7' placeholder="Your Message" required ></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                    <div>

                    </div>
                </div>
            </section>
        </>
        );
}
export default Contact;