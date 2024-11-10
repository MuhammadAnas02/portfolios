import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';


function Contactus() {
  return (
    <section  id='Contact' className="contact-section">
      <div className="container">
        <div className="text-center header">
          <h1>Contact Us</h1>
          <p>You can easily contact with us</p>
        </div>
        <form action="https://formspree.io/f/meoqgdaa" method="POST">
          <div className="form-container">
            <div className="form-group">
              <label>Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" id="email" name="email" required placeholder='Enter your Email' />
            </div>
            <div className="form-group-full">
              <label>Message</label>
              <textarea id="message" name="message" required placeholder='Enter your message'></textarea>
            </div>
            <div className="button-container">
              <button type="submit">Send Message</button>
            </div>
            <div className="contact-info">
              <a href="mailto:anasahmedahmed378@gmail.com">anasahmedahmed378@gmail.com</a>
              <p>Muhammad Anas</p>
              <div className="social-links">
                <Link href={'https://github.com/MuhammadAnas02'}><FaGithub size={30}/></Link>
                <Link href={'https://www.linkedin.com/in/muhammad-anas-40494b2b6/'}><FaLinkedinIn size={30}/></Link>
                <Link href={'https://github.com/MuhammadAnas02'}><ImInstagram size={30}/></Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contactus;
