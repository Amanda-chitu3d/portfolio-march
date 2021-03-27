import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer bg-dark pt-4">
           <div className="pl-5 pr-5
             d-flex justify-content-between text-light ">
            <ul className="list-unstyled">
                <li><Link className="footer-link fs-4" to="/">Features</Link></li>
                <li><Link className="footer-link" to="/">Cool Stuff</Link></li>
                <li><Link className="footer-link" to="/">Random Feature</Link></li>
                <li><Link className="footer-link" to="/">Team Feature</Link></li>
                <li><Link className="footer-link" to="/">Stuff for Developers</Link></li>
                <li><Link className="footer-link" to="/">Another One</Link></li>
                <li><Link className="footer-link" to="/">Last Time</Link></li>
            </ul>
            <ul className="list-unstyled">
                <li><Link className="footer-link" to="/">Resources</Link></li>
                <li><Link className="footer-link" to="/">Resources</Link></li>
                <li><Link className="footer-link" to="/">Resources Name</Link></li>
                <li><Link className="footer-link" to="/">Another Resouces</Link></li>
                <li><Link className="footer-link" to="/">final Resource</Link></li>
            </ul>
            <ul className="list-unstyled">
                <li><Link className="footer-link" to="/">About</Link></li>
                <li><Link className="footer-link" to="/">Team</Link></li>
                <li><Link className="footer-link" to="/">Locations</Link></li>
                <li><Link className="footer-link" to="/">Privacy</Link></li>
                <li><Link className="footer-link" to="/">Terms</Link></li>
            </ul>
            </div>
            <div className="align-self-end align-center text-light">
                <p>Copyright &copy; 2021 Amanda Portfolio. All Rights Reserved.
                </p>
             </div>
        </footer>
      
    )
}

export default Footer
