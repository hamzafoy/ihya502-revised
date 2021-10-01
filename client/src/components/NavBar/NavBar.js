/*::::::::::::::::::::::::::::::::::::::::
:::::  Importing CSS, Dependencies  ::::::
::::::::::::::::::::::::::::::::::::::::*/

import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';



/*::::::::::::::::::::::::::::::::::::::::
::  Creating Navigation Bar Component  :::
::::::::::::::::::::::::::::::::::::::::*/

class NavBar extends React.Component {

    render() {

        return(
            <div className="nav-bar-container">

                <section className="nav-bar__social-icons">

                    <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://www.instagram.com/ihya502/"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="nav-bar__svg svg-instagram"
                        viewBox="0 0 24 24"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                            <path d="M17.5 6.5L17.51 6.5"></path>
                        
                        </svg>
                    </a>

                    <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://hamzafoy.substack.com/"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true" 
                        role="img" 
                        width="1em" 
                        height="1em" 
                        className="nav-bar__svg svg-substack"
                        viewBox="0 0 24 24"
                        >

                            <path 
                            d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 
                            18.11L22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" 
                            fill="currentColor"/>
                            
                        </svg>
                    </a>

                    <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://www.facebook.com/ihya502"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="nav-bar__svg svg-facebook"
                        viewBox="0 0 24 24"
                        >

                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 
                            0 011-1h3z"></path>
                        
                        </svg>
                    </a>

                </section>

                <section className="nav-bar__organizational-icons">

                    <Link to="/about" class="router-links">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="nav-bar__svg svg-about-us"
                        viewBox="0 0 24 24"
                        >

                            <path className="svg-about-us-first" d="M17 10L3 10"></path>
                            <path className="svg-about-us-second" d="M21 6L3 6"></path>
                            <path className="svg-about-us-third" d="M21 14L3 14"></path>
                            <path className="svg-about-us-fourth" d="M17 18L3 18"></path>

                        </svg>
                    </Link>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="nav-bar__svg svg-calendar"
                    viewBox="0 0 24 24"
                    >

                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <path className="svg-calendar-ring" d="M16 2L16 6"></path>
                        <path className="svg-calendar-ring" d="M8 2L8 6"></path>
                        <path className="svg-calendar-paper" d="M3 10L21 10"></path>
                        <text className="svg-calendar-text-date" x="9.5" y="17">7</text>

                    </svg>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.25"
                    className="nav-bar__svg"
                    viewBox="0 0 24 24"
                    >

                        <circle className="svg-outer-cir" cx="12" cy="12" r="10"></circle>
                        <circle className="svg-middle-cir" cx="12" cy="12" r="6"></circle>
                        <circle className="svg-inner-cir" cx="12" cy="12" r="2"></circle>

                    </svg>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="nav-bar__svg"
                    viewBox="0 0 24 24"
                    >

                        <path className="svg-envelope" d="M4 4h16c1.1 0 2 .9 2 2v12c0 
                        1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <path className="svg-envelope-flap" d="M22 6L12 13 2 6"></path>
                        <text className="svg-envelope-text" x="10" y="14.5">T</text>

                    </svg>

                </section>

            </div>
        )

    }

}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default NavBar;