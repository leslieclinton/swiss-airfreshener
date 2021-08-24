import React,  {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import SwissLogo from '../../assets/Images/swiss-logo-black.png'

function Navbar() {
        const [toggleNav, setToggleNav] = useState(false);

        const navToggleHnadler =()=>{
            setToggleNav((prev)=> !prev)
        }

    return (
        <>
        <div className="desktop__nav">
            <div className="desktop__nav-logo">
                <img src={SwissLogo} alt="Swiss Logo" />
            </div>
            <div className="desktop__nav-links">
                <ul>
                    <li><Link to =''>HOME</Link></li>
                    <li><Link to =''>LIQUID</Link></li>
                    <li><Link to =''>GEL</Link></li>
                    <li><Link to =''>REFIL & REGULAR</Link></li>
                    <li><Link to =''>CARD</Link></li>
                    <li><Link to =''>SCENT PAD</Link></li>
                </ul>
            </div>
            <div className="desktop__nav-btns">
               <Link to='/'>
                <div className="nav-buy-btn">
                    <span>BUY PRODUCTS</span>
                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.71875 0.308965C1.49497 0.308965 1.28036 0.39786 1.12213 0.556094C0.963895 0.714328 0.875 0.928939 0.875 1.15271C0.875 1.37649 0.963895 1.5911 1.12213 1.74934C1.28036 1.90757 1.49497 1.99646 1.71875 1.99646H3.59187L5.80587 10.8558C5.99403 11.6068 6.6665 12.1215 7.44022 12.1215H17.118C17.8799 12.1215 18.5271 11.6152 18.7271 10.8812L20.9141 2.84021H6.78125L7.20312 4.52771H18.7254L17.1172 10.434H7.43937L5.22622 1.57459C5.1348 1.21113 4.92405 0.888856 4.62773 0.659386C4.33141 0.429916 3.96665 0.306522 3.59187 0.308965H1.71875ZM16.0625 12.1215C14.6745 12.1215 13.5312 13.2647 13.5312 14.6527C13.5312 16.0407 14.6745 17.184 16.0625 17.184C17.4505 17.184 18.5938 16.0407 18.5938 14.6527C18.5938 13.2647 17.4505 12.1215 16.0625 12.1215ZM8.46875 12.1215C7.08078 12.1215 5.9375 13.2647 5.9375 14.6527C5.9375 16.0407 7.08078 17.184 8.46875 17.184C9.85672 17.184 11 16.0407 11 14.6527C11 13.2647 9.85672 12.1215 8.46875 12.1215ZM8.46875 13.809C8.94462 13.809 9.3125 14.1768 9.3125 14.6527C9.3125 15.1286 8.94462 15.4965 8.46875 15.4965C7.99288 15.4965 7.625 15.1286 7.625 14.6527C7.625 14.1768 7.99288 13.809 8.46875 13.809ZM16.0625 13.809C16.5384 13.809 16.9062 14.1768 16.9062 14.6527C16.9062 15.1286 16.5384 15.4965 16.0625 15.4965C15.5866 15.4965 15.2188 15.1286 15.2188 14.6527C15.2188 14.1768 15.5866 13.809 16.0625 13.809Z" fill="white"/></svg>
                </div></Link> 
               <Link to='/'> <div className="nav-blog-btn">BLOG</div> </Link>
            </div>
        </div>

        <div className="mobile__nav">
            <div className="mobile__nav-logo">
                <img src={SwissLogo} alt="Swiss Logo" />
            </div>
            <div className="mobile__nav-hamburger" onClick={navToggleHnadler}>
                <div className="nav-ham-item"></div>
                <div className="nav-ham-item"></div>
                <div className="nav-ham-item"></div>
                <div className="nav-ham-item"></div>
            </div>

            <div className={clsx('mobile__nav-links-container', !toggleNav? 'hide-nav':' show-nav ')}>
                 <div className="mobile__nav-links">
                 <ul>
                     <li><Link to =''>HOME</Link></li>
                     <li><Link to =''>LIQUID</Link></li>
                     <li><Link to =''>GEL</Link></li>
                     <li><Link to =''>REFIL & REGULAR</Link></li>
                     <li><Link to =''>CARD</Link></li>
                     <li><Link to =''>SCENT PAD</Link></li>
                 </ul>
                 </div>
 
                 <div className="mobile__nav-btns">
                <Link to='/'>
                 <div className="nav-buy-btn">
                     <span>BUY PRODUCTS</span>
                     <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.71875 0.308965C1.49497 0.308965 1.28036 0.39786 1.12213 0.556094C0.963895 0.714328 0.875 0.928939 0.875 1.15271C0.875 1.37649 0.963895 1.5911 1.12213 1.74934C1.28036 1.90757 1.49497 1.99646 1.71875 1.99646H3.59187L5.80587 10.8558C5.99403 11.6068 6.6665 12.1215 7.44022 12.1215H17.118C17.8799 12.1215 18.5271 11.6152 18.7271 10.8812L20.9141 2.84021H6.78125L7.20312 4.52771H18.7254L17.1172 10.434H7.43937L5.22622 1.57459C5.1348 1.21113 4.92405 0.888856 4.62773 0.659386C4.33141 0.429916 3.96665 0.306522 3.59187 0.308965H1.71875ZM16.0625 12.1215C14.6745 12.1215 13.5312 13.2647 13.5312 14.6527C13.5312 16.0407 14.6745 17.184 16.0625 17.184C17.4505 17.184 18.5938 16.0407 18.5938 14.6527C18.5938 13.2647 17.4505 12.1215 16.0625 12.1215ZM8.46875 12.1215C7.08078 12.1215 5.9375 13.2647 5.9375 14.6527C5.9375 16.0407 7.08078 17.184 8.46875 17.184C9.85672 17.184 11 16.0407 11 14.6527C11 13.2647 9.85672 12.1215 8.46875 12.1215ZM8.46875 13.809C8.94462 13.809 9.3125 14.1768 9.3125 14.6527C9.3125 15.1286 8.94462 15.4965 8.46875 15.4965C7.99288 15.4965 7.625 15.1286 7.625 14.6527C7.625 14.1768 7.99288 13.809 8.46875 13.809ZM16.0625 13.809C16.5384 13.809 16.9062 14.1768 16.9062 14.6527C16.9062 15.1286 16.5384 15.4965 16.0625 15.4965C15.5866 15.4965 15.2188 15.1286 15.2188 14.6527C15.2188 14.1768 15.5866 13.809 16.0625 13.809Z" fill="white"/></svg>
                 </div></Link> 
                <Link to='/'> <div className="nav-blog-btn">BLOG</div> </Link>
             </div>
 
             </div>
           
        </div>

        </>
    )
}

export default Navbar
