import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css';
import swissLogo from '../../assets/Images/swiss-logo-black.png';


function Footer() {
    return (
        <div className="footer">
            <div className="footer_main">
                <div className="footer__company-info">
                    <div className="footer__company-img"><img src={swissLogo} alt="Swiss Logo" /></div>
                    <div className="footer__company-address">
                        <h3>Km 12, Lagos/Ibadan Exp.Unity Est.Road, Ibafo, Ogun State.</h3>
                    </div>
                    <div className="footer__comapny-contact">
                        <p>+234 8059 2974 71</p>
                        <p>info@stovagroup.com</p>
                    </div>
                </div>
                <div className="footer__links">
                    <div className="footer__links-quick">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'>Contact</Link></li>
                            <li><Link to='/'>Distributorship</Link></li>
                            <li><Link to='/'>Buy products</Link></li>
                        </ul>
                    </div>
                    <div className="footer__links-products">
                        <h3>Products</h3>
                        <ul>
                            <li><Link to='/'>Liquid</Link></li>
                            <li><Link to='/'>Gel</Link></li>
                            <li><Link to='/'>Regular & Refil</Link></li>
                            <li><Link to='/'>Card</Link></li>
                            <li><Link to='/'>Scent pad</Link></li>
                        </ul>
                    </div>
                    <div className="footer__links-legal">
                        <h3>Legal</h3>
                        <ul>
                            <li><Link to='/'>Privacy</Link></li>
                            <li><Link to='/'>Terms and Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__social">
                    <span>
                        <Link to ='./'>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6411 1.58325H5.72439C3.53826 1.58325 1.76605 3.35546 1.76605 5.54158V13.4583C1.76605 15.6444 3.53826 17.4166 5.72439 17.4166H13.6411C15.8272 17.4166 17.5994 15.6444 17.5994 13.4583V5.54158C17.5994 3.35546 15.8272 1.58325 13.6411 1.58325Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.8494 9.00124C12.9471 9.66011 12.8345 10.333 12.5278 10.9242C12.221 11.5154 11.7356 11.9949 11.1407 12.2943C10.5457 12.5938 9.87148 12.698 9.21387 12.5922C8.55627 12.4864 7.94877 12.1759 7.47779 11.7049C7.00681 11.2339 6.69633 10.6264 6.59051 9.96883C6.4847 9.31122 6.58893 8.63699 6.88839 8.04204C7.18784 7.44709 7.66727 6.96171 8.25849 6.65494C8.84971 6.34817 9.5226 6.23563 10.1815 6.33333C10.8535 6.43299 11.4757 6.74615 11.9561 7.22657C12.4366 7.70699 12.7497 8.32918 12.8494 9.00124Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.0369 5.14575H14.0466" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </span>
                    <span>
                        <Link to ='./'>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                <path d="M9.18274 0C4.21244 0 0.182739 4.05403 0.182739 9.05433C0.182739 13.5729 3.47347 17.3181 7.7768 18V11.6722H5.49057V9.05433H7.7768V7.05946C7.7768 4.78841 9.12063 3.53607 11.1755 3.53607C12.1602 3.53607 13.1917 3.71265 13.1917 3.71265V5.93933H12.054C10.9379 5.93933 10.5887 6.63839 10.5887 7.35466V9.05252H13.0828L12.6841 11.6704H10.5887V17.9982C14.892 17.32 18.1827 13.5738 18.1827 9.05433C18.1827 4.05403 14.153 0 9.18274 0Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="18.1622" height="18.1622" fill="white" transform="translate(0.182739)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </span>
                    <span>
                        <Link to ='./'>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4362 3.48904C15.4474 3.64253 15.4474 3.79514 15.4474 3.94775C15.4474 8.61822 11.9414 14 5.53395 14C3.5599 14 1.72599 13.4202 0.182739 12.4134C0.463016 12.4458 0.732912 12.4572 1.02443 12.4572C2.59277 12.4611 4.11669 11.9293 5.35056 10.9477C4.62341 10.9344 3.91853 10.6912 3.33433 10.252C2.75013 9.81282 2.31577 9.19963 2.09191 8.49806C2.30731 8.53051 2.52357 8.55244 2.75021 8.55244C3.0625 8.55244 3.37651 8.50858 3.66803 8.43228C2.8789 8.27073 2.16931 7.83704 1.65992 7.20496C1.15053 6.57288 0.872785 5.78142 0.873916 4.96517V4.92131C1.33845 5.18356 1.87738 5.34757 2.44831 5.3695C1.97001 5.04725 1.57783 4.60997 1.30674 4.09667C1.03565 3.58337 0.894083 3.01002 0.894677 2.42777C0.894677 1.77171 1.06682 1.17003 1.36873 0.645534C2.24428 1.73752 3.33629 2.63086 4.57403 3.26771C5.81178 3.90456 7.16765 4.27071 8.55385 4.34244C8.50021 4.07931 8.46734 3.80654 8.46734 3.53289C8.46711 3.06888 8.55709 2.60937 8.73211 2.18064C8.90714 1.7519 9.16379 1.36235 9.4874 1.03425C9.811 0.706141 10.1952 0.445919 10.6181 0.268456C11.0409 0.0909935 11.4941 -0.000230128 11.9518 4.35966e-07C12.9552 4.35966e-07 13.8609 0.426263 14.4976 1.11565C15.2777 0.962702 16.0258 0.67397 16.7087 0.262248C16.4487 1.07865 15.904 1.77092 15.1767 2.20937C15.8685 2.12936 16.5447 1.94489 17.1827 1.66207C16.7062 2.36646 16.1157 2.98414 15.4362 3.48904Z" fill="black"/>
                            </svg>
                        </Link>
                    </span>
                </div>

            </div>

            <div className="footer__ref">
                <span>© Stova Industries Limited</span>

                <div className="footer__ref-xpato">
                    Created by xpato
                </div>

            </div>
        </div>
    )
}

export default Footer
