import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="business-footer1">
            <div className="footer-section contact-info1">
                <h4>Contact Us</h4>
                <p>Text or Call Us: (856) 617-3222</p>
                <p><a href="mailto:aapowerwashers@gmail.com">aapowerwashers@gmail.com</a></p>
                <p>Offices in Cherry Hill, NJ and Margate City, NJ</p>
            </div>
            <div className="footer-section social-links1">
                <h4>Follow Us</h4>
                <a href="https://www.facebook.com/profile.php?id=61559772597900" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/aapowerwashers/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="footer-section business-hours1">
                <h4>Business Hours</h4>
                <p>8:00 AM - 6:00 PM</p>
                <p>Monday thru Friday</p>
            </div>
        </footer>
    );
};

export default Footer;
