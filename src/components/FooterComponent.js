import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home' style={{ color: '#FFF' }} >Home</Link></li>
                            <li><Link to='/services' style={{ color: '#FFF' }} >Services</Link></li>
                            <li><Link to='/gallery' style={{ color: '#FFF' }} >Gallery</Link></li>
                            <li><Link to='/products' style={{ color: '#FFF' }} >Products</Link></li>
                            <li><Link to='/contact' style={{ color: '#FFF' }} >Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/" style={{ color: '#FFF' }} ><i className="fa fa-instagram fa-lg" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/" style={{ color: '#FFF' }} ><i className="fa fa-facebook fa-lg" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/" style={{ color: '#FFF' }} ><i className="fa fa-twitter fa-lg" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/" style={{ color: '#FFF' }} ><i className="fa fa-youtube fa-lg" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/" style={{ color: '#FFF' }} ><i className="fa fa-whatsapp fa-lg" /></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Contact</h5>
                        <a role="button" className="btn btn-link" href="tel:+17777777777" style={{ color: '#FFF' }} ><i className="fa fa-phone fa-lg" /> 1-777-777-7777</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co" style={{ color: '#FFF' }} ><i className="fa fa-envelope-o fa-lg" /> dianasindigo@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;